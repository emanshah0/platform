import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s ease-in-out;
  &.fade-enter-active {
    opacity: 1;
  }
  animation: fadein 0.5s;
  -webkit-animation: fadein 0.5s; /* Safari and Chrome */
  -moz-animation: fadein 0.5s; /* Firefox */
  -o-animation: fadein 0.5s; /* Opera */
  z-index: 9999;
`;

const Content = styled.div`
  max-width: 800px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.35);
  flex-shrink: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  background-color: rgba(255, 0, 0, 0.6);
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.35);
  cursor: pointer;
`;

const Tag = styled.div`
  font-weight: bold;
`;

const Popup = ({ isOpen, togglePopup, children }) => {
  return (
    <>
      {isOpen && (
        <Container>
          <Content>
            <CloseButton onClick={togglePopup}>
              <Tag>X</Tag>
            </CloseButton>
            {children}
          </Content>
        </Container>
      )}
    </>
  );
};

export default Popup;
