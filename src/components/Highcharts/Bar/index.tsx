/* eslint-disable @typescript-eslint/no-this-alias */
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import patternFill from "highcharts/modules/pattern-fill";
import CustomEvents from "highcharts-custom-events";

CustomEvents(Highcharts);
patternFill(Highcharts);

const options: Highcharts.Options = {
  title: {
    text: "Bar",
    align: "left",
  },
  subtitle: {
    text: "This example has a click event, try it.",
    align: "left",
  },
  yAxis: {
    visible: false,
  },
  legend: {
    enabled: false,
  },
  chart: {
    type: "column",
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
    plotLines: [
      {
        color: "#404040",
        dashStyle: "Dash",
        width: 1,
        value: 7.5, // Position between Aug (index 7) and Sep (index 8)
      },
    ],
  },
  series: [
    {
      borderRadius: 0,
      pointPadding: -0.1,
      color: "#404040",
      type: "column",
      data: [
        10,
        18,
        24,
        22,
        26,
        27,
        19,
        19,
        {
          y: 22,
          borderColor: "#404040",
          color: {
            patternIndex: 9,
            pattern: {},
          },
        },
        {
          y: 27,
          borderColor: "#404040",
          color: {
            patternIndex: 9,
            pattern: {},
          },
        },
        {
          y: 24,
          borderColor: "#404040",
          color: {
            patternIndex: 9,
            pattern: {},
          },
        },
        {
          y: 28,
          borderColor: "#404040",
          color: {
            patternIndex: 9,
            pattern: {},
          },
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
  ],
  plotOptions: {
    series: {
      cursor: "pointer",
      point: {
        events: {
          click: function (e) {
            const point = this;
            console.log("Point", point);
            console.log("Event", e);
            alert(`You just clicked a bar point: (${point.x}, ${point.y})`);
          },
        },
      },
    },
  },
};

export function HighchartsBar() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
