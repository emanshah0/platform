import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  padding: 20px;
`;

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Aug", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Sep", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Oct", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Nov", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Dec", uv: 3490, pv: 4300, amt: 2100 },
];

const Chart = () => {
  return (
    <ChartContainer>
      <LineChart
        width={800}
        height={500}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="amt" stroke="#ca829e" />
      </LineChart>
    </ChartContainer>
  );
};

export default Chart;
