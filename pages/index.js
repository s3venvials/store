import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import Head from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Search from "../components/Search";
import useWindowDimensions from "../utils/window";

export default function Home() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const window = useWindowDimensions();

  useEffect(() => {
    try {
      if (typeof window !== "undefined")
        setCart([...JSON.parse(localStorage.getItem("cart"))]);
    } catch (error) {
      console.log(error);
      console.log("Error adding items to cart");
    }
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
      console.log(error);
      console.log("Error fetching data.");
    }
  });

  const addToCart = (item) => {
    try {
      let temp = [...cart];
      temp.push(item);
      setCart([...temp]);
      localStorage.setItem("cart", JSON.stringify(temp));
    } catch (error) {
      console.log(error);
      console.log("Error adding items to cart.");
    }
  };

  return (
    <>
      <Head />
      <Navigation cart={cart} />
      {window.width < 900 && <Search />}
      <Banner />

      <div className="container">
        {data === null ? (
          <div></div>
        ) : (
          <div className="row">
            {data.length ? (
              data.map((item, index) => {
                return (
                  <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
                    <Product
                      image={item.image}
                      category={item.category}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      item={item}
                      id={index}
                      addToCart={addToCart}
                    />
                  </div>
                );
              })
            ) : (
              <Loader />
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
