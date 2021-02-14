import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Navigation(props) {
  const router = useRouter();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (props.cart !== null) {
      console.log(props.cart.length);
      setTotal(props.cart.length);
    }
  }, [props.cart]);

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => router.push("/")}
          style={{ color: "red", fontSize: 26 }}
        >
          Frontier
        </a>

        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <button
            type="button"
            className="btn btn-outline-light"
            style={{ border: "none" }}
            onClick={() => router.push("/checkout")}
          >
            <img
              style={{ marginRight: "0.5em" }}
              src="https://res.cloudinary.com/frontndev/image/upload/v1613262319/shopping-cart_pmrkym.png"
              alt="cart"
            />{" "}
            <span className="badge bg-info">{total}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
