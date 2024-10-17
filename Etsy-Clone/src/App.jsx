import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Login from './components/Login';
import ProductsList from './components/ProductsList';
import SingleProduct from './components/SingleProduct';
import Accordian from './components/Accordian';
import Footer from './components/Footer';
import CartPage from './components/CartPage';
import FavoritesPage from './components/FavoritesPage';
import { ToastContainer } from 'react-toastify';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('User:', user);  // Add this to check the user
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home user={user}/>} /> {/* Home accessible for all users */}
        
        <Route path="/register" element={<SignIn />} />
        <Route path="/login" element={user ? <Navigate to="/profile" /> : <Login />} /> {/* Redirect to profile if logged in */}
        {/* <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />  */}
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" replace />} />

        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        
      </Routes>
      
      <ToastContainer />
      <Accordian />
      <Footer />
    </>
  );
}

export default App;
