import React from 'react';
import Banner from './Banner';
import ProductsList from './ProductsList';

const Home = ({ user }) => { // Accept user as a prop
  return (
    <div>
      <Banner user={user} /> {/* Pass user to Banner */}
      <ProductsList />
    </div>
  );
};

export default Home;
