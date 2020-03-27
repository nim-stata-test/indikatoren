(function(){
    return {
    "yAxis": [{
      gridLineColor: '#B9CFD7', 
      gridLineWidth: 0.5,
      lineColor: '#B9CFD7', 
    "labels": {
      "format": "{value:,.0f}",
      "formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      },
      "style": {
        "color": "#000000",
        fontSize: "10px"
      }
    },
    "min": 0,
    "max": undefined,
    tickAmount: 7,
    tickInterval: 0.01,
    "title": "", 
  },
  {
      gridLineColor: '#B9CFD7', 
      gridLineWidth: 0.5,
      lineColor: '#B9CFD7', 
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
        "color": "#000000",
        fontSize: "10px"
      }
    },
    "min": 0,
    "max": undefined,
    tickAmount: 7,
    tickInterval: 100,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 12,
     "type": "category",
     labels:{
       x: 12.5,
       rotation: 0,
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
		},
     }
  },
  "series": [
    {"color": "#B00000", "index": 0, //"yAxis": 0,
        "tooltip": {
				"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
		},
    },
    {"color": "#B00000", "index": 0, //"yAxis": 0,
        dashStyle: 'Dash',
        "tooltip": {
				"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
		},
    },
        {"color": "#FF8028", "index": 1, "yAxis": 1,
        "tooltip": {
				"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
		},
    },
     {"color": "#FF8028", "index": 1, "yAxis": 1,
     dashStyle: 'Dash',
        "tooltip": {
				"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
		},
    }
  ],

  "legend": {
    symbolPadding: 3,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    },
      labelFormatter: function(){
	        return this.name
              .replace("sonst. DL für den Verkehr", "sonst. DL")
              .replace("Monatliche Anzahl AL Post-, Kurier- und Expressdienste (rechte Skala)", "Monatl. Anz. AL Post-, Kurier-, Expr.dienste (rechte Skala)")
            ;
    }
  },
}
}());
