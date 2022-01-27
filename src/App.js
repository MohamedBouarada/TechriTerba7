import React, { useState , useEffect} from "react";
import Home from './screens/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import styles from "./index.module.css";
import Navbar from "./components/Navbar";
import {Sidebar} from "./components/sideBar/Sidebar";
import ProductDetails from "./screens/productDetails/ProductDetails";
import Login from "./screens/loginScreen/Login";
function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return <main>
        <section className={styles.container}>
            <Navbar handleShow={handleShow} show={show}/>
            <Sidebar handleClose={handleClose} show={show}/>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path='/productDetails/:id' element={<ProductDetails/>}/>

                </Routes>
                </BrowserRouter>

        </section>
    </main>
}

export default App;
