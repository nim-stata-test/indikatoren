(function () {
  return {
    "xAxis": {
      "tickInterval": 1,
    },
    "yAxis": {
      "min": 0,
      tickInterval: 1,
      "labels": {
        "format": "{value}%"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
    },
    "series": [
      { "color": "#b00000" }, /*Schweiz*/
      { "color": "#672773" }, /*Deutschland*/
      { "color": "#007a2f" }, /*Italien*/
      { "color": "#fabd24" }, /*Türkei*/
      { "color": "#b475ab" }, /*EU-17 & EFTA*/
      { "color": "#71a3b5" }, /*EU-Ost */
      { "color": "#b9cfd7" }, /*Balkan*/
      { "color": "#ff8028" }, /*Mittel- & Südamerika */
      { "color": "#73ba7c" }, /*Arabische Länder */
      { "color": "#9f7c5a" }, /*Afrikanische Länder*/
      { "color": "#999999" }, /*Übrige Länder*/
    ],
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      //itemDistance: 1,
      //itemWidth: 100,
      "itemMarginBottom": 3,
      labelFormatter: function () {
        return this.name.replace('und', 'und<br>');
      }
    },
    "plotOptions": {
      "line": {
        "marker": {
          "symbol": "circle",
        }
      }
    }
  }
}());