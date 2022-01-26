import React, {useState} from "react";
import Slider from "../components/sliderComponents/Slider";
import Navbar from "../components/Navbar";
import {Sidebar} from "../components/sideBar/Sidebar";
import {Products} from "../components/products/Products";
import ProductDetails from "../components/productDetails/ProductDetails";
//<Collection />
//<Products />
const Home=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Navbar handleShow={handleShow} show={show}/>

            <Sidebar handleClose={handleClose} show={show}/>

            <ProductDetails id={1}/>


        </>
    )
}

export default Home;