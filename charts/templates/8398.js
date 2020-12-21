(function(){
    return {
    series: [
      { "color": "#007A2F"}, // dunkelgrün
      { "color": "#68AB2B"}, // grün
      { "color": "#FABD24"}, // orange
      { "color": "#DC440E"}, // rot
      { "color": "#C8C8C8"}, // hellgrau
      { "color": "#6F6F6F"}, // grau
    ],
    xAxis: {
        type: "category"
    },
    yAxis: {
        reversedStacks: false,
        tickInterval: 20,
        max: 100,
    },
    legend: {
        reversed: false,
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 4,
        "align": "left",
        itemWidth: 90,
            width: 300,
            itemStyle: {
                textOverflow: "none",
                whiteSpace: "nowrap"
                },
        labelFormatter: function(){
            return this.name.replace("/", " /<br/>");
        }
    }
	};
}());