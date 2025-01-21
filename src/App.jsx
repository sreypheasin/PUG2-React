import { NavLink } from "react-router";
import Button, { ButtonRegister } from "./components/utils/Button";
import Navbar from "./components/layouts/Navbar";
import { getAllProducts, getProductById } from "../services/product";
import { useEffect, useState } from "react";
import CardProduct from "./components/utils/cards/CardProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAllProducts() {
      setIsLoading(true);
      const response = await getAllProducts();
      setProducts(response?.products);
      setIsLoading(false);
    }
    fetchAllProducts();
  }, []);
  return (
    <section className="max-w-screen-xl mx-auto">
      {/* product card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {isLoading && <p>loading...</p>}
        {!isLoading &&
          products.map((product, index) => (
            <CardProduct
              key={index}
              thumbnail={product.thumbnail}
              title={product.title}
              desc={product.description}
              price={product.price}
              id={product.id}
            />
          ))}
      </div>
    </section>
  );
}

export default App;
