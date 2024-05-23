/* eslint-disable @typescript-eslint/no-this-alias */
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options: Highcharts.Options = {
  title: {
    text: "Stacked Column",
    align: "left",
  },
  chart: {
    type: "column",
    inverted: true,
    // events: {
    //   render: function () {
    //     const chart = this;
    //     const totalSum = chart.series.reduce((acc, series) => {
    //       return (
    //         acc +
    //         series.points.reduce((sum, point) => sum + (point.y as number), 0)
    //       );
    //     }, 0);
    //     chart.renderer
    //       .text("Total: " + totalSum, 25, chart.plotHeight + chart.plotTop + 15)
    //       .css({
    //         color: "#404040",
    //         fontSize: "13px",
    //         fontWeight: "bold",
    //       })
    //       .add();
    //   },
    // },
  },
  legend: {
    align: "left",
    verticalAlign: "top",
    x: 70,
  },
  xAxis: {
    categories: [
      "Spain",
      "Germany",
      "Switzerland",
      "Norway",
      "France",
      "Sweden",
      "Denmark",
    ],
    lineColor: "#c6c6c6",
    plotLines: [
      {
        color: "#c6c6c6",
        dashStyle: "Solid",
        width: 1,
        value: 6.5,
      },
    ],
  },
  yAxis: {
    visible: true,
    gridLineWidth: 0,
    title: { text: "" },
    labels: {
      enabled: false,
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: "300",
        fontSize: "13px",
      },
    },
  },
  series: [
    {
      name: "Wholesale",
      type: "column",
      data: [193, 158, 110, 86, 95, 75, 100],
      color: "#404040",
    },
    {
      name: "Retail",
      type: "column",
      data: [179, 97, 124, 162, 142, 84, 86],
      color: "#dddddd",
      dataLabels: {
        style: {
          color: "#404040",
        },
      },
    },
    {
      name: "Direct",
      type: "column",
      data: [141, 168, 140, 114, 118, 172, 103],
      color: "#808080",
    },
  ],
  plotOptions: {
    column: {
      pointWidth: 30,
      stacking: "normal",
      dataLabels: {
        enabled: true,
        style: {
          fontWeight: "300",
          textOutline: "none",
          color: "#fff",
          fontSize: "13px",
        },
      },
    },
  },
};

export function HighchartsStackedColumn() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
