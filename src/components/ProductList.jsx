import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">
        Products
      </h2>

      {products.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-md p-6 text-gray-500">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;