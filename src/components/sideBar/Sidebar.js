
import styles from "./sidebar.module.css"
import {useState} from "react";
import {Button, Offcanvas} from "react-bootstrap";
import useWindowDimensions from "../../utilities/ScreenDimensions";

export const Sidebar=({show,handleClose})=>{
    const {  width } = useWindowDimensions();

    return (
        <>


            <Offcanvas show={show} onHide={handleClose} className={styles.sideBar}>
                <Offcanvas.Header closeButton closeVariant={"white"} className={styles.title}>
                    <Offcanvas.Title>Techri Terbah</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                        <ul>
                            {width<1200 && (
                                <>
                                <li>Panier</li>
                                <li>Profile</li>
                                </>
                            )}

                            <li>zeb</li>
                            <li>zab</li>
                            <li>zib</li></ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
