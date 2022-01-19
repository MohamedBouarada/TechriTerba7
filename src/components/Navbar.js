import React,{useState,useEffect} from "react";
//import '../navbar.module.css';
import { FaShopify } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Search from "./Search";
import styles from "../navbar.module.css";
import {Button} from "react-bootstrap";
import useWindowDimensions from "../utilities/ScreenDimensions";
const Navbar=({handleShow})=>{
    const {  width } = useWindowDimensions();

    return <header className={styles.header}>
            <button className={styles.bars} onClick={handleShow}>
                <FaBars />
            </button>
            <a href="#" className={styles.logo}> <i className="FaShopify"> <FaShopify/></i>Techri Terbah</a>

        {width>=1200 && (
            <>
        <div className={styles.FaSearch}><Search/></div>
            <nav className={styles.navbar}>
                <a href="#profile">profile</a>
            </nav>

            <div className={styles.icons}>

                <a href="#"><FaShoppingCart/>panier</a>

            </div>
            </>)}
        </header>



}
export default Navbar