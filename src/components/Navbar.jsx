import Search from "@mui/icons-material/Search";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  /* background-color: #000000ea; */
  /* color: white; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 30px;
  padding: 10px;
`;

const Input = styled.input`
  border: 0;
  border-radius: 50px;
  outline: white;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.button`
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  border: none;
  font-size: 32px;
  font-weight: bold;
  margin: 0 10px;
  font-weight: bold;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.button`
  font-size: 16px;
  padding: 10px;
  margin-left: 25px;
  background-color: rgba(0, 0, 0, 0.02);
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  border-width: 1px;
  text-align: center;
  cursor: pointer;
  &:active {
    transform: scale(1.02);
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Link to="/">
            <Logo>Platform Prototype</Logo>
          </Link>
        </Center>

        <Right>
          <Link to="/products">
            <MenuItem>Browse Jets</MenuItem>
          </Link>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>Contact Us</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
