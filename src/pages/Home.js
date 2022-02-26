import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CAT_IMG from '../imgs/cat.jpg';
const Home = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <Link to="/dynamic">dynamic</Link>
      <img src={CAT_IMG} alt="cat" />
    </Layout>
  );
};

export default Home;
