﻿chartOptions['I.50.1.0005'] = {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "style": {
          "fontSize": 10
        }
      },
      "stacking": "percent"
    }
  },
  "yAxis": {
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value}%",
      "style": {
        "color": "#000000"
      }

    }
  },
  "xAxis": {
    "type": "category",
    "title": {
      "style": {
        "color": "#000000"
      }
    },
    "labels": {
      "style": {
        "color": "#000000"
      }
    },
    "tickColor": "#FFFFFF"
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:.1f}</b> ({point.percentage:.0f}%)<br/>',
    shared: false
  },
  "exporting": {
    "sourceWidth": null,
    "scale": 5,
    buttons: {
      contextButton: {
        menuItems: Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 8)
      }
    }
  },
  "credits": {
    "text": "Quelle: Kantonale Bevölkerungsbefragungen;<br/>Statistisches Amt des Kantons Basel-Stadt",
    "enabled": true,
    "style": {
      "color": "#000000",
      "fontSize": 10
    },
    "position": {
      "align": "left",
      "verticalAlign": "bottom",
      x: 10,
      y: -17
    }
  },
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
    "itemMarginBottom": 5,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#999999",
      "index": 2
    },
    {
      "color": "#dc440e",
      "index": 0
    },
    {
      "color": "#ffbb58",
      "index": 1
    },
    {
      "color": "#68ab2b",
      "index": 3
    },
    {
      "color": "#007a2f",
      "index": 4
    }
  ],
  "title": {
    "style": {
      "fontSize": 14,
      "fontWeight": "bold",
      "fontFamily": "Arial",
      "color": "#000000"
    },
    "text": "Indikator 0.1.a: Wie zufrieden sind Sie mit dem Wohnungsangebot?",
    "align": "left"
  },
  "subtitle": {
    "style": {
      "fontSize": 12,
      "fontWeight": "normal",
      "fontFamily": "Arial",
      "color": "#000000"

    },
    "text": "",
    "align": "left"
  },
  "chart": {
    "renderTo": "container-I.50.1.0005",
    "borderColor": "#fbfbfb",
    "backgroundColor": "#fbfbfb",
    "width": 485,
    "marginBottom": 75,
    "marginTop": 75,
    "style": {
      "fontFamily": "Arial"
    },
    "zoomType": "y",
    "type": "column"
  }
};
