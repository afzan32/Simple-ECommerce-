// export default DetailPage;
import React from "react";
import { useParams } from "react-router";
import Products from "./Products";
import "./DetailPage.css";

const DetailPage = () => {
  const { id } = useParams();
  const produc = Products.find((item) => item.id === parseInt(id));

 
  return (
    <div className="detail-container">
      <div className="image-section">
        <img src={produc.imag} alt={produc.name} className="product-image" />
      </div>
      <div className="info-section">
        <h2 className="product-name">{produc.name}</h2>
        <p className="product-price">${produc.price}</p>
        <p className="product-description">{produc.Des}</p>
      </div>
    </div>
  );
};

export default DetailPage;
