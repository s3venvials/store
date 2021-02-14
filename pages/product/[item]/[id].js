import React, { useEffect, useState } from "react";
import Head from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

export default function ProductView() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCart([...JSON.parse(localStorage.getItem("cart"))]);
    }
  }, []);

  return (
    <>
      <Head />
      <Navigation cart={cart} />

      <div className="container"></div>

      <Footer />
    </>
  );
}
