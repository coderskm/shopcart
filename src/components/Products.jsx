import { useEffect } from "react";
import "./Products.css";
import { useState } from "react";

import ProductCard from "./ProductCard";

const Products = () => {
  const [productList, setProductList] = useState([]);
  async function getAllProducts() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
      <div className="display-items">
        {productList ? (
          productList.map((item) => (
            
              <ProductCard key={item.id} item={item} /> 
            
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    
  );
};

export default Products;
