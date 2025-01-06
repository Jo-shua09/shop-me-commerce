import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import BestProducts from "./components/BestProducts";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <BestProducts />
    </div>
  );
}

export default App;
