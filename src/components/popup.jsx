import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Content = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.35);
  animation: fadein 0.5s;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(255, 0, 0, 0.6);
  border: none;
  cursor: pointer;
`;

const Popup = ({ isOpen, togglePopup, children }) => {
  return (
    <>
      {isOpen && (
        <Container>
          <Content>
            <CloseButton onClick={togglePopup}>X</CloseButton>
            {children}
          </Content>
        </Container>
      )}
    </>
  );
};

export default Popup;
