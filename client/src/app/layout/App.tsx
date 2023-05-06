import React, { useState, useEffect } from "react";
import { Product } from "../models/products";
import "./App.css";
import "../../global.css";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "../components/05-pages/Home/HomePage";
import About from "../components/05-pages/About/AboutPage";
import Contact from "../components/05-pages/Contact/ContactPage";
import Shop from "../components/05-pages/Shop/ShopPage";
import ProductPage from "../components/05-pages/Product/ProductPage";
import CategoryPage from "../components/05-pages/CategoryPage/CategoryPage";

// import { products } from "../TestData/products";
function App() {
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   fetch("/data/products.json", {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   setProducts(products);
  // }, [products]);

  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Shop />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
    </Routes>
  ); // this code is not working. this error Cannot destructure property 'basename' of 'react__WEBPACK_IMPORTED_MODULE_0__.useContext(...)' as it is null.
  // is because of the react-router-dom version. I have to use the version 6.0.0-beta.0
}

export default App;
