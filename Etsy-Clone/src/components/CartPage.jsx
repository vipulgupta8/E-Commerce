import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../cartSlice'; // Import actions

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    dispatch(decrementQuantity(id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty!</p>
          <Link to="/" className="text-blue-500 hover:underline mt-4">Go back to products</Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-green-500 font-bold mt-2">Price: ${item.price}</p>

                <div className="flex items-center mt-4">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
            <p>Total Items: {totalQuantity}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
