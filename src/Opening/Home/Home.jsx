import React from 'react';
import "../../All.css"
import Body from "../Body/Body";
import Sliders from "../Sliders/Sliders";
import About from "../AboutUs/About";
import Friends from "../Friends/Friends";
import Product from "../Product/Product";
export default function Home() {
  return (
    <div>    
    <div>
     <Body/>
     <Sliders/>
     <Product/>
     <About/>
     <Friends/>
    </div>
    </div>
  )
}
