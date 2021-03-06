(function () {
  return {
    "chart": {
      "type": "area",
    },
    plotOptions: {
      /*series: {
        "stacking": "normal",
          pointPadding: 0,
          borderWidth: 0,
          pointWidth: 10, 

      }*/
      area: {
        stacking: 'normal',
        lineWidth: 0,
        //lineColor: '#666666',
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
      },
      tickInterval: 50000
    },
    "xAxis": {
      "type": "category",
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemWidth: 100,
      "itemMarginBottom": 5,
    },
    "series": [
      { "color": "#cd9c00", "index": 0, "marker": { "enabled": false }, legendIndex: 1 }, //rot
      { "color": "#b00000", "index": 1, "marker": { "enabled": false }, legendIndex: 0 }, //orange
    ],
  };
}());