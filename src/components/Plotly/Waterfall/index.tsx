/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/Button";
import { categories } from "@/utils/categories";
import { formatLabel } from "@/utils/format-label";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

const initialYData: number[] = [9200, 11400, 1400, -800, 1000, -4100, 18100];

const PlotlyWaterfall = () => {
  const [data, setData] = useState<number[]>(initialYData);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = window.setInterval(() => {
        const newData = data?.map((point) => {
          return (point ?? 0) + Math.floor(Math.random() * 2000 - 1000);
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

  const dataText = data.map((y) => {
    return formatLabel(y);
  });

  return (
    <div className="flex-column">
      <Plot
        data={
          [
            {
              type: "waterfall",
              mode: "lines",
              orientation: "v",
              measure: [
                "absolute",
                "relative",
                "relative",
                "relative",
                "relative",
                "relative",
                "total",
              ],
              decreasing: {
                marker: { color: "#d9422e" },
              },
              increasing: { marker: { color: "#93c642" } },
              totals: {
                marker: {
                  color: "#DE0175",
                },
              },
              x: categories,
              textposition: "outside",
              text: dataText,
              y: data,
              connector: {
                line: {
                  color: "#d1d1d1",
                },
              },
            },
          ] as any
        }
        layout={{
          title: {
            text: "Plotly Waterfall",
            x: 0,
          },
          legend: {
            title: { text: "Aoo" },
          },
          xaxis: {
            type: "category",
            visible: true,
          },
          yaxis: {
            type: "linear",
            showgrid: false,
            showticklabels: false,
          },
          autosize: true,
          showlegend: false,
          margin: {
            t: 25,
          },
          shapes: [
            {
              type: "rect",
              fillcolor: "#404040",
              x0: -0.4,
              x1: 0.4,
              xref: "x",
              y0: 0.0,
              y1: data[0] + 75,
              yref: "y",
              line: { width: 0 },
            },
          ],
        }}
        onClick={(e) => {
          e.event?.stopPropagation();
          e.event?.preventDefault();
          alert(`${e.points[0].x}\nValue: ${e.points[0].y}`);
        }}
      />
      <Button isRunning={isRunning} onClick={handleButtonClick} />
    </div>
  );
};

export { PlotlyWaterfall };
