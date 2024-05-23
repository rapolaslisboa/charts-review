import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function customFormatter(this: Highcharts.PointLabelObject) {
  if (["Jan", "Jun", "Aug", "Oct", "Dec"].includes(this.x as string)) {
    return this.y;
  } else {
    return null;
  }
}

const options: Highcharts.Options = {
  title: {
    text: "Line",
    align: "left",
  },
  legend: {
    squareSymbol: true,
    symbolRadius: 0,
    align: "right",
    layout: "vertical",
    verticalAlign: "top",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    lineColor: "#c6c6c6",
  },
  yAxis: {
    visible: false,
  },
  series: [
    {
      name: "AC",
      type: "line",
      legendSymbol: "rectangle",
      data: [42, 44, 45, 46, 44, 55, 44, 38, 39, 44, 47, 53],
      color: "#404040",
      marker: {
        symbol: "square",
      },
      dataLabels: {
        enabled: true,
        inside: false,
        style: {
          fontWeight: "300",
          textOutline: "none",
        },
        formatter: customFormatter,
      },
    },
    {
      name: "PY",
      type: "line",
      legendSymbol: "rectangle",
      data: [31, 35, 33, 40, 41, 42, 38, 52, 43, 35, 43, 44],
      color: "#969696",
      marker: {
        symbol: "square",
      },
      dataLabels: {
        enabled: true,
        inside: false,
        style: {
          fontWeight: "300",
          textOutline: "none",
        },
        formatter: customFormatter,
      },
    },
  ],
};

export function HighchartsLine() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
