import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import BestProducts from "./components/BestProducts";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <BestProducts />
      <Banner />
      <Newsletter />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
