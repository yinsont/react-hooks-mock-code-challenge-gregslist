import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchInput }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const handleDelete = (id) => {
    const filteredProducts = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(filteredProducts);
  };
  const filteredSearchProducts = products.filter((product) => {
    return product.description
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });
  const productsToDisplay = filteredSearchProducts.map((product) => {
    return (
      <ListingCard
        key={product.description}
        product={product}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <main>
      <ul className="cards">{productsToDisplay}</ul>
    </main>
  );
}

export default ListingsContainer;