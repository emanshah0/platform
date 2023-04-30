import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ViewTable from "../blocks/viewTable";
import { rows } from "../data";
import FetchData from "../data/fetchData";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const fetchedData = await FetchData();
      setData(fetchedData);
    }
  
    getData();
  }, []);
  

  return (
    <Container>
      {data && <ViewTable data={data} />}
    </Container>
  );
};

export default Home;
