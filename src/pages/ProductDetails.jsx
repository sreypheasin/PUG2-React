import React, { useState, useEffect } from "react";
import { getProductById } from "../../services/product";
import { useParams } from "react-router";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const param = useParams();

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      const response = await getProductById(param.id);
      setProduct(response);
      setIsLoading(false);
    }
    fetchProduct();
  }, []);

  console.log(product);
  return (
    <div>
      <img src={product?.thumbnail}></img>
    </div>
  );
}
