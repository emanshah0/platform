import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import DataDisplay from "./components/table.jsx";
import Chart from "./components/chart.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  console.log("rendering app");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
};

export default App;
