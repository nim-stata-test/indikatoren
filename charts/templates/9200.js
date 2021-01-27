(function(){
    return {
  
  "xAxis": {
    "type": "category",
    "labels": {
      //"rotation": -90 

    } 
  },
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
   },
  "yAxis": {
    tickAmount: 6,
    "labels": {
      "format": "{value:,.1f}"
    }    
  },
  "series": [
  {"color": "#FABD24", "visible": true} /* gelb*/
  ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
   	//"y": 35,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false
    //"spacingBottom": 40
  }
}
}());