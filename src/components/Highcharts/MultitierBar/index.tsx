import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const categories = [
  "New Mexico",
  "Maryland",
  "Maine",
  "Kansas",
  "Connecticut",
  "Texas",
  "Wisconsin",
  "Alakas",
  "Missouri",
  "New Jersey",
  "Virginia",
  "Rest",
];

const options: Highcharts.Options = {
  title: {
    text: "Multi-tier Bar",
    align: "left",
  },
  yAxis: [
    {
      width: "33.33%",
      showLastLabel: false,
      labels: {
        enabled: false,
      },
      gridLineWidth: 0,
      title: { text: "" },
    },
    {
      left: "33.33%",
      width: "33.33%",
      offset: 0,
      showLastLabel: false,
      labels: {
        enabled: false,
      },
      gridLineWidth: 0,
      title: { text: "" },
    },
    {
      labels: {
        enabled: false,
      },
      left: "66.66%",
      width: "33.33%",
      offset: 0,
      gridLineWidth: 0,
      title: { text: "" },
    },
  ],
  legend: {
    enabled: false,
  },
  chart: {
    type: "bar",
  },
  xAxis: {
    categories: categories,
    lineColor: "#c6c6c6",
    plotLines: [
      {
        color: "#c6c6c6",
        dashStyle: "Solid",
        width: 1,
        value: 11.5,
      },
    ],
  },
  plotOptions: {
    bar: {
      grouping: false,
    },
  },
  series: [
    {
      borderRadius: 0,
      pointPadding: -0.1,
      color: "#404040",
      type: "bar",
      data: [
        73,
        125,
        111,
        45,
        50,
        197,
        76,
        15,
        {
          y: 59,
        },
        {
          y: 78,
        },
        {
          y: 69,
        },
        {
          y: 219,
        },
      ],
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
      borderRadius: 0,
      pointPadding: -0.1,
      color: "#93c642",
      type: "bar",
      yAxis: 1,
      data: [
        4,
        2,
        2,
        2,
        { y: -3, color: "#ff0000" },
        { y: -4, color: "#ff0000" },
        { y: -6, color: "#ff0000" },
        { y: -6, color: "#ff0000" },
        {
          y: -29,
          color: "#ff0000",
        },
        {
          y: -31,
          color: "#ff0000",
        },
        {
          y: -97,
          color: "#ff0000",
        },
        {
          y: 20,
        },
      ],
      dataLabels: {
        enabled: true,
        inside: false,
        style: {
          fontWeight: "300",
          textOutline: "none",
        },
        formatter: function () {
          const yValue = this.y as number;
          const sign = yValue >= 0 ? "+" : "-";
          const formattedValue =
            sign + Highcharts.numberFormat(Math.abs(yValue), 0);

          return formattedValue;
        },
      },
    },
    {
      borderRadius: 0,
      pointPadding: -0.1,
      color: "#93c642",
      type: "bar",
      yAxis: 2,
      pointWidth: 5,
      data: [
        6,
        2,
        2,
        5,
        {
          y: -6,
          color: "#ff0000",
          marker: {
            radius: 10,
            enabled: true,
            symbol: "triangle",
            width: 20,
            height: 20,
            color: "pink",
          },
        },
        { y: -2, color: "#ff0000" },
        { y: -7, color: "#ff0000" },
        { y: -29, color: "#ff0000" },
        {
          y: -33,
          color: "#ff0000",
        },
        {
          y: -28,
          color: "#ff0000",
        },
        {
          y: -58,
          color: "#ff0000",
        },
        {
          y: 10,
        },
      ],
      dataLabels: {
        enabled: true,
        inside: false,
        style: {
          fontWeight: "300",
          textOutline: "none",
        },
        formatter: function () {
          const yValue = this.y as number;
          const sign = yValue >= 0 ? "+" : "-";
          const formattedValue =
            sign + Highcharts.numberFormat(Math.abs(yValue), 0);

          return formattedValue;
        },
      },
    },
  ],
};

export function HighchartsMultitierBar() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
