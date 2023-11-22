import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import ProtectedRoute from "./components/authRoutes/ProtectedRoute";
import PublicRoute from "./components/authRoutes/PublicRoute";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import CatPage from "./components/CatPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/category" element={<CatPage/>} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/SingleProducts/:productid" element={<SingleProduct/>} />
            <Route path="/Cart/:userId" element={<Cart/>} />
          </Route>

          <Route path="/" element={<PublicRoute/>}>
            <Route path="/login" element={<SignIn/>} />
            <Route path="/Signup" element={<SignUp/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
