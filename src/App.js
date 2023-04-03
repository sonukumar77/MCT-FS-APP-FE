import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import User from './components/User/User';
import Login from './components/Login/Login';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className='app-container'>
    <Nav/>
    <Routes>
     <Route  path='/' element={<Login />}/>
      <Route  path='/home' element={<Home />}/>
      <Route  path='/products' element={<Product />}/>
      <Route  path='/productDetails/:cat/:_id' element={<ProductDetails />}/>
      <Route  path='/users' element={<User /> }/>
      <Route  path='/contactUs' element={<ContactUs /> }/>
      <Route  path='/contactUs' element={<ProductDetails /> }/>
    </Routes>
    </div>
  );
}

export default App;
