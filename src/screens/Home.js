import React, {useState} from "react";
import Slider from "../components/sliderComponents/Slider";
import Navbar from "../components/Navbar";
import {Sidebar} from "../components/sideBar/Sidebar";
//<Collection />
//<Products />
const Home=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Navbar handleShow={handleShow} show={show}/>
            <Slider />
            <Sidebar handleClose={handleClose} show={show}/>


        </>
    )
}

export default Home;