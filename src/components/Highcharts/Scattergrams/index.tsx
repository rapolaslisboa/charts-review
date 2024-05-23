import HighchartsReact from "highcharts-react-official";
import * as Highcharts from "highcharts";
import patternFill from "highcharts/modules/pattern-fill";

patternFill(Highcharts);

const options: Highcharts.Options = {
  title: {
    text: "Scattergrams",
    align: "left",
  },
  chart: {
    type: "scatter",
  },
  legend: {
    title: {
      text: "Product lines",
      style: {
        fontWeight: "300",
      },
    },
    align: "right",
    layout: "vertical",
    verticalAlign: "top",
  },
  xAxis: {
    categories: ["0", "5", "10", "15", "Margin", "25", "30", "35", "40"],
    lineColor: "#c6c6c6",
    labels: {
      formatter() {
        const isLabelBold = this.value === "Margin";
        const fontWeight = isLabelBold ? "bold" : "300";
        return `<span style="font-weight: ${fontWeight}">${this.value}</span>`;
      },
    },
    tickWidth: 1,
    tickLength: 7,
    tickColor: "#c6c6c6",
  },
  yAxis: {
    tickWidth: 1,
    tickLength: 7,
    tickColor: "#c6c6c6",
    lineWidth: 1,
    lineColor: "#c6c6c6",
    gridLineWidth: 0,
    title: {
      text: "Net sales in mUSD",
      offset: 60,
      style: {
        color: "#404040",
      },
    },
  },
  series: [
    {
      name: "VA",
      type: "scatter",
      data: [42, 44, 45, 46, 44, 55, 44, 38, 39],
      color: "#d9422e",
      marker: {
        symbol: "circle",
        radius: 10,
      },
    },
    {
      name: "RX",
      type: "scatter",
      data: [31, 35, 33, 40, 41, 42, 38, 52, 43],
      color: "#404040",
      marker: {
        symbol: "circle",
        radius: 10,
      },
    },
    {
      name: "X2",
      type: "scatter",
      data: [26, 53, 30, 52, 52, 37, 42, 48, 47],
      color: {
        pattern: {
          path: "M 0 0 L 10 10 M 9 - 1 L 11 1 M - 1 9 L 1 11",
          width: 7,
          height: 7,
          color: "#404040",
        },
      },
      marker: {
        symbol: "circle",
        radius: 10,
      },
    },
  ],
};

export function HighchartsScattergrams() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
