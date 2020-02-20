/*
    global Highcharts
*/

(function () {
    return {
        data: {
            "seriesMapping": [
                {
                    x: 0, y: 2
                },
                {
                    x: 0, y: 4
                }
            ],
            parsed: function (columns) {
                //Negate the numbers in the the 2nd column to create the left side of the population pyramid
                var negateNumbersInColumn = function (columnIndex) {
                    Highcharts.each(columns, function (column, i, c) {
                        if (i == columnIndex) {
                            Highcharts.each(column, function (item, j, v) {
                                if (typeof (item) == 'number') {
                                    v[j] = -v[j];
                                }
                            });
                        }
                    });
                };
                negateNumbersInColumn(2);
                //negateNumbersInColumn(2);  //welche datenreihen sollen links (negativ) erscheinen?
            }
        },
        "chart": {
            marginRight: 15,
            marginBottom: 70,
            events: { // copied from resp. overwrite /charts/templates/populationPyramid001.js
                load: function () {
                    this.credits.element.onclick = function () { };

                    //for top-left legends with no x defined: move legend to x position of first yAxis
                    if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top') {
                        this.update(
                            {
                                legend: {
                                    x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding + 50 //fixed offset instead of /charts/templates/populationPyramid001.js
                                }
                            }
                        );
                    }
                },
            }
        },
        yAxis: [{
            tickInterval: 100,
            min: 0,
            title: {
                text: null
            },
            "labels": {
                step: 1,
                formatter: function () {
                    return Highcharts.numberFormat(Math.abs(this.value), 0, ",", " ");
                },
                "style": {
                    "color": "#000000"
                }
            },
            plotLines: [{
                value: 0,
                color: 'white',
                width: 1,
                zIndex: 4
            }],
            //create symmetric xAxis
            events: {
                afterSetExtremes: function (args) {
                    this.chart.options.customFunctions.createSymmetricAxis(this);
                },
            }
        }],
        xAxis: [{
            reversed: false,
            type: 'category',
            labels: {
                step: 1,
                style: {
                    color: "#000000"
                }
            },
            tickLength: 0,
            title: {
                style: {
                    color: "#000000"
                }
            }
        },
        { // mirror axis on right side
            type: 'category',
            visible: false,
            opposite: true,
            reversed: false,
            linkedTo: 0
        }],
        series: [
            {
                //color: "#246370", // blau dunkel
                color: "#008ac3",//"#7f5f1a",
                stacking: 'normal',
                //stack: 'male',
                legendIndex: 0
            },
            /*{
                //color: "#A8C3CA", //blau hell
                "color": "#cd9c00",
                stacking: 'normal',
                //stack: 'male',
                legendIndex: 2
            },*/
            {
                //color: "#923F8D", // rot dunkel 
                "color": "#b00000",//"#923f8d",
                stacking: 'normal',
                //stack: 'female',
                legendIndex: 1
            },
            /*{
                //color: "#E7CEE2", //rot hell
                "color": "#b375ab",
                stacking: 'normal',
                // stack: 'female',
                legendIndex: 3
            }*/
        ],
        "legend": {
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            "itemStyle": {
                "fontWeight": "normal"
            },
            //itemWidth: 160,
            /*labelFormatter: function () {
                return this.name.replace('Kleinhüningen', 'Kleinh.');
            }*/
        },
        "tooltip": {
            "shared": true,
            formatter: function () { //sum values correctly
                var s = '<span style="font-size: 12px">Alter: <b>' + this.points[0].key + '</b></span><br/>';
                var sum = 0;
                $.each(this.points, function (i, point) {
                    var v = Math.sqrt(this.y * this.y); //make - to + again
                    s += '<span style="color:' + point.series.color + '">\u25CF</span> ' + point.series.name + ': <b>' + v + '</b><br/>';
                    sum += v;
                });
                // s += 'Total: <b>'+ sum + '</b>';
                return s;
            },
        }
    };
}());