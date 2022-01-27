import React, {useState} from "react";
import Slider from "../components/sliderComponents/Slider";
import Navbar from "../components/Navbar";
import {Sidebar} from "../components/sideBar/Sidebar";
import {Products} from "../components/products/Products";
import ProductDetails from "./productDetails/ProductDetails";
//<Collection />
//<Products />
const Home=()=>{

    return(
        <>
            <Slider/>
            <Products />
        </>
    )
}

export default Home;