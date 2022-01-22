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
import dataSideBar from "./sideBar/dataSideBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Navbar=({handleShow,show})=>{
    const {  width } = useWindowDimensions();
    const list =dataSideBar.filter(elt=>elt._id<3);
    const isHidden=show?"hidden":"visible";
    return <header className={styles.header}>

            <button className={styles.bars} onClick={handleShow} style={{visibility:isHidden}}>
                <FaBars />
            </button>
            <a href="#" className={styles.logo}> <i className="FaShopify"> <FaShopify/></i>Techri Terbah</a>

        {width>=1200 && (
            <>
        <div className={styles.FaSearch}><Search/></div>
            <nav className={styles.navbar}>
                <a href="#profile"><FontAwesomeIcon icon={list[1].icon}/>{list[1].title}</a>
            </nav>

            <div className={styles.icons}>

                <a href="#"><FontAwesomeIcon icon={list[0].icon}/>{list[0].title}</a>

            </div>
            </>)}
        </header>



}
export default Navbar