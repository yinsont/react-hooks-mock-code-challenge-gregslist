import React, { useState } from "react";

function ListingCard({ product, handleDelete }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };
  const handleProductDelete = () => {
    fetch(`http://localhost:6001/listings/${product.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleDelete(product.id);
      });
  };
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={product.image} alt={product.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button
            onClick={handleClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{product.description}</strong>
        <span> · {product.location}</span>
        <button onClick={handleProductDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;