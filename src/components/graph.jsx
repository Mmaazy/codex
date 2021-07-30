import React from "react";
import Plot from "react-plotly.js";
import { Plotly } from "react-plotly.js";

const Graph = () => {
/*     var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter',
        marker: { color: "blue" }
      };

      var trace2 = {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: 'scatter',
        marker: { color: "red" }
      };

      var data = [trace1, trace2]; */

  return (
    <>
      <div className="text-center">
        <Plot
        data
          data={[
            {
              x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              y: [10, 5, 3, 1, 2, 9, 6, 4, 8, 7],
              type: "scattergl",
              marker: { color: "blue" },
              name: "Data testing",
            },
            {
                x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                y: [5, 2, 1, 0, 1, 4, 3, 2, 4, 3],
                type: "scattergl",
                marker: { color: "red" },
                name: "Data testing",
              }
          ]}
        />
      </div>
    </>
  );
};

export default Graph;
