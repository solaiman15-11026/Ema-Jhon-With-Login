
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}>Shop</Route>
        <Route path="/shop" element={<Shop></Shop>}>Shop</Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/about" element={
          <RequireAuth><About></About></RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
