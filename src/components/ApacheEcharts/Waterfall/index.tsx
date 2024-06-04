import { Button } from "@/components/Button";
import { categories } from "@/utils/categories";
import { formatLabel } from "@/utils/format-label";
import { BarDataItemOption } from "echarts/types/src/chart/bar/BarSeries.js";
import { OptionDataValue } from "echarts/types/src/util/types.js";
import { useEffect, useState } from "react";
import { ReactECharts, ReactEChartsProps } from "../base";

type WaterfallData = OptionDataValue | BarDataItemOption | OptionDataValue[];
const initialData: number[] = [9200, 11400, 1400, -800, 1000, -4100, 18100];

const ApacheEChartsWaterfall = () => {
  const [data, setData] = useState<number[]>(initialData);
  const [isRunning, setIsRunning] = useState(false);
  const [positive, setPositive] = useState<WaterfallData[]>([]);
  const [negative, setNegative] = useState<WaterfallData[]>([]);
  const [placeholder, setPlaceholder] = useState<WaterfallData[]>([]);
  const [lineData, setLineData] = useState<number[]>([]);

  const generateChartData = (newData: number[]) => {
    const positiveData: WaterfallData[] = [];
    const negativeData: WaterfallData[] = [];
    const placeholderData: WaterfallData[] = [];
    const lineData: number[] = [];

    for (let i = 0, sum = 0; i < newData.length; ++i) {
      const isFirstOrLast = i === 0 || i === newData.length - 1;
      if (newData[i] >= 0) {
        positiveData.push(
          isFirstOrLast
            ? {
                value: newData[i],
                itemStyle: { color: i === 0 ? "#404040" : "#DE0175" },
              }
            : newData[i]
        );
        negativeData.push("-");
      } else {
        positiveData.push("-");
        negativeData.push(-newData[i]);
      }

      if (i === 0 || i === newData.length - 1) {
        placeholderData.push(0);
      } else {
        sum += newData[i - 1];
        if (newData[i] < 0) {
          placeholderData.push(sum + newData[i]);
        } else {
          placeholderData.push(sum);
        }
      }

      if (isFirstOrLast) {
        lineData.push(i === 0 ? 0 : newData[i]);
      } else {
        lineData.push(sum);
      }
    }

    setPositive(positiveData);
    setNegative(negativeData);
    setPlaceholder(placeholderData);
    setLineData(lineData);
  };

  useEffect(() => {
    generateChartData(data);
  }, [data]);

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = window.setInterval(() => {
        const newData = data.map((point) => {
          return point + Math.floor(Math.random() * 2000 - 1000);
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

  const options: ReactEChartsProps["option"] = {
    title: {
      text: "Apache ECharts Waterfall",
    },
    xAxis: {
      type: "category",
      splitLine: { show: false },
      data: categories,
      axisTick: { show: false },
      axisLine: {
        lineStyle: { color: "#d1d1d1" },
      },
      axisLabel: {
        color: "#404040",
      },
    },
    yAxis: {
      type: "value",
      show: false,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    series: [
      {
        name: "Placeholder",
        type: "bar",
        stack: "all",
        itemStyle: {
          color: "transparent",
        },
        data: placeholder,
        tooltip: {
          show: false,
        },
      },
      {
        name: "Positive",
        type: "bar",
        stack: "all",
        data: positive,
        itemStyle: {
          color: "#93c642",
        },
        label: {
          show: true,
          position: "outside",
          formatter: (obj) => {
            return formatLabel(obj.value as number);
          },
        },
      },
      {
        name: "Negative",
        type: "bar",
        stack: "all",
        data: negative,
        itemStyle: {
          color: "#d9422e",
        },
        label: {
          show: true,
          position: "outside",
          formatter: (obj) => {
            return formatLabel(-(obj.value as number));
          },
        },
      },
      {
        type: "line",
        symbol: "none",
        z: 1,
        step: "start",
        data: lineData,
        lineStyle: {
          color: "#d1d1d1",
          width: 1,
        },
        tooltip: {
          show: false,
        },
      },
    ],
  };

  return (
    <div className="flex-column">
      <ReactECharts option={options} />
      <Button isRunning={isRunning} onClick={handleButtonClick} />
    </div>
  );
};

export { ApacheEChartsWaterfall };
