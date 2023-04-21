import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div`
  overflow: hidden;
  position: sticky;
`;

const Title = styled.div`
  margin: 20px;
`;

const ProductList = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Title>Filters</Title>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
