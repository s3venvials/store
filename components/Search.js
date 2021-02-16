import React, { useState } from "react";
import fetch from "node-fetch";
import useWindowDimensions from "../utils/window";

export default function Search() {
  const [value, setValue] = useState("all");
  const window = useWindowDimensions();

  const styles = {
    search: {
      width: window.width > 900 ? "100vh" : "100%",
    },
  };

  const search = () => {
    fetch(`https://fakestoreapi.com/products/category/${value}`)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
    }
  };

  const handleSearchForm = (e) => {
    try {
      e.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="d-flex" onSubmit={handleSearchForm}>
      {window < 900 && (
        <span className="input-group-text" id="basic-addon1">
          <select
            className="form-select"
            aria-label="Default select example"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option defaultValue>All</option>
            <option value="men clothing">Men's Clothing</option>
            <option value="women clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewerly</option>
          </select>
        </span>
      )}

      <div className="input-group" style={styles.search}>
        <span className="input-group-text" id="basic-addon1">
          <select
            className="form-select"
            aria-label="Default select example"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option defaultValue>All</option>
            <option value="men clothing">Men's Clothing</option>
            <option value="women clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewerly</option>
          </select>
        </span>
        <input
          type="search"
          className="form-control"
          placeholder="Product Search"
          aria-label="Recipient's username"
          aria-describedby="search"
          onKeyPress={handleKeyPress}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={search}
        >
          <img
            src="https://res.cloudinary.com/frontndev/image/upload/v1613441715/search-icon_jxaxe7.png"
            alt="search-icon"
          />
        </button>
      </div>
    </form>
  );
}
