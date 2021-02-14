import React, { useEffect, useState } from "react";
import Head from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

export default function ProductView() {
  let index;
  if (typeof window !== "undefined") {
    index = window.location.pathname.split("/")[3];
  }

  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCart(JSON.parse(localStorage.getItem("cart")));
      setData(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  const addToCart = (item) => {
    let temp = [...cart];
    temp.push(item);
    setCart([...temp]);
    localStorage.setItem("cart", JSON.stringify(temp));
  };

  useEffect(() => {
    if (data.length) {
      setItem([data[index]]);
    }
  }, [data]);

  return (
    <>
      <Head />
      <Navigation cart={cart} />

      <div className="container" style={{ marginTop: "2em" }}>
        {item.map((item, index) => {
          return (
            <div key={index}>
              <h5>{item.title}</h5>
              <img src={item.image} width={200} />
              <p>${item.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>
              <div style={{ maxWidth: "600px", marginTop: "1em" }}>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
