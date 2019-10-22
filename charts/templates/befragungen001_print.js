(function () {
    return {
        chart: {
            events: {
                load: function () {
                    this.credits.element.onclick = function () { };

                    //square legends must be placed 3 pixels more to the left than lines, don't know why
                    var squareLegendX = (this['options']['chart']['type'] == 'line' ? 0 : 3);

                    //for top-left legends with no x defined: move legend to x position of first yAxis
                    if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0) {
                        this.update({
                            legend: {
                                x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding - squareLegendX
                            }
                        });
                    }
                }
            },
            type: "column",
            width: 320,
            height: 208,
            spacing: [2, 2, 2, 2], /*top, right, bottom and left */
            borderColor: "#fbfbfb",
            backgroundColor: "#fbfbfb",
            zoomType: "xy",
            style: {
                fontFamily: "Arial",
                fontSize: "10px"
            },
        },
        plotOptions: {
            series: {
                stacking: "percent",
                borderWidth: 0,
                dataLabels: {
                    style: {
                        fontSize: "10px"
                    }
                }
            },
            column: {
                groupPadding: 0,
            }
        },
        title: {
            text: undefined
        },
        subtitle: {
            text: undefined
        },
        yAxis: {
            type: "category",
            tickInterval: 10,
            lineColor: '#B9CFD7',
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            title: {
                text: null
            },
            labels: {
                y: 3,
                format: "{value}%",
                style: {
                    fontSize: "10px",
                    color: "#000000",
                    textOverflow: "none"
                }
            }
        },
        xAxis: {
            type: "category",
            reversed: true,
            uniqueNames: true,
            lineColor: '#B9CFD7',
            lineWidth: 0.5,
            tickLength: 0,
            title: {
                style: {
                    color: "#000000"
                }
            },
            labels: {
                rotation: 0,
                style: {
                    fontSize: "10px",
                    color: "#000000",
                    width: 1,
                    whiteSpace: 'nowrap',
                    textOverflow: "none"
                },
                formatter: function () {
                    //add sum of observations of visible series to the axis label
                    var allVisibleSeries = this.chart.series.filter(function (val, i, arr) {
                        return val.visible;
                    });
                    var indexOfCurrentValue = this.axis.names.indexOf(this.value);
                    var sum = allVisibleSeries.reduce(function (accumulator, series, index, arr) {
                        return accumulator + series.yData[indexOfCurrentValue];
                    }, 0);

                    //use N if all series are visible, otherwise use n
                    var nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n=';

                    //if chart is inverted then add linebreak in xAxis labels before (N=XY), else space
                    var doBr = (this.chart.inverted == true) ? ' ' : '<br/>'; 

                    //var formattedSum = Highcharts.numberFormat(sum, 0, ",", " ")

                    this.value = this.value.replace("und weitere", "u.a.");

                    //check for value that contains only spaces
                    return (this.value.replace(/\s/g, "") == "") ? this.value : this.value + doBr + '(' + nString + sum + ')';
                }
            }
        },
        legend: {
            enabled: true,
            useHTML: true,
            layout: "vertical",
            align: "right",
            verticalAlign: "middle",
            symbolRadius: 0,
            padding: 0,
            itemMarginBottom: 4,
            itemStyle: {
                fontFamily: "Arial",
                fontSize: "10px",
                fontWeight: "normal",
                textOverflow: null,
                whitespace: "nowrap"
            },
            labelFormatter: function () {
                return this.name.replace('/ ', '/<br/>');
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: false
        },
        credits: {
            enabled: true,
            position: {}
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        }
    };
}());