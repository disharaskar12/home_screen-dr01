
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Home from './home/Home';

import Company from "./company/Company";
import AboutUs from "./AboutUs";
import Footer from "./footer/Footer";
import Products from "./products/Product";
import NavigationBar from "./navbar/NavigationBar";
import { useState } from "react";




const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  let content = null;

  switch (activeTab) {
    case 'home':
      content = <Home />;
      break;
    case 'company':
      content = <Company />;
      break;
    case 'paytrakz':
      content = <Products />;
      break;
    case 'aboutus':
      content = <AboutUs />;
      break;
    default:
      content = <Home />;
      break;
  }

  return (
    <div>
      <NavigationBar activeTab={activeTab} onTabClick={handleTabClick} />
      {content}
      <Footer />
    </div>

  );
};
export default App; 