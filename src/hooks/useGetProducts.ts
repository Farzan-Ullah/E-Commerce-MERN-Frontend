import axios from "axios";
import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const products = await axios.get(
      "https://my-fmart-003.onrender.com/products"
    );
    setProducts(products.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, fetchProducts };
};
