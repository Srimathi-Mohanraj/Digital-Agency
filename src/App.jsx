import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandLogo from "./components/BrandLogo/BrandLogo";
import Services from "./components/Services/Services";
import Testmonials from "./components/Testmonials/Testmonials";
import Blogcomp from "./components/Blogcomp/Blogcomp";
import Footer from "./components/Footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () =>{
  return(
 <div className=" overflow-x-hidden bg-blue-400">
<Navbar />
<Hero/>
<BrandLogo/>
<Services/> 
<Testmonials/>
<Blogcomp/>
<Footer/>
  </div>
  )
 
}
export default App      