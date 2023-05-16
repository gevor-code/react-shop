import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
      <div>
        <BrowserRouter>
            <Header/>
            <Footer/>
        </BrowserRouter>
      </div>
  );
};

export default App;

