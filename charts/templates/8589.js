(function(){
  return {
    "yAxis": {
      "tickInterval": 25000,
    	"min": 0,
      "max": 100000,
    	title: {
          text: null,
          "color": "#000000",
          "fontSize": null
      },
      "labels": {
        "format": "{value:,.0f}",
         style:{
         		color: "black",
         },
      },

    },
    "xAxis": {
      "tickInterval": 1,
      "labels": {
          	step: 1,
              "rotation": -45,
        }  

    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      alignColumns: false,
      //itemWidth: 140,
  	  "itemMarginBottom": 5,
      "itemStyle": {
        "fontWeight": "normal", 
        textOverflow: 'nowrap',
        whiteSpace: "nowrap"
      }
    },
    "series": [
      {
        "color": "#E7CEE2", // 
        "index": 0,
        "type": "column",
        pointPadding: 0,
        borderWidth: 0,
        legendIndex: 1,
      	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  		   },
      },
      {
        "color": "#C8C8C8", // 
        "index": 1,
        "type": "line",
         "marker": {
          "enabled": false
        },
        legendIndex: 2,
  	  "tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  	   },
      },
       {
        "color":  "#923F8D", // 
        "index": 0,
        "type": "column",
        pointPadding: 0,
        borderWidth: 0,
        //"pointWidth": "8",
        legendIndex: 3,
  	  "tooltip": {
    			"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },
  
      },
      {
        "color":  "#474747", // 
        "index": 1,
        "type": "line",
        "legendIndex": 3,
        "tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  	   },
        "marker": {
          "enabled": false
        },
      }
    ],  
     "tooltip": {
    	    //"shared": true
  		   },
    "chart": {
      "alignTicks": false,
			"width": 665,
		//	"height": 270,
    }
  };
}());