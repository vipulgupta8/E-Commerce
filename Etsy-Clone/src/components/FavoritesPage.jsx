import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { removeFromFavorites } from '../favoritesSlice'; // Import the action

const FavoritesPage = () => {
  const dispatch = useDispatch(); // Use useDispatch to get the dispatch function
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Your Favorites</h1>

      {favoriteItems.length === 0 ? (
        <p className="text-center">You have no favorite items!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteItems.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-500 font-bold mt-2">Price: ${product.price}</p>
              <div className="flex justify-between mt-4">
                <Link
                  to={`/product/${product.id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  View Product
                </Link>
                <button
                  className="text-red-500"
                  onClick={() => dispatch(removeFromFavorites(product.id))} // Dispatch the remove action
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
