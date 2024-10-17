import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaRegHeart } from "react-icons/fa";
import { addToCart } from '../cartSlice';
import { addToFavorites } from '../favoritesSlice';
import 'react-toastify/dist/ReactToastify.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // Number of products per page
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        const response = await fetch('http://your-backend-api-url/products', {
          headers: {
            'Authorization': `Bearer ${token}` // Include the token in the headers
          }
        });
        const data = await response.json();
        if (response.ok) {
          setProducts(data);
        } else {
          setError(data.message || 'Failed to fetch products');
        }
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    const userToken = localStorage.getItem("token"); // Check if user is authenticated using token
    if (!userToken) {
      navigate('/login'); // Redirect to login if not authenticated
      toast.warn(`Login to add product in cart`, {
        position: "top-center",
        autoClose: 2000, // Automatically close the toast after 2 seconds
      });
    } else {
      dispatch(addToCart(product));
      toast.success(`${product.title} added to the cart!`, {
        position: "top-center",
        autoClose: 2000, // Automatically close the toast after 2 seconds
      });
    }
  };

  const handleAddToFavorites = (product) => {
    const userToken = localStorage.getItem("token"); // Check if user is authenticated using token
    if (!userToken) {
      navigate('/login'); // Redirect to login if not authenticated
      toast.warn(`Login to add product to favorites`, {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      dispatch(addToFavorites(product));
      toast.success(`${product.title} added to favorites!`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  // Calculate the total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Slice products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  if (loading) return <p className="text-center text-lg">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold my-8">Products List</h1>
        <Link to="/cart" className="bg-[#e6974d] text-white px-3 py-1 rounded hover:bg-[#d47b28]">
          Cart ({totalQuantity})
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
              <Link to={`/product/${product.id}`}>
                <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
                <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
              </Link>
              <p className="text-gray-600">{product.description.slice(0, 40)}...</p>
              <p className="text-green-500 font-bold mt-2">Price: ${product.price}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-[#e6974d] text-white px-3 py-1 rounded hover:bg-[#d47b28]"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToFavorites(product)}
                  className="text-red-500"
                >
                  <FaRegHeart />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">No products found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-1 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="self-center">{currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-1 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductsList;
