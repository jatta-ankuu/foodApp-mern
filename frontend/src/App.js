import './App.css';
import Home from "./screen/Home"
import {BrowserRouter , Routes, Route} from "react-router-dom"
import SignUp from './screen/SignUp';
import Login from './screen/Login';
import Footer from "./Component/Footer";
import Navbar from './Component/Navbar';
import Cart from './screen/cart';
import { CartProvider } from './Component/context/context';
function App() {

  return (<>
  <CartProvider>
  <BrowserRouter>
   <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </CartProvider>
  </>
  );
}

export default App;
