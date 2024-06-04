import { HighchartsArea } from "./Area";
import { HighchartsBar } from "./Bar";
import { HighchartsHorizontalWaterfall } from "./HorizontalWaterfall";
import { HighchartsIndicatorComparison } from "./IndicatorComparison";
import { HighchartsLine } from "./Line";
import { HighchartsMultitierBar } from "./MultitierBar";
import { HighchartsPie } from "./Pie";
import { HighchartsScattergrams } from "./Scattergrams";
import { HighchartsStackedColumn } from "./StackedColumn";
import { HighchartsVerticalWaterfall } from "./VerticalWaterfall";

export function HighchartsExamples() {
  return (
    <section>
      <h1>Highcharts</h1>
      <div className="chart-container">
        <div className="chart">
          <HighchartsHorizontalWaterfall />
        </div>
        <div className="chart">
          <HighchartsVerticalWaterfall />
        </div>
        <div className="chart">
          <HighchartsBar />
        </div>
        <div className="chart">
          <HighchartsLine />
        </div>
        <div className="chart">
          <HighchartsArea />
        </div>
        <div className="chart">
          <HighchartsScattergrams />
        </div>
        <div className="chart">
          <HighchartsStackedColumn />
        </div>
        <div className="chart">
          <HighchartsIndicatorComparison />
        </div>
        <div className="chart">
          <HighchartsMultitierBar />
        </div>
        <div className="chart">
          <HighchartsPie />
        </div>
      </div>
    </section>
  );
}
