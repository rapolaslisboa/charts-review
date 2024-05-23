/* eslint-disable @typescript-eslint/no-this-alias */
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import patternFill from "highcharts/modules/pattern-fill";
import classes from "./Pie.module.css";

patternFill(Highcharts);

const getPopup = () => {
  return document.getElementsByClassName(classes.popup)[0] as HTMLElement;
};

const options: Highcharts.Options = {
  title: {
    text: "Pie",
    align: "left",
  },
  chart: {
    type: "pie",
    events: {
      load: function () {
        const chart = this;
        chart.series[0].points.forEach((p) => {
          p.graphic?.on("contextmenu", function (e: PointerEvent) {
            e.preventDefault();
            const popup = getPopup();
            if (popup) {
              positionPopup(e, chart);
              (popup as HTMLElement).style.display = "flex";
              (popup as HTMLElement).style.flexDirection = "column";
            }
          });
        });
      },
    },
  },
  subtitle: {
    text: "This example has a context menu that opens on right click, try it.",
    align: "left",
  },
  series: [
    {
      type: "pie",
      showInLegend: true,
      allowPointSelect: true,
      data: [
        {
          name: "Jan",
          y: 2,
          color: "#404040",
        },
        {
          name: "Feb",
          y: 3,
          color: "#d9422e",
        },
        {
          name: "Apr",
          y: 5,
          color: {
            patternIndex: 2,
            pattern: {},
          },
        },
        {
          name: "Mar",
          y: 7,
          color: "#DE0175",
        },
        {
          name: "May",
          y: 10,
          color: "#808080",
        },
      ],
    },
  ],
  plotOptions: {
    series: {
      cursor: "pointer",
    },
  },
};

function positionPopup(e: PointerEvent, chart: Highcharts.Chart) {
  const popup = getPopup();
  const pointInfo = document.getElementById("pointInfo");

  if (!pointInfo) return;

  // Get the clicked point
  const point = chart.series[0].points.find(
    (p) => p.graphic?.element === e.target
  );

  if (!point) return;

  // Fill the span with point information
  pointInfo.textContent = `${point.name}`;

  const chartOffset = Highcharts.offset(chart.container);
  const chartLeft = chartOffset.left;
  const chartTop = chartOffset.top;

  const clickCoordsX = e.pageX;
  const clickCoordsY = e.pageY;

  const popupLeft = clickCoordsX - chartLeft;
  const popupTop = clickCoordsY - chartTop;

  popup.style.left = `${popupLeft}px`;
  popup.style.top = `${popupTop}px`;
}

function closePopup() {
  const popup = getPopup();
  if (!popup) return;
  (popup as HTMLElement).style.display = "none";
}

window.onkeyup = function (e) {
  if (e.key === "Escape") {
    closePopup();
  }
};

document.addEventListener("click", (e) => {
  const button = e.which || e.button;
  if (button === 1) {
    closePopup();
  }
});

export function HighchartsPie() {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className={classes.popup}>
        <span id="pointInfo"></span>
        <ul>
          <li
            onClick={(e) => {
              e.stopPropagation();
              e?.preventDefault();
              alert("We don't have this feature yet... keep posted!");
            }}
          >
            Edit
          </li>
          <li
            onClick={(e) => {
              e.stopPropagation();
              e?.preventDefault();
            }}
          >
            Copy
          </li>
          <li onClick={closePopup}>Close</li>
        </ul>
      </div>
    </>
  );
}
