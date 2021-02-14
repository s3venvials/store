import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Checkout() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  useEffect(() => {
    let sum = 0;
    for (var i = 0; i < cart.length; i++) {
      sum += cart[i].price;
    }
    setTotal(sum.toFixed(2));
  });

  const deleteItem = (index) => {
    let temp = [...cart];
    temp.splice(index, 1);
    setCart(temp);
    localStorage.setItem("cart", JSON.stringify(temp));
  };

  return (
    <>
      <Head />
      <Navigation cart={cart} />

      <div
        className="container"
        style={{ marginTop: "2em", marginBottom: "5em" }}
      >
        <h3>Check Out</h3>
        <hr />
        {cart === null ? (
          <div></div>
        ) : (
          cart.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="row"
                  style={{ marginBottom: "1em", marginLeft: "1em" }}
                >
                  <div className="col-sm-3" style={{ marginBottom: "0.5em" }}>
                    <img src={item.image} width={52} />
                  </div>
                  <div className="col-sm-3">{item.title}</div>
                  <div className="col-sm-3">
                    <button className="btn" onClick={() => deleteItem(index)}>
                      <img
                        src="https://res.cloudinary.com/frontndev/image/upload/v1613326650/trash-can_nlylek.png"
                        alt="trash-can"
                      />
                    </button>
                  </div>
                  <div className="col-sm-3" style={{ textAlign: "right" }}>
                    {item.price}
                  </div>
                </div>
                <hr />
              </div>
            );
          })
        )}

        <li className="list-group-item d-flex justify-content-between align-items-center">
          {cart === null ? (
            <div></div>
          ) : cart.length ? (
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => router.push("/payment")}
            >
              Checkout
            </button>
          ) : (
            <button type="submit" disabled className="btn btn-primary">
              Checkout
            </button>
          )}

          <span>Total: ${total}</span>
        </li>
      </div>

      {cart && cart.length > 2 ? <Footer /> : <Footer window="fixed" />}
    </>
  );
}
