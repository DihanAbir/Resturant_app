import logo from "./logo.svg";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import "./App.css";

import Landing from "./screens/Landing/landing";
import Layout from "./components/Layout/layout";
import Login from "./screens/login/login";
import Favourite from "./screens/Favourite/Favourite";
import Cart from "./screens/Cart/Cart";
import Nottification from "./screens/Nottification/Nottification";
import Profile from "./screens/Profile/Profile";
import Payment from "./screens/Payment/Payment";

function App() {
  return (
    <Layout>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/nottification" element={<Nottification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      {/* </BrowserRouter> */}
      {/* <Payment /> */}
      {/* <Landing /> */}
      {/* <Favourite /> */}
      {/* <Cart /> */}
      {/* <Nottification /> */}
      {/* <Profile /> */}
    </Layout>
  );
}

export default App;
