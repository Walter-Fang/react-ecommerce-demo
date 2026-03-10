function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>
                {item.name} - ${item.price}
              </span>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}

          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;