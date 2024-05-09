import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import ProductListings from './components/ProductListening';
import AddedItems from './components/AddedItems';
import RequestList from './components/RequestList';
// import './assets/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import LandingPage from './components/pages/Home';
import Tournament from './components/Tournament';
import Schedule from './components/Schedule';
import Stream from './components/Stream';
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="">
      {/* <Header/> */}
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/fighting_tournament' element={<Schedule />} />
        <Route path='/livestream' element={<Stream />} />
        <Route path='/community' element={<RequestList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/tournament' element={<Tournament />} />
        {/* <Route path="/"
                    element={<RequestList />} /> */}
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Dashboard />} /> {/* Add this line for the dashboard route */}
        </Route>
        <Route exact path="/shop" element={<ProductListings cartItems={cartItems} setCartItems = {setCartItems}/>} />
            {/* <Route path="/payment" element={<Payment/>} /> */}
            <Route path="/cart" element={<AddedItems cartItems={cartItems} />} /> 
            {/* <Route path="/"
                    element={<RequestList />} />
                <Route path='/community' element={<RequestList />} /> */}
      </Routes>
    </div>
  );
}

export default App;
