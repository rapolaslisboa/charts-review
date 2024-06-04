import { Button } from "@/components/Button";
import { categories } from "@/utils/categories";
import { formatLabel } from "@/utils/format-label";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more";
import { useEffect, useState } from "react";
HC_more(Highcharts);

const initialData: Highcharts.PointOptionsObject[] = [
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
];

const options: Highcharts.Options = {
  title: {
    text: "Horizontal Waterfall",
    align: "left",
  },
  xAxis: {
    type: "category",
    lineColor: "#c6c6c6",
    categories,
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
      data: initialData,
      dataLabels: {
        enabled: true,
        inside: false,
        formatter: function () {
          if (typeof this.y === "number") {
            return formatLabel(this.y);
          }

          return this.y;
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

export function HighchartsHorizontalWaterfall({
  allowDynamicData = false,
}: {
  allowDynamicData?: boolean;
}) {
  const [data, setData] =
    useState<Highcharts.PointOptionsObject[]>(initialData);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = window.setInterval(() => {
        const newData = data?.map((point) => {
          if (point.isSum) return point;
          if (point) {
            return {
              ...point,
              y: (point.y ?? 0) + Math.floor(Math.random() * 2000 - 1000),
            };
          }

          return point;
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

  const updatedOptions = {
    ...options,
    series: [
      {
        ...options.series?.[0],
        data: data,
      },
    ],
  };

  return (
    <div className="flex-column">
      <HighchartsReact highcharts={Highcharts} options={updatedOptions} />
      {allowDynamicData && (
        <Button isRunning={isRunning} onClick={handleButtonClick} />
      )}
    </div>
  );
}
