(function () {
  return {
    "xAxis": {
      "tickInterval": 1
    },
    "yAxis": [{
      labels: {
        format: "{value:,.0f}",
        y: 3,
        style: {
          color: "#000000",
          fontSize: '10px',
        }
      },
      min: 0,
      max: undefined,
      tickAmount: 5,
      title: ""
    },
    {
      title: {
        style: {
          color: "#000000",
          fontSize: null
        },
        text: null
      },
      labels: {
        format: "{value:,.0f}",
        y: 3,
        style: {
          color: "#000000",
          fontSize: '10px',
        }
      },
      min: 0,
      tickAmount: 5,
      gridLineWidth: 0,
      opposite: true
    }
    ],
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    "series": [
      {
        "color": "#256370",
        index: 10, "yAxis": 0, visible: false, showInLegend: false
      }, /*blau*/
      {
        "color": "#a8c4cb",
        index: 9, "yAxis": 0, visible: false, showInLegend: false
      }, /*hellblau*/
      {
        "color": "#ffbb58",
        index: 8, "yAxis": 0, visible: false, showInLegend: false
      }, /*hellorange*/
      {
        "color": "#b475ab",
        index: 7, "yAxis": 0, visible: true
      }, /*hellviolett*/
      {
        "color": "#44ab2b",
        index: 6, "yAxis": 0, visible: false, showInLegend: false
      }, /*grün*/
      {
        "color": "#007a2f",
        index: 5, "yAxis": 0, visible: false, showInLegend: false
      },  /*dunkelgrün*/
      {
        "color": "#672773",
        index: 4, "yAxis": 0, visible: false, showInLegend: false
      }, /*violett*/
      {
        "color": "#b00000",
        index: 3, "yAxis": 0, visible: false, showInLegend: false
      }, /*rot*/
      {
        "color": "#ff8028",
        index: 2, "yAxis": 0, visible: false, showInLegend: false
      }, /*orange*/
      {
        "color": "#cd9c00",
        index: 1, "yAxis": 0, visible: false, showInLegend: false
      }, /*hellbraun*/
      {
        "color": "#dddddd",
        "index": 0,
        "legendIndex": 12,
        "type": "column",
        "borderWidth": 0,
        "yAxis": 1,
        /*"tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
         }*/
      }, // grau
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
