import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { products } from "./data/products";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(indexToRemove) {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          React E-Commerce Demo
        </h1>

        <p className="text-gray-600 mb-6">
          A simple storefront built with React, Vite and Tailwind CSS.
        </p>

        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black mb-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;