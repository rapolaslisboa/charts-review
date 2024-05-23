import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function customFormatter(this: Highcharts.PointLabelObject) {
  if (["Jan", "Mar", "Jul", "Oct"].includes(this.x as string)) {
    return this.y;
  } else {
    return null;
  }
}

const options: Highcharts.Options = {
  title: {
    text: "Area",
    align: "left",
  },
  yAxis: {
    visible: false,
  },
  legend: {
    enabled: false,
  },
  chart: {
    type: "area",
  },
  xAxis: {
    categories: ["Jan", "", "Mar", "", "", "", "Jul", "", "", "Oct"],
    lineColor: "#c6c6c6",
  },
  series: [
    {
      type: "area",
      color: "#93c642",
      data: [92, 95, 112, 87, 81, 120, 140, 135, 136, 125],
      lineColor: "#404040",
      marker: {
        enabled: false,
      },
      dataLabels: {
        enabled: true,
        style: {
          fontWeight: "300",
          textOutline: "none",
        },
        formatter: customFormatter,
      },
    },
    {
      type: "area",
      color: "#d9422e",
      data: [76, 81, 95, 102, 107, 95, 126, 120, 114, 110],
      dashStyle: "Dash",
      lineColor: "#404040",
      marker: {
        enabled: false,
      },
      dataLabels: {
        enabled: true,
        style: {
          fontWeight: "300",
          textOutline: "none",
        },
        formatter: customFormatter,
      },
    },
  ],
};

export function HighchartsArea() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
