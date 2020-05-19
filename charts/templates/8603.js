/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/

var legendPosition = {
	blockChoropleth: {
		x: 518, // Customizable
		y: -15,  // Customizable
		title: {
			y: [320, 302, 285],
			x: 525, // Customizable
		}
	},
	blockSymbol: {
		x: [750,745], // Customizable
		y: [377, 402, 427, 452], // Customizable
		y3C: [382, 412, 442],
		numbers: {
			x: 0,
			y: [365, 390, 420, 445], // Customizable
			y3C: [370, 400, 430]
		},
		title: {
			x: 0
		}
	}
};

legendPosition.blockSymbol.numbers.x = legendPosition.blockSymbol.x[0] + 15;

legendPosition.blockSymbol.title.x = legendPosition.blockSymbol.x[0] - 10;
var i;
for (i = 0; i < 3; i++) {
	legendPosition.blockChoropleth.title.y[i] -= legendPosition.blockChoropleth.y;
};

(function(){

    return {
		"legend": {
    		useHTML: false,
			"title": {
				"text": null, 
				style: {'fontWeight':' bold'}
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "left",
			"x": legendPosition.blockChoropleth.x,
			"y": legendPosition.blockChoropleth.y,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
				}
		},
         colorAxis: {
            dataClassColor: 'category',
        	dataClasses: [{
               	from: 0,
                to:59.999,
                color: '#D3E2E4',
                name:  "<span style='color: rgba(0,0,0,0)'>000,0</span> < 60,0"
            }, {
                from: 60.0,
                to: 69.999,
                color: '#A8C3CA',
                name: "<span style='color: rgba(0,0,0,0)'>0</span>60,0 − 69,9"
            }, {
                from: 70.0,
                to: 74.999,
                 color: '#689199',
                 name: "<span style='color: rgba(0,0,0,0)'>0</span>70,0 − 74,9"
            },{
                from: 75.0,
                to: 84.999,
                 color: '#246370',
                 name: "<span style='color: rgba(0,0,0,0)'>0</span>75,0 − 84,9"
            },{
                from: 85,
                color: '#083038',
                name:  "<span style='color: rgba(0,0,0,0)'>000,0</span> ≥ 85,0"
            }], 
        },
        "data": {
		    "seriesMapping": [
		      {
		      	x: 0, y: 2
		      },
		      {
		      	//2nd series: use y values from column 3
		      	y: 3
		      }
		    ]
        },
		"series": [
			{
				"name": "Wohnviertel", 
				"animation": true,
				"mapData": geojson_wohnviertelEPSG2056,
				"borderColor": "#fbfbfb",		
				"joinBy": ['TXT', 'Wohnviertel_Id'],
				"keys": ['Wohnviertel_Id', 'value'],
				"states": {
					"hover": {
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
					}
				}, 
				tooltip: {
					pointFormatter: function(){
						//console.log(this);
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),1) + '</b><br/>';
					}
				}
			}, 
			{
				"visible": false
			}
		],
		chart: {
			events: {
	            load: function (e) {
	            	
	            	this.credits.element.onclick = function() {};

	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mappie"
					fn.defineTemplate();
					
					var choroplethSeries = chart.series[0];
					var pieSizeSeries = chart.series[1];
					
					//pie diameters in px
					var maxPieDiameter = 20;

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);
					
					//define different colors for positive and negative values
	                var color = function(value){
	                	return (value >= 0) ? '#007A2F' : '#990300';
	                };					
					
					//define chart-specific details
					var pieSeriesConfig = function(data, correspondingMapSeriesItem, color){
						return {
	                        sizeFormatter: function () {
	                            var fn = this.chart.options.customFunctions;
								return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter); 
								//return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
	                        },
	                        tooltip: {
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),1) + '%</b><br/>';
	                            }
	                        }
	                    };
					};
					var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);
	                
					//pie values in legend
	                var minValueInLegend = 1; 
	                var maxValueInLegend = 7; 
					
                	//Add manually drawn legend	
					//fn.addLegendTitle(chart, "Veränderung von 1995 bis 2015 in m²", 265, 220);

					//fn.addLegendRectangle(chart, 243, 212, 105, 145, '#fbfbfb');
					//fn.addLegendRectangle(chart, 355, 212, 110, 145, '#fbfbfb');
					
					fn.addLegendTitle(chart, choroplethSeries.name.replace("er ", "er<br/>"), legendPosition.blockChoropleth.title.x, legendPosition.blockChoropleth.title.y[1]);
					
					fn.addLegendTitle(chart,  pieSizeSeries.name.replace(" ", "<br/>"), legendPosition.blockSymbol.title.x, legendPosition.blockChoropleth.title.y[1]);

					fn.addLegendCircle(chart, legendPosition.blockSymbol.x[0], legendPosition.blockSymbol.y[0], 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey');
	                fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend),0,","," "), legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y[0]);
	                fn.addLegendCircle(chart, legendPosition.blockSymbol.x[0], legendPosition.blockSymbol.y[1], 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey');
					fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend),0,"."," "), legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y[1]);
					
					fn.addLegendSquare(chart, legendPosition.blockSymbol.x[1], legendPosition.blockSymbol.y[2], 10, '#007A2F');
					fn.addLegendLabel(chart, 'Zunahme', legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y[2]);
					fn.addLegendSquare(chart, legendPosition.blockSymbol.x[1], legendPosition.blockSymbol.y[3], 10, '#990300');
					fn.addLegendLabel(chart, 'Abnahme', legendPosition.blockSymbol.numbers.x, legendPosition.blockSymbol.numbers.y[3])

	                

					/*var shiftDown = 12;

		        	fn.addLegendCircle(chart, 373, 266+shiftDown, 0.5*pieSizeCatConfig[0].diameter, '#007A2F');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 465, 255+shiftDown, undefined, false, 'right');
	                fn.addLegendCircle(chart, 373, 285+shiftDown, 0.5*pieSizeCatConfig[1].diameter, '#007A2F');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 465, 275+shiftDown, undefined, false, 'right');
	                fn.addLegendCircle(chart, 373, 310+shiftDown, 0.5*pieSizeCatConfig[2].diameter, '#007A2F');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 465, 300+shiftDown, undefined, false, 'right');
					*/
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
	            }
			}
		}
	};
}());

