import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [products, setProducts] = useState([]);

  // Safely access userData with optional chaining
  const userData = useSelector((state) => state.auth?.userData) || null;
  const totalQuantity = useSelector((state) => state.cart?.totalQuantity) || 0;
  const favoriteCount = useSelector((state) => state.favorites?.favoriteItems.length) || 0;
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Close button clicked")
  };

  // Fetch products for search suggestions
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    if (e.target.value.length > 0) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchTerm}`);
    setSuggestions([]);  // Clear suggestions after search
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full flex items-center justify-between p-2 gap-5 sm:ml-0 md:ml-0">
        {/* Logo */}
        <Link to={"/"}><p className="text-4xl text-[#f1641e]">Etsy</p></Link>

        {/* Hamburger Menu (for small screens) */}
        <IoMenu
          className="text-2xl sm:text-xl md:hidden cursor-pointer"
          onClick={toggleSidebar}
        />

        {/* Search bar (hidden on small screens) */}
        <form onSubmit={handleSearchSubmit} className="relative hidden md:block flex-1 max-w-[50%]">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for anything"
            className="focus:outline-none border-2 border-black w-full p-2 rounded-3xl"
          />
          {suggestions.length > 0 && (
            <ul className="absolute left-0 top-full mt-1 bg-white border border-gray-300 w-full max-h-40 overflow-y-auto z-10">
              {suggestions.map((suggestion) => (
                <li key={suggestion.id} className="p-2 hover:bg-gray-100">
                  <Link to={`/product/${suggestion.id}`}>
                    {suggestion.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </form>

        {/* Icons (Responsive) */}
        <div className="flex items-center gap-4">
          <Link className="text-sm cursor-pointer hidden md:block" to={"profile"}><p>Profile</p></Link>
          {/* If user is logged in, show their name; otherwise, show "Sign in" */}
          {userData ? (
            <p className="hidden md:block">{userData.name}</p>
          ) : (
            <Link to="register" className="hidden md:block">
              <p className="text-sm cursor-pointer">Sign in</p>
            </Link>
          )}

          {/* Favorites Icon with Badge */}
          <Link to="/favorites" className="relative flex items-center">
            <FaRegHeart className="text-2xl sm:text-xl" />
            {favoriteCount > 0 && (
              <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
                {favoriteCount}
              </span>
            )}
          </Link>

          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative flex items-center">
            <CiShoppingCart className="text-3xl sm:text-2xl" />
            {totalQuantity > 0 && (
              <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-2 ml-1">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Sidebar for mobile view */}
      <div
        className={`fixed top-0 left-0 w-[250px] bg-white h-full shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <p
          className="absolute top-4 right-0 text-xl cursor-pointer"
          onClick={toggleSidebar}
        >
          X
        </p>
        
        <div className="flex flex-col p-4 gap-4">
          {/* Sidebar search input */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search for anything"
              className="focus:outline-none border-2 border-black w-full p-2 rounded-3xl"
            />
            {suggestions.length > 0 && (
              <ul className="absolute left-0 top-full mt-1 bg-white border border-gray-300 w-full max-h-40 overflow-y-auto z-10">
                {suggestions.map((suggestion) => (
                  <li key={suggestion.id} className="p-2 hover:bg-gray-100">
                    <Link to={`/product/${suggestion.id}`}>
                      {suggestion.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </form>

          {userData ? (
            <p>{userData.name}</p>
          ) : (
            <Link to="/register" className="text-sm cursor-pointer">
              Sign in
            </Link>
          )}

          <Link to="/favorites" className="relative flex items-center">
            <FaRegHeart className="text-xl" />
            {favoriteCount > 0 && (
              <span className="absolute top-1 right-1 text-xs bg-red-500 text-white rounded-full px-1">
                {favoriteCount}
              </span>
            )}
          </Link>
          <Link to="/profile">Profile</Link>
          <Link to="/cart" className="relative flex items-center">
            <CiShoppingCart className="text-3xl" />
            {totalQuantity > 0 && (
              <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-2">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Navbar links for medium and large screens */}
      <div className="hidden md:flex items-center justify-center gap-4 p-2">
        <p className="flex items-center">
          <GiPresent className="text-xl" />
          Gift Mode
        </p>
        <p>Halloween Shop</p>
        <p>Home Favorites</p>
        <p>Fashion Finds</p>
        <p>Registry</p>
      </div>
    </>
  );
};

export default Navbar;
