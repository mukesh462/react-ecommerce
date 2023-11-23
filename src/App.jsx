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

const Root = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
     <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/view" element={<ProductView />} />
        <Route exact path="/auth" element={<Auth />} /> 
          <Route exact path="/filterPage" element={<FilterPage />} />
          <Route exact path="/checkout" element={<CheckOut />} />

      </Routes>
      <Footer />
    </>
  );
};
function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Root/></BrowserRouter>
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
