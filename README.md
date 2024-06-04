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

### Highcharts

Highcharts is a comprehensive JavaScript library designed to create interactive and customizable charts for web applications. It offers a wide range of chart types and extensive customization options, making it suitable for visualizing complex data in an intuitive and engaging manner. Below are some of the key features and tools available in Highcharts:

- **Pattern fills**: Highcharts allows chart elements such as bars and pie pieces to be filled with textures, known as pattern fills. These can enhance the visual appeal of your charts. Refer to the [pattern fills documentation](https://www.highcharts.com/docs/chart-design-and-style/pattern-fills) for more details.

- **Interactive events**: Highcharts provides a wide range of events that enable custom interactions with your charts. Explore the [Introduction to Highcharts events](https://www.highcharts.com/blog/tutorials/introduction-to-highcharts-events/) to learn how to leverage these events for dynamic user experiences.

- **SVG renderer**: For advanced custom graphics and precise control over your chart's visual elements, consider using the Highcharts.SVGRenderer. This toolset empowers you to create intricate designs and customize every aspect of your charts. Learn more about the [Highcharts SVGRenderer](https://api.highcharts.com/class-reference/Highcharts.SVGRenderer) for detailed insights.

- **Official documentation**: For comprehensive information on Highcharts features, options, and configurations, consult the [Highcharts official documentation](https://www.highcharts.com/docs). It serves as a valuable resource for understanding the library's capabilities and implementing complex charting solutions.

### Alternatives Libraries

Some chart alternative libraries were reviewed to determine whether Highcharts is the best library for our use cases. Below is a summary of each.

#### Apache ECharts

Apache ECharts uses a different approach to setting up waterfall charts. They use a `positive`, `negative` and `placeholder` data approach, which adds complexity when structuring waterfall charts. You can check it in this [waterfall example](https://echarts.apache.org/handbook/en/how-to/chart-types/bar/waterfall/) and also in the Apache ECharts example in this repo. You also have to structure the connecting lines yourself, whereas in Highcharts, this is handled automatically. To integrate with React, you have two options: implement a React functional component and reuse it or use [echarts-for-react package](https://www.npmjs.com/package/echarts-for-react), whose last release was 3 years ago. More information can be found in this article: [Using Apache ECharts with React and Typescript](https://dev.to/manufac/using-apache-echarts-with-react-and-typescript-353k).

#### Plotly

After Highcharts, Plotly seems to be the best option. Chart animations seem less smooth compared to Highcharts when handling dynamic data, and the charts' design appears somewhat fancy by default. I also encountered some type issues when dealing with waterfall charts. The [Plotly React package](https://www.npmjs.com/package/react-plotly.js) was last released 2 years ago.

#### ApexCharts

ApexCharts does not provide waterfall-type charts. To build them, you must structure logic with [range columns charts](https://apexcharts.com/react-chart-demos/column-charts/range-column-chart/). For this chart type, they use a more confusing approach (you have to provide an array with 3 values for each point) compared to other libraries to set up the waterfall data (check the repo example file). I also faced some issues regarding the positioning of negative values labels and connecting lines between bars/columns.

#### Nivo

Nivo does not provide waterfall-type charts. To build them, you must structure logic with bar charts. This approach is not suitable and requires too much effort to build waterfall charts.

### Conclusion

In my opinion, Highcharts provides the best alternative. Here are some benefits of using it:

- **Easily configurable**: in Highcharts, a chart is essentially a JSON object, and many properties of the chart can be easily customized using the options parameter. Events can also be configured.

- **Pretty graphs**: Highcharts does a very good job of making sure its graphs look good and are not overly fancy.

- **Charts types**: supports various charts such as line, bar, column, waterfall, pie, etc.

- **Waterfall charts**: compared to other libraries, Highcharts provides the easiest and most complete way of configuring and setting up waterfall charts.

- **Doc**: the documentation is quite nice and extensive.
