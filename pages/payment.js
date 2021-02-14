import React, { useEffect, useState } from "react";
import Head from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Payment() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined")
      setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  useEffect(() => {
    try {
      let sum = 0;
      if (cart.length) {
        for (var i = 0; i < cart.length; i++) {
          sum += cart[i].price;
        }
        setTotal(sum.toFixed(2));
      }
    } catch {
      console.log("Error getting payment total.");
    }
  });

  return (
    <>
      <Head />
      <Navigation cart={cart} />

      <div className="container" style={{ marginTop: "2em" }}>
        <h3>Payment</h3>
        <hr />
        {cart &&
          cart.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="row"
                  style={{ marginBottom: "1em", marginLeft: "1em" }}
                >
                  <div className="col-sm-1" style={{ marginBottom: "0.5em" }}>
                    <img src={item.image} width={52} />
                  </div>
                  <div className="col-sm-2">{item.title}</div>
                  <div className="col-sm-2">{item.price}</div>
                </div>
                <hr />
              </div>
            );
          })}

        <form
          style={{ maxWidth: "600px", marginTop: "2em", marginBottom: "2em" }}
        >
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="JohnDoe@email.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Name On Card
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Credit Card #
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              CSV
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <h5>Total: ${total}</h5>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>

      <Footer />
    </>
  );
}
