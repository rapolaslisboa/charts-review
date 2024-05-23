/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);

const options: Highcharts.Options = {
  title: {
    text: "Horizontal Waterfall",
    align: "left",
  },
  xAxis: {
    type: "category",
    lineColor: "#c6c6c6",
    categories: ["iPF 2023", "UE", "sbE", "BV", "aEL", "OPEX", "FCO 2024"],
  },
  yAxis: {
    visible: false,
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      type: "waterfall",
      upColor: "#93c642",
      color: "#d9422e",
      dashStyle: "Solid",
      lineColor: "#d1d1d1",
      borderWidth: 0,
      borderRadius: 0,
      lineWidth: 1,
      data: [
        {
          y: 9200,
          color: "#404040",
        },
        {
          y: 11400,
        },
        {
          y: 1400,
        },
        {
          y: -800,
        },
        {
          y: 1000,
        },
        {
          y: -4100,
        },
        {
          isSum: true,
          color: "#DE0175",
        },
      ],
      dataLabels: {
        enabled: true,
        inside: false,
        formatter: function () {
          let formattedValue = "";
          if (typeof this.y === "number") {
            if (this.y >= 1000) {
              formattedValue =
                "+ " +
                Highcharts.numberFormat(Math.abs(this.y) / 1000, 1) +
                "k";
            } else if (this.y <= -1000) {
              formattedValue =
                "- " +
                Highcharts.numberFormat(Math.abs(this.y) / 1000, 1) +
                "k";
            }

            // Values lower than 1000
            else {
              formattedValue = this.y >= 0 ? "+ " : "- ";
              formattedValue += Highcharts.numberFormat(Math.abs(this.y), 0);
            }
          }

          return formattedValue;
        },
        style: {
          fontWeight: "300",
          textOutline: "none",
        },
      },
      pointPadding: -0.1,
    },
  ],
  tooltip: {
    pointFormat: "<b>€ {point.y:.2f}</b>",
  },
};

export function HighchartsHorizontalWaterfall() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
