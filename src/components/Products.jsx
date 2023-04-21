import styled from "styled-components";
import { products } from "../data";
import Product from "./Product";
import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { useEffect } from "react";
import { animated, useTrail } from "react-spring";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Container = styled.div``;

const InventoryContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
  background-color: #000000ea;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  & > * {
    flex: 0 0 calc(25% - 16px);
    margin: 8px;
  }
`;

const FilterContainer = styled.div`
  height: 100px;
  /* background-color: rgba(0, 255, 0, 0.4); */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

const Wrapper = styled.div`
  padding: 10px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const StyledSelect = styled(Select)`
  background-color: white;
  border-radius: 10px;
  height: 30px;
  margin-right: 10px;
`;
const Button = styled.button`
  color: gray;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  width: 60px;
  height: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
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

const Label = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  padding: 6px;
  border-width: 1px;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const SliderInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 10px;
  background: #ddd;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #000;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #000;
    cursor: pointer;
  }
`;

const ScrollButton = styled(Fab)`
  position: fixed;
  bottom: 40px;
  left: 95%;
  opacity: 0.8;
`;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Slider = ({ min, max, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <SliderWrapper>
      <SliderInput
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </SliderWrapper>
  );
};

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedModel, setSelectedModel] = useState("All Aircrafts");
  const [rangeValue, setRangeValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [numProductsToShow, setNumProductsToShow] = useState(12);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const applyFilters = ({ model, price, range }) => {
    let filtered = products;

    if (model !== "All Aircrafts") {
      filtered = filtered.filter(
        (product) => product.model.toLowerCase() === model.toLowerCase()
      );
    }

    if (price > 0) {
      filtered = filtered.filter((product) => product.price <= price);
    }

    if (range > 0) {
      filtered = filtered.filter((product) => product.range >= range);
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  }, [filteredProducts]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setShowScrollButton(scrollPosition > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const resetFilters = () => {
    setSelectedModel("All Aircrafts");
    setRangeValue(0);
    applyFilters({ model: "All Aircrafts", price: 0, range: 0 });
  };

  const handleModelChange = (event) => {
    const model = event.target.value;
    setSelectedModel(model);
    applyFilters({ model, price: priceValue, range: rangeValue });
  };

  const handlePriceChange = (value) => {
    setPriceValue(value);
    console.log(value);
    applyFilters({ model: selectedModel, price: value, range: rangeValue });
  };

  const handleRangeChange = (value) => {
    setRangeValue(value);
    console.log(value);
    applyFilters({ model: selectedModel, price: priceValue, range: value });
  };

  const trail = useTrail(Math.min(sortedProducts.length, numProductsToShow), {
    from: { opacity: 0, transform: "translate3d(0, 30px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: { duration: 60 },
  });

  return (
    <Container>
      <FilterContainer>
        <Wrapper>
          <Label>Filter By Aircraft:</Label>
          <StyledSelect value={selectedModel} onChange={handleModelChange}>
            <MenuItem value="All Aircrafts">All Aircrafts</MenuItem>
            <MenuItem value="Model A">Model A</MenuItem>
            <MenuItem value="Model B">Model B</MenuItem>
            <MenuItem value="Model C">Model C</MenuItem>
            <MenuItem value="Model D">Model D</MenuItem>
            <MenuItem value="Model E">Model E</MenuItem>
            <MenuItem value="Model F">Model F</MenuItem>
          </StyledSelect>
        </Wrapper>
        <Wrapper>
          <Label>
            Filter by Range: Current: {rangeValue}mi {">"}
          </Label>
          <Slider
            value={rangeValue}
            min={500}
            max={10000}
            step={200}
            onChange={(value) => handleRangeChange(value)}
          />
        </Wrapper>
        <Wrapper>
          <Label>
            Filter by Price: Current: {"<"} ${priceValue}{" "}
          </Label>
          <Slider
            value={priceValue}
            min={100}
            max={1000}
            step={20}
            onChange={(value) => handlePriceChange(value)}
          />
        </Wrapper>
        <Wrapper>
          <Button onClick={() => resetFilters()}>Reset</Button>
        </Wrapper>
      </FilterContainer>
      <InventoryContainer>
        {trail.map((style, index) => (
          <animated.div style={style}>
            <Product
              item={sortedProducts[index]}
              key={sortedProducts[index].id}
            />
          </animated.div>
        ))}
        {numProductsToShow < sortedProducts.length && (
          <Button onClick={() => setNumProductsToShow(numProductsToShow + 12)}>
            Load More
          </Button>
        )}
      </InventoryContainer>
      <ScrollButton show={showScrollButton} onClick={scrollToTop}>
        <KeyboardArrowUpIcon />
      </ScrollButton>
    </Container>
  );
};

export default Products;
