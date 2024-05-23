/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);

const options: Highcharts.Options = {
  title: {
    text: "Vertical Waterfall",
    align: "left",
  },
  xAxis: {
    type: "category",
    lineColor: "#c6c6c6",
    categories: [
      "Net Sales",
      "Total Cost of Sales",
      "Gross Margin",
      "Operating Expenses",
      "Other Income and Expense",
      "Taxes",
      "Net Income",
    ],
    labels: {
      formatter() {
        const isLabelBold =
          this.value === "Gross Margin" || this.value === "Net Income";
        const fontWeight = isLabelBold ? "bold" : "300";
        return `<span style="font-weight: ${fontWeight}">${this.value}</span>`;
      },
    },
    plotLines: [
      {
        color: "#c6c6c6",
        dashStyle: "Solid",
        width: 1,
        value: 1.5,
      },
      {
        color: "#c6c6c6",
        dashStyle: "Solid",
        width: 1,
        value: 5.5,
      },
    ],
  },
  yAxis: {
    visible: false,
  },
  chart: {
    // Inverts chart to make it vertical
    inverted: true,
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      type: "waterfall",
      upColor: "#808080",
      color: "#595959",
      dashStyle: "Solid",
      lineColor: "#d1d1d1",
      borderWidth: 0,
      borderRadius: 0,
      lineWidth: 1,
      data: [
        {
          y: 25334,
        },
        {
          y: -7840,
        },
        {
          isIntermediateSum: true,
          dataLabels: {
            style: {
              fontWeight: "bold",
            },
          },
        },
        {
          y: -11331,
        },
        {
          y: 18,
        },
        {
          y: -1428,
        },
        {
          isSum: true,
          dataLabels: {
            style: {
              fontWeight: "bold",
            },
          },
        },
      ],
      dataLabels: {
        enabled: true,
        inside: false,
        formatter: function () {
          const formattedValue = Math.abs(this.y as number)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

          return formattedValue;
        },
        x: 5,
        style: {
          fontWeight: "300",
          textOutline: "none",
        },
      },
      pointPadding: -0.1,
      tooltip: {
        pointFormat: "<b>€ {point.y:.2f}</b>",
      },
    },
  ],
};

export function HighchartsVerticalWaterfall() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
