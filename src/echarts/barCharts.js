var dom = document.getElementById("container");
var myChart = echarts.init(dom, null, {
  renderer: "svg",
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  yAxis: {
    type: "value",
  },
  xAxis: {
    type: "category",
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
  series: [
    {
      name: "Other",
      type: "bar",
      stack: "total",
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [320, 302, 301, 334, 390, 330, 320, 456, 678, 569, 422, 450],
      color: "#4AE8BB",
    },
    {
      name: "Business",
      type: "bar",
      stack: "total",
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210, 456, 658, 799, 232, 486],
      color: "#2F9175",
    },
    {
      name: "Enterprise",
      type: "bar",
      stack: "total",
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310, 456, 678, 789, 432, 450],
      color: "#339E80",
    },
    {
      name: "Voice Business",
      type: "bar",
      stack: "total",
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [150, 212, 201, 154, 190, 330, 410, 456, 678, 249, 832, 450],
      color: "#3FC49F",
    },
    {
      name: "Voice Enterprise",
      type: "bar",
      stack: "total",
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320, 456, 1678, 739, 1432, 950],
      color: "#3DBF9A",
    },
    {
      name: "Annnée 2022",
      type: "bar",
      stack: "total",
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [
        1820, 1832, 1901, 1934, 1290, 1330, 1320, 1456, 3678, 1739, 1532, 1450,
      ],
      color: "#3DCE6B",
    },
    {
      name: "Total",
      type: "bar",
      stack: "total",
      color: "transparent",
      label: {
        show: true,
        fontSize: 7,
        formatter: "Tot:{@data}",
        color: "red",
        position: "insideBottom",
      },
      emphasis: {
        focus: "series",
      },
      data: [
        1820, 1832, 1901, 1934, 1290, 1330, 1320, 1456, 3678, 1739, 1532, 1450,
      ],
      // color: "#3DCE6B",
    },
  ],
};
if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
