import { ApacheEChartsWaterfall } from "../ApacheEcharts/Waterfall";
import { ApexChartsWaterfall } from "../ApexCharts/Waterfall";
import { HighchartsHorizontalWaterfall } from "../Highcharts/HorizontalWaterfall";
import { PlotlyWaterfall } from "../Plotly/Waterfall";

const WaterfallAlternatives = () => {
  return (
    <section style={{ marginTop: 100 }}>
      <h1>Waterfall Alternatives</h1>
      <p style={{ marginTop: 25 }}>
        In this section, we have a comparison between 3 chart libraries
        alternatives: Apache ECharts, Plotly and ApexCharts. Click on the 'Run'
        button to see how each library handles dynamic data updates every 3
        seconds.
      </p>
      <div className="chart-container">
        <div className="chart">
          <HighchartsHorizontalWaterfall allowDynamicData />
        </div>
        <div className="chart">
          <ApacheEChartsWaterfall />
        </div>
        <div className="chart">
          <PlotlyWaterfall />
        </div>
        <div className="chart">
          <ApexChartsWaterfall />
        </div>
      </div>
    </section>
  );
};

export { WaterfallAlternatives };
