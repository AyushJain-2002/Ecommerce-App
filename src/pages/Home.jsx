// src/pages/Home.jsx
import React,{useState,useEffect} from "react";
import { getProducts} from "../api/userapi.js";

// Sample product data
// const products = [
//   { id: 1, name: "Laptops", price: "$159.99", image: "https://via.placeholder.com/150" },
//   { id: 2, name: "Phones", price: "$99.99", image: "https://via.placeholder.com/150" },
//   { id: 3, name: "Headphones", price: "$9.99", image: "https://via.placeholder.com/150" },
//   { id: 4, name: "Camera", price: "$49.99", image: "https://via.placeholder.com/150" },
// ];


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r  from-blue-600 via-purple-600 to-pink-600 text-white py-16 text-center">
        <h1 className="text-4xl cursor-default md:text-5xl font-bold mb-4">Welcome to E-Shop</h1>
        <p className="mb-6 cursor-default text-lg md:text-xl">Find the best products at unbeatable prices!</p>
        <a
          href="/shop"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </a>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4  mx-auto bg-blue-gray-50">
        <h2 className="text-3xl font-bold mb-8 cursor-default text-center">Featured Products</h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-blue-gray-700 rounded-lg p-4 hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <hr className="border border-blue-gray-700"/>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
              <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
