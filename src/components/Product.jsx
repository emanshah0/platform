import styled from "styled-components";

const Info = styled.div`
  /* display: flex; */
  position: relative;
  justify-content: space-between;
  flex-grow: 1;
  padding-left: 20;
  padding-right: 20;
  pointer-events: none;
  user-select: none;
`;

const InfoTag = styled.div`
  padding: 3px;
  padding-right: 10px;
  /* color: rgba(0, 0, 0, 0.8); */
  color: rgba(255, 255, 255, 0.75);
`;

const Container = styled.div`
  position: relative;
  display: flex;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
  /* border-style: solid; */
  border-radius: 10px;
  border-width: 1px;
  transition: all 0.2ms ease-out;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(1.04);
  }
  &:active {
    transform: scale(1.02);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
`;

const Image = styled.img`
  object-fit: fill;
  width: 206px;
  pointer-events: none;
  user-select: none;
`;

const Product = ({ item }) => {
  function handleClick() {
    console.log(item.model);
  }

  return (
    <Container onClick={handleClick}>
      <ImageContainer>
        <Image src={item.img} />
      </ImageContainer>
      <Info>
        <InfoTag>The {item.model}</InfoTag>
        <InfoTag>Year: {item.year}</InfoTag>
        <InfoTag>Price: ${item.price}</InfoTag>
        <InfoTag>Range: {item.range} mi</InfoTag>
        <InfoTag>Cruise Speed: {item.cruise_speed}</InfoTag>
      </Info>
    </Container>
  );
};

export default Product;
