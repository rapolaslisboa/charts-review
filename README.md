# Charts Review

This project explores the capabilities of the Highcharts library based on the following objectives:

1. **Identify if we can create custom graphs**.
2. **Identify if we can create waterfall charts like in IBCS/SUCCESS Charts**.
3. **Identify if the bars can have textures (like in IBCS)**.
4. **Identify if there are prebuilt Chart configuration UI elements**.
5. **Create a small example app to show graphs**:
   - Bar Chart
   - Line Chart
   - Waterfall Chart (vertical and horizontal)
   - Pie Chart

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rapolaslisboa/charts-review.git
   ```
2. Navigate to the project directory:
   ```bash
   cd charts-review
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Example App

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000` to see the example app in action.

## Acknowledgements

#### [Highcharts](https://www.highcharts.com/)

- Chart elements (bar, pie pieces, etc.) can have textures - patterns can be added -, please refer to the [pattern fills](https://www.highcharts.com/docs/chart-design-and-style/pattern-fills).

- For almost every Highcharts feature, there are a bunch of events that will unleash a whole set of custom interactions users can take vis-a-vis your charts. Check the [Introduction to Highcharts events](https://www.highcharts.com/blog/tutorials/introduction-to-highcharts-events/).

- For advanced custom graphics (e.g., variance arrows) and precise control over your chart's visual elements, the Highcharts.SVGRenderer provides a powerful toolset. Consult the [Highcharts SVGRenderer](https://www.highcharts.com/blog/tutorials/introduction-to-highcharts-events/).

- For detailed insights into Highcharts capabilities, please consult the [Highcharts official documentation](https://www.highcharts.com/docs).
