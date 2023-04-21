import React from "react";
import styled from "styled-components";

import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Container = styled.div`
  background-position: "cover";
  background-size: "cover";
  width: 100%;
  height: 300px;
`;

const Home = () => {
  console.log("Home page");
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Banner />
      <Footer />
    </Container>
  );
};

export default Home;
