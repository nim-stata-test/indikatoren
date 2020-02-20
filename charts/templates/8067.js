(function () {
  return {
    /* "data": {
       "seriesMapping": [
         {
           x: 0, y: 1
         },
         {
           x: 0, y: 4
         },
         {
           x: 0, y: 7
         },
         {
           x: 0, y: 10
         }
       ]
     },*/
    plotOptions: {
      series: {
        "stacking": "normal",
        pointPadding: 0,
        groupPadding: 0.5, // exaclty overlaps columns
        borderWidth: 0
      }
    },
    "yAxis": {
      "tickInterval": 10,
      //"min": -20,
      //"max": 140,
      plotLines: [{
        value: 0,
        color: '#B6CFD7',
        //width: 2,
        zIndex: 0,
      }]
    },
    xAxis: {
      tickInterval: 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5
    },
    "series": [
      {
        "color": "#689199",
        "index": 0,
        "type": "column",
        "pointWidth": "15",
        legendIndex: 0
      },
      {
        "color": "#a8c4cb",
        "index": 0,
        "type": "column",
        "pointWidth": "15",
        legendIndex: 1
      },
      {
        "color": "#fabd24",
        "index": 0,
        "type": "column",
        "pointWidth": "15",
        legendIndex: 2
      },
      {
        "color": "#000000",
        "index": 1,
        "type": "line",
        "marker": {
          "enabled": false
        },
        //"yAxis": 1,
        legendIndex: 4,
        tooltip: {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
        }
      },
    ],
    "tooltip": {
      "shared": true
    },
  };
}());