const exporter = require('highcharts-export-server');
//var execfile = require("execfile");
var fs = require('fs');
var path = require('path');

/*
//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var vm = require("vm");
var execute = function(path, context) {
  context = context || {};
  var data = fs.readFileSync(path);
  var result = vm.runInNewContext(data, context, path);
  return {context: context, result: result};
};
*/

var chartDetails = [];
/*
console.log('Deleting previous svg files...');
var rimraf = require("rimraf");
rimraf('images/indikatorenset/*', function(error) {
    if (error) { throw error; }
    rimraf('images/portal/*', function(error) {
        if (error) { throw error; }
        go();
    });
});
*/

go();


function go(){
    var views = ['portal'];
    views.forEach(function(view){
        console.log('Creating array entries for indikatorensetView=' + view);
        var files = JSON.parse(fs.readFileSync('tmp/chartsToBuild.json'));
        files.forEach(function(chartId) {
            var pathArray = createPathArray(chartId, view);
            //only add if not null
            if (pathArray) {chartDetails.push(pathArray)}
        });
    });
    
    //exporter.logLevel(4);
    exporter.initPool(
        {
            maxWorkers: 1,
            initialWorkers: 1,
            workLimit: 10
        });
        
    createSvgImages(chartDetails);
}


function createPathArray(chartId, view){
    var imagePath = 'images/' + view + '/';
    var configPath = 'charts/configs/' + view + '/';
    var singlePath = 'metadata/single/';
    var infilePath = path.join(__dirname, '../' + configPath + chartId + '.json');
    var additionalConfigPath = path.join(__dirname, '../' + singlePath + chartId + '.json');
    var outfilePath = path.join(__dirname, '../' + imagePath + chartId + '.svg');
    
    try{
        var configFile = fs.readFileSync(infilePath, 'utf8');
        var config = deserialize(configFile);
        var additionalConfigFile = fs.readFileSync(additionalConfigPath, 'utf8');
        var additionalConfig = deserialize(additionalConfigFile);
        
        //decide if stockchart, map, or chart
        var constr = config.isStock ? 'StockChart': (config.chart.type === 'map' ? 'Map' : 'Chart');
        return {
            config: config,
            additionalConfig: additionalConfig, 
            infilePath: infilePath, 
            outfilePath: outfilePath,
            constr: constr
        };
    }
    catch(err){
        console.log('Exception when reading json file ' + infilePath + ': ' + err);
    }
}


//alternatively use looping style used here: https://github.com/highcharts/node-export-server/issues/41 
function createSvgImages(chartDetails){
    if (chartDetails.length > 0){
        var chartEntry = chartDetails.pop();   
        //console.log('Current infile: ' + chart.infile);
        if (!chartEntry.additionalConfig.kennzahlenset.toLowerCase().includes('print')){
            var exportSettings = {
                type: 'svg',
                infile: chartEntry.infilePath,
                constr: chartEntry.constr,
                outfile: chartEntry.outfilePath, 
                //define empty mappie here to satisfy export server, same as in options001.js
                customCode: "function(){Highcharts.seriesType('mappie', 'pie', {}, {});}()", 
                //add proj4 and jQuery to export server's dependencies
                resources: {
                    files: "node_modules/proj4/dist/proj4.js,node_modules/jquery/dist/jquery.min.js,assets/js/customFunctions.js"
                }
            };
    
            exporter.export(exportSettings, function (err, res) {
                if (err) {throw err}
                //The export result is now in res.
                //If the output is not PDF or SVG, it will be base64 encoded (res.data).
                //If the output is a PDF or SVG, it will contain a filename (res.filename).
                console.log('File created: ' + res.filename + ', ' + chartDetails.length + ' to go...');
                createSvgImages(chartDetails);
            });
        }
        else{
            console.log('File not created (is Print-Indikator): ' + chartEntry.outfilePath + ', ' + chartDetails.length + ' to go...');
            createSvgImages(chartDetails);
        }
    }
    else {
        console.log('...done!');
        exporter.killPool();
        process.exit();
    }
}

//from https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}