(function(){
    return {
	plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
  "xAxis": {
    "type": "category"
  },
  "yAxis": {
    tickInterval: 10,
    //max: 50,
    "labels": {
      "format": "{value}" 
    }    
  },
  "series": [
  {"color": "#661200"},
  {"color": "#dc440e"}, 
  {"color": "#7f5f1a"}, 
  {"color": "#ffda80"}, 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    itemDistance: 10,  
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
    shared: false
  },  
  "chart": { 
    "type": "column",
    "inverted": false
  }
}
}());

 