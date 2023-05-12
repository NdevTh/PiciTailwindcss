var dom = document.getElementById("container2");
var myChart = echarts.init(dom, null, {
  renderer: "svg",
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    type: "value",
  },
  tooltip: {
    show: true,
  },
  series: [
    {
      data: [320, 302, 301, 334, 390, 330, 320, 456, 678, 789, 832, 1450],
      type: "line",
      areaStyle: {
        color: "#C5DDE3",
      },
    },
  ],
};
if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
