import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import Head from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Product from "../components/Product";
import Loader from "../components/Loader";

export default function Home() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined")
      setCart([...JSON.parse(localStorage.getItem("cart"))]);
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  });

  const addToCart = (item) => {
    let temp = [...cart];
    temp.push(item);
    setCart([...temp]);
    localStorage.setItem("cart", JSON.stringify(temp));
  };

  return (
    <>
      <Head />
      <Navigation cart={cart} />
      <Banner />

      <div className="container">
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
      </div>

      <Footer />
    </>
  );
}
