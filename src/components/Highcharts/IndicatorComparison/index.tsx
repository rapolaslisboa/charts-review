import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options: Highcharts.Options = {
  title: {
    text: "Indicator Comparison",
    align: "left",
  },
  legend: {
    enabled: false,
  },
  yAxis: {
    visible: false,
  },
  xAxis: {
    categories: ["Q1", "Q2", "Q3", "Q4"],
    lineColor: "#c6c6c6",
  },
  series: [
    {
      type: "column",
      borderWidth: 0,
      borderRadius: 0,
      color: "#595959",
      data: [89, 95, 97, 92],
      pointPadding: -0.1,
      dataLabels: {
        enabled: true,
        inside: false,
        style: {
          fontWeight: "300",
          textOutline: "none",
        },
      },
    },
    {
      type: "scatter",
      name: "Indicator",
      marker: {
        symbol: "triangle",
        radius: 8,
        width: 20,
        height: 20,
      },
      data: [
        { x: -0.3, y: 110, color: "#FF0000" }, // (Q1)
        { x: 0.7, y: 80, color: "#00FF00" }, // (Q2)
        { x: 1.7, y: 45, color: "#00FF00" }, // (Q3)
        { x: 2.7, y: 106, color: "#FF0000" }, // (Q4)
      ],
      // dataLabels: {
      //   enabled: true,
      //   useHTML: true,
      //   formatter: function () {
      //     const color = this.point.color;
      //     const size = 15;
      //     return `<div style="
      //       border-left: ${size / 2}px solid transparent;
      //       border-right: ${size / 2}px solid transparent;
      //       border-bottom: ${size}px solid ${color};
      //       transform: rotate(90deg);">
      //     </div>`;
      //   },
      // },
    },
  ],
};

export function HighchartsIndicatorComparison() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
