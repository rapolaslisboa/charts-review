import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);

const initialData: Highcharts.PointOptionsObject[] = [
  {
    y: 400000,
  },
  {
    y: 700000,
  },
  {
    isIntermediateSum: true,
  },
  {
    y: -200000,
  },
  {
    y: -150000,
  },
  {
    y: -340000,
  },
  {
    y: -100000,
  },
  {
    isIntermediateSum: true,
  },
  {
    isSum: true,
  },
];

const formatYAxisLabel = (value: number) => {
  if (value < 1000) {
    return `$${value}`;
  }

  if (value < 1000000) {
    return `$${Math.floor(value / 1000)}K`;
  }

  const millions = value / 1000000;
  const formattedMillions = millions % 1 === 0 ? millions : millions.toFixed(1);
  return `$${formattedMillions}M`;
};

const options: Highcharts.Options = {
  title: {
    text: "Total Profit Calculation",
    style: { color: "#646464" },
  },
  subtitle: {
    text: "Last month",
    style: {
      color: "#a5a5a5",
    },
  },
  xAxis: {
    type: "category",
    lineColor: "#f2f2f2",
    categories: [
      "Online Sales",
      "Store Sales",
      "Total Sales",
      "Fixed Costs",
      "Variable Costs",
      "COGS",
      "Promotion Costs",
      "Total Costs",
      "Total Profit",
    ],
    labels: {
      style: {
        color: "#646464",
      },
    },
  },
  yAxis: {
    visible: true,
    title: {
      text: "Amount (in USD)",
      margin: 15,
      style: {
        color: "#ababab",
        fontSize: "13px",
      },
    },
    labels: {
      formatter: function () {
        return formatYAxisLabel(this.value as number);
      },
      style: {
        color: "#646464",
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      type: "waterfall",
      upColor: "#62b58f",
      color: "#f2726f",
      dashStyle: "Dot",
      lineColor: "#404040",
      borderWidth: 0,
      borderRadius: 0,
      lineWidth: 1,
      data: initialData,
      dataLabels: {
        enabled: false,
      },
      pointPadding: -0.1,
    },
  ],
  tooltip: {
    formatter: function () {
      return `${this.x}, ${formatYAxisLabel(Math.abs(this.y as number))}`;
    },
    style: {
      color: "#646464",
    },
  },
};

const HighchartsCustomHorizontalWaterfall = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export { HighchartsCustomHorizontalWaterfall };
