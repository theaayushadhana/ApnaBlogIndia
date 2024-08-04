
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Home from '../pages/home';
import PostDetail from '../components/postDetail';
import About from '../pages/about';
import ContactUs from '../pages/contactus';
import Privacy from '../pages/privacyPolicy';
import Login from '../pages/login';
import Admin from '../pages/Admin';
import ResponsiveAppBar from '../components/navbar';
import PostList from '../pages/postList';
import Footer from '../pages/footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.js';
import PostsByCategory from '../components/postCategory.jsx';
import Disclaimer from '../pages/disclaimer.jsx';
import TermsAndConditions from '../pages/termsAndConditions.jsx';
const App = () => {
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    console.log('Fetching current user');
    // axios.get('http://localhost:5000/auth/current_user', { withCredentials: true })
    axios.get('https://api.apnablog.com/auth/current_user', { withCredentials: true })
      .then(res => {
        console.log('User data:', res.data);
        setUser(res.data);
      })
      .catch(error => {
        console.error('Error fetching current user:', error);
        setUser(null);
      });
  }, []);

  return (
    <Router>
      <AppRoutes user={user} />
    </Router>
  );
};

const AppRoutes = ({ user }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <ResponsiveAppBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/discover" element={<PostList />} />
        <Route path="/posts/:slug" element={<PostDetail />} />
        <Route path="/category/:category" element={<PostsByCategory />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
         <Route path='/terms&Conditions' element={<TermsAndConditions/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
