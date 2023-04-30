import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import styled from "styled-components";

Chart.register(...registerables);

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
`;

function LineGraph({ xData, yData, title }) {
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
    <Container>
      <h2>{title}</h2>
      <canvas
        ref={(ref) => (chartRef.current = ref)}
        width={100}
        height={50}
      ></canvas>
    </Container>
  );
}

export default LineGraph;
