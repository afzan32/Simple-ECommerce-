import React from "react";
import "./Project01.css";
import Products from "./Products.js";
import { Link } from "react-router";

const Project01 = () => {
  return (
    <div id="product-grid">
      {Products.map((product) => (
        <Link key={product.id} to={`/${product.id}`} className="abc">
          <div className="product-card">
            <div className="image-container">
              <img src={product.imag} alt={product.name} />
            </div>
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price">Rs{product.price}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Project01;
