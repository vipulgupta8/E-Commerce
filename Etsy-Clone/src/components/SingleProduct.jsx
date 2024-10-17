
// import React, { useState, useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import { useParams, Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
// import 'react-toastify/dist/ReactToastify.css';
// import { addToCart } from '../cartSlice'; // Import addToCart action

// const SingleProduct = () => {
//   const { id } = useParams(); // Get product ID from the URL
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const dispatch = useDispatch();
//   const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Get cart totalQuantity

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
//         const data = await response.json();
//         setProduct(data);
//         setLoading(false);
//       } catch (error) {
//         setError('Failed to fetch product');
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (product) {
//       dispatch(addToCart(product)); // Dispatch addToCart action with product
//       toast.success(`${product.title} added to the cart!`, {
//         position: "top-center",
//         autoClose: 2000, // Automatically close the toast after 2 seconds
//       });
//     }
//   };

//   if (loading) return <p className="text-center text-lg">Loading product...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="container mx-auto px-4">
//       <Link to="/" className="text-blue-500 hover:underline">Back to Products</Link>
      
//       {product && (
//         <div className="bg-white shadow-md rounded-lg p-4 mt-6">
//           <img
//             src={product.images[0]}
//             alt={product.title}
//             className="w-full h-96 object-cover rounded-t-lg"
//           />
//           <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
//           <p className="text-gray-600 mt-2">{product.description}</p>
//           <p className="text-green-500 font-bold mt-2">Price: ${product.price}</p>

//           <div className="mt-4">
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
//             >
//               Add to Cart
//             </button>
//           </div>

//           <Link to="/cart" className="text-blue-500 hover:underline mt-4 block">
//             View Cart ({totalQuantity})
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SingleProduct;

import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../cartSlice'; // Import addToCart action
import { auth } from './firebase'; // Import Firebase auth for checking user authentication

const SingleProduct = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use navigate for redirecting to login
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Get cart totalQuantity

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const user = auth.currentUser; // Check if the user is logged in
    if (!user) {
      // If user is not logged in, show a toast and navigate to the login page
      toast.warn("You need to log in to add items to the cart.", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate('/login'); // Redirect to login after 2 seconds
      }, 2000);
    } else {
      // If user is logged in, allow adding to cart
      if (product) {
        dispatch(addToCart(product)); // Dispatch addToCart action with product
        toast.success(`${product.title} added to the cart!`, {
          position: "top-center",
          autoClose: 2000,
        });
      }
    }
  };

  if (loading) return <p className="text-center text-lg">Loading product...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4">
      <Link to="/" className="text-blue-500 hover:underline">Back to Products</Link>
      
      {product && (
        <div className="bg-white shadow-md rounded-lg p-4 mt-6">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-96 object-cover rounded-t-lg"
          />
          <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-green-500 font-bold mt-2">Price: ${product.price}</p>

          <div className="mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-[#e6974d] text-white px-3 py-2 rounded hover:bg-[#d47b28]"
            >
              Add to Cart
            </button>
          </div>

          <Link to="/cart" className="text-blue-500 hover:underline mt-4 block">
            View Cart ({totalQuantity})
          </Link>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default SingleProduct;

