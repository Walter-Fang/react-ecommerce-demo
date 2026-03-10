function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      <h3 className="text-xl font-semibold text-gray-900">
        {product.name}
      </h3>

      <p className="text-gray-600 mt-2 mb-4">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;