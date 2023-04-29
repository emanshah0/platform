// function that outpouts a graph of the data passed in as props
// props: data, title, xLabel, yLabel, xKey, yKey, color
import React from "react";
import styled from "styled-components";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0);
  border-width: 0px;
  border-radius: 10px;
  min-width: 300px;
  max-width: 600px;
  margin: 1 0px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const FieldCell = styled.div`
  font-size: 16px;
`;

function Graph(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <LineChart width={400} height={300} data={props.data}>
        <Line type="monotone" dataKey={props.yKey} stroke={props.color} />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey={props.xKey}
          label={{ value: props.xLabel, position: "bottom", offset: -5 }}
        />
        <YAxis
          label={{
            value: props.yLabel,
            angle: -90,
            position: "insideLeft",
            offset: 10,
          }}
        />
      </LineChart>
    </Container>
  );
}

export default Graph;
