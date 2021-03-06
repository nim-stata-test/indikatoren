(function () {
  return {
    "plotOptions": {
      "series": {
        "dataLabels": {
          "enabled": false
        }
      }
    },
    "yAxis": [
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          "style": {
            "color": "#000000",
            "fontSize": null
          },
          "text": null
        },
        "labels": {
          "format": "{value:,.0f}",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0
      },
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          "style": {
            "color": "#000000",
            "fontSize": null
          },
          "text": null
        },
        "labels": {
          "format": "{value:,.0f}",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0,
        "opposite": true
      }
    ],
    "xAxis": {
      lineColor: '#B9CFD7',
      lineWidth: 0.5,
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"y": 25,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
      {
        "color": "#923f8d",
        "index": 0,
        "type": "column"
      },
      {
        "color": "#cd9c00",
        "index": 1,
        "type": "column",
        "yAxis": 1,
        tooltip: {
          valueDecimals: 0
        },
        marker: {
          enabled: false
        }
      }
    ],
    "tooltip": {
      "shared": false
    },
    "chart": {
      "type": "line"
    }
  }
}());
