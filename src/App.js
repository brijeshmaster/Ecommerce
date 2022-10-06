import React, {createContext, useState} from "react";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./component/Error";

export const CartContext = createContext();
const App = () => {
  const [Items, setItems] = useState([])

const addToCart = (comp, img, category, price ) =>{
  setItems((prevState) =>[...prevState, {comp, img, category, price }])
}

  return (
    <div>
      <CartContext.Provider value={{Items,addToCart}}>
        <BrowserRouter>
          <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            {/* <Route path="/About/:id" element={<About />} /> */}
            <Route path="*" element={<Error />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
};

export default App;
