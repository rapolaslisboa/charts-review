/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/Button";
import { categories } from "@/utils/categories";
import { formatLabel } from "@/utils/format-label";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type ApexChartData = {
  x: any;
  y: any;
  fill?: ApexFill;
  fillColor?: string;
  strokeColor?: string;
  meta?: any;
  goals?: any;
  barHeightOffset?: number;
  columnWidthOffset?: number;
};

const initialData: ApexChartData[] = [
  { x: categories[0], y: [0, 9200], fillColor: "#404040" },
  { x: categories[1], y: [9200, 20600, 11400], fillColor: "#93c642" },
  { x: categories[2], y: [20600, 22000, 1400], fillColor: "#93c642" },
  { x: categories[3], y: [22000, 21200, -800], fillColor: "#d9422e" },
  { x: categories[4], y: [21200, 22200, 1000], fillColor: "#93c642" },
  { x: categories[5], y: [22200, 18100, -4100], fillColor: "#d9422e" },
  { x: categories[6], y: [18100, 0, 18100], fillColor: "#DE0175" },
];

const options: ApexOptions = {
  chart: {
    type: "rangeBar",
    toolbar: {
      show: false,
    },
    events: {
      dataPointSelection(_e, _chart, config) {
        const xVal = config.w.config.series[0].data[config.dataPointIndex].x;
        const yVal = config.w.config.series[0].data[config.dataPointIndex].y;
        alert(`${xVal}\nValue: ${yVal[0]}`);
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: number) {
      return formatLabel(val);
    },
    offsetY: -20,
    style: {
      fontWeight: 300,
      colors: ["#404040"],
    },
  },
  xaxis: {
    type: "numeric",
    categories,
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: { show: false },
  title: {
    text: "ApexCharts Waterfall",
    style: {
      fontFamily: "inherit",
      fontSize: "17px",
      fontWeight: 600,
    },
  },
};

const ApexChartsWaterfall = () => {
  const [data, setData] = useState<ApexChartData[]>(initialData);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = window.setInterval(() => {
        let cumulativeSum = 0;
        const randomValues = Array.from({ length: categories.length }, () =>
          Math.floor(Math.random() * 2000 - 1000)
        );

        const newData = randomValues.map((val: number, index) => {
          const start = cumulativeSum;
          const end = index === data.length - 1 ? 0 : cumulativeSum + val;
          cumulativeSum = end;

          return {
            x: categories[index],
            y: [start, end, start + end],
            fillColor:
              index === 0
                ? "#404040"
                : index === data.length - 1
                ? "#DE0175"
                : val >= 0
                ? "#93c642"
                : "#d9422e",
          };
        });

        setData(newData);
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, data]);

  const handleButtonClick = () => {
    setIsRunning(!isRunning);
  };

  const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      data,
    },
  ];

  return (
    <div className="flex-column">
      <Chart options={options} series={series} type="rangeBar" />
      <Button isRunning={isRunning} onClick={handleButtonClick} />
    </div>
  );
};

export { ApexChartsWaterfall };
