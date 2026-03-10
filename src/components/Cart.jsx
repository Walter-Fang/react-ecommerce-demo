function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">
        Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-200 pb-3"
              >
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-lg font-semibold text-gray-900">
              Total: ${total}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;