import React,{useState,useEffect} from "react";
import '../navbar.module.css';
import { FaShopify } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Search from "./Search";
import styles from "../navbar.module.css";
const Navbar=()=>{
    return <header className="header">

            <a href="#" className={styles.logo}> <i className="FaShopify"> <FaShopify/></i>Techri Terbah</a>
            <div className={styles.FaSearch}><Search/></div>
            <nav className="navbar">
                <div id="nav-close" className="FaTimes"><FaTimes onClick={()=>document.querySelector('.header .navbar').classList.remove('active')}/></div>
                <a href="#home">home</a>
                <a href="#profile">profile</a>
            </nav>

            <div className="icons">
                <div id="menu-btn" className="FaBars" ><FaBars onClick={()=>document.querySelector('.header .navbar').classList.add('active')}/></div>
                <a href="#" className="fas fa-shopping-cart"><FaShoppingCart/></a>

            </div>

        </header>



}
export default Navbar