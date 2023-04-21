import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  /* background-color: #2B4251; */
  /* color: #91B3BC; */
  background-color: rgba(0, 0, 0, 0.1);
  background-size: 100%;
  background-repeat: no-repeat;
  height: 700px;
  z-index: 5;
  box-shadow: 6px 4px 6px rgba(0, 0, 0, 0.5);
  justify-content: center;
`;

// const ImageContainer = styled.div`
//   position: absolute;
//   justify-content: center;
//   align-items: center;
//   z-index: 3;
// `;

// const Image = styled.img`
//   width: 400px;
//   opacity: 0.6;
//   pointer-events: none;
// `;

const Grid = styled.div`
  display: grid;
  position: absolute;
  align-content: center;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px;
  padding-top: 100px;
  z-index: 4;
`;

const Cell = styled.div`
  ${"" /* background-color: gray; */}
  justify-self: center;
  align-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Banner = () => {
  return (
    <Container>
      <Grid>
        <Cell>
          <Title>"Company Logo"</Title>
        </Cell>
        <Cell>
          <Button>View Options</Button>
        </Cell>
        <Cell>
          <Desc>"Quote/Info"</Desc>
        </Cell>
        <Cell>
          <Button>Get Quote</Button>
        </Cell>
      </Grid>
    </Container>
  );
};

export default Banner;
