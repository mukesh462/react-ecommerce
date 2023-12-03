import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeSlide from "./components/HomeSlide";
import HomePage from "./components/HomePage";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import ProductView from "./components/ProductView";
import Auth from "./components/Auth";
import FilterPage from "./components/FilterPage";
import CheckOut from "./components/CheckOut";
import AppMenu from "./components/AppMenu";
import MyProfile from "./components/MyProfile";
import Orders from "./components/Orders";
import Address from "./components/Address";
import OrderView from "./components/OrderView";
import SuccessModel from "./components/SuccessModel";
import Loader from "./components/Loader";

const Root = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="app-main">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/view" element={<ProductView />} />
          <Route exact path="/myProfile" element={<MyProfile />} />
          <Route exact path="/filterPage" element={<FilterPage />} />
          <Route exact path="/checkout" element={<CheckOut />} />
          <Route exact path="/myOrders" element={<Orders />} />
          <Route exact path="/address" element={<Address />} />
          <Route exact path="/orderView" element={<OrderView />} />
          <Route exact path="/s" element={<Loader />} />


        </Routes>
      </div>

      <Footer />
    </div>
  );
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
      {/* <RouterProvider router={router} >
     

      

      </RouterProvider> */}
    </>
    // <div>

    //
    // <HomeSlide/>
    // <HomePage/>
    // </div>
  );
}

export default App;
