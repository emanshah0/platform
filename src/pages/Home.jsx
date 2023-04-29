import React from "react";
import styled from "styled-components";
import ViewTable from "../blocks/viewTable";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const Home = () => {
  return (
    <Container>
      <ViewTable />
    </Container>
  );
};

export default Home;
