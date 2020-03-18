(function () {
  return {
    "data": {
      "seriesMapping": [
        {
          x: 0, y: 1
        },
        {
          x: 0, y: 2
        }
      ]
    },
    yAxis: {
      min: null,
      plotLines: [{
        color: '#B9CFD7',
        value: 100,
        width: 2
      }]
    },
    /*    "yAxis": [
          {
            "labels": {
              "format": "{value:,.0f}",
              "style": {
                "color": "#000000"
              }
            },
            "min": 0,
            "max": undefined,
            "title": {
              enabled: false
            }
          },
          {
            "opposite": true,
            "title": {
              enabled: false
            },
            "min": 0,
            "max": 240000,
            "gridLineWidth": 0,
            "labels": {
              "style": {
                "color": "#000000"
              }
            }
          }
        ],
    */
    "xAxis": {
      "tickInterval": 1,
      /*plotLines: [{
        color: '#B9CFD7',
        value: 2000,
        width: 1
      }]*/
    },
    "series": [
      {
        "marker": {
          enabled: false,
          "symbol": "circle"
        },
        "color": "#008AC3",
        "yAxis": 0,
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
        },
      },
      {
        "marker": {
          enabled: false,
          "symbol": "circle"
        },
        "color": "#68AB2B",
        "yAxis": 0,
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
        }
      }
      /*      {
              "marker": {
                enabled: false,
                "symbol": "circle"
              },     
              "color": "#008AC3",
              "yAxis": 0,
              "tooltip": {
                "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
              },
            },
            {
              "marker": {
                enabled: false,
                "symbol": "circle"
              },     
              "color": "#68AB2B",
              "yAxis": 1,
              "tooltip": {
                "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
              }
            }
      */
    ],
    "legend": {
      "enabled": true,
      //"x": 25,
      //"y": 55,
      //"itemWidth": 500,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
    }
  }
}());

