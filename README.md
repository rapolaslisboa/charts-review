# Charts Review

This project explores the capabilities of the Highcharts library based on the following objectives:

- Identify if we can create custom graphs.
- Identify if we can create waterfall charts like in IBCS/SUCCESS Charts.
- Identify if the bars can have textures (like in IBCS).
- Identify if there are prebuilt Chart configuration UI elements.
- Create a small example app to show graphs:
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

#### [Highcharts](https://www.highcharts.com/) observations:

- **Pattern fills**: Highcharts allows chart elements such as bars and pie pieces to be filled with textures, known as pattern fills. These can enhance the visual appeal of your charts. Refer to the [pattern fills documentation](https://www.highcharts.com/docs/chart-design-and-style/pattern-fills) for more details.

- **Interactive events**: Highcharts provides a wide range of events that enable custom interactions with your charts. Explore the [Introduction to Highcharts events](https://www.highcharts.com/blog/tutorials/introduction-to-highcharts-events/) to learn how to leverage these events for dynamic user experiences.

- **SVG renderer**: For advanced custom graphics and precise control over your chart's visual elements, consider using the Highcharts.SVGRenderer. This toolset empowers you to create intricate designs and customize every aspect of your charts. Learn more about the [Highcharts SVGRenderer](https://www.highcharts.com/blog/tutorials/introduction-to-highcharts-events/) for detailed insights.

- **Official documentation**: For comprehensive information on Highcharts features, options, and configurations, consult the [Highcharts official documentation](https://www.highcharts.com/docs). It serves as a valuable resource for understanding the library's capabilities and implementing complex charting solutions.
