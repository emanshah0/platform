import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function LineGraph({ xData, yData }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: xData,
        datasets: [
          {
            label: "Line Graph",
            data: yData,
            fill: false,
            borderColor: "rgba(75,192,192,1)",
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "category",
          },
        },
      },
    });
    return () => {
      chart.destroy();
    };
  }, [xData, yData]);

  return (
    <div>
      <h2>Line Graph</h2>
      <canvas
        ref={(ref) => (chartRef.current = ref)}
        width={600}
        height={400}
      ></canvas>
    </div>
  );
}

export default LineGraph;
