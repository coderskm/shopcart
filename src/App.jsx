import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from './components/SingleProduct'
import Cart from "./components/Cart"
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:productId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App
