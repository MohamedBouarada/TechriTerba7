
import styles from "./sidebar.module.css"
import {useState} from "react";
import {Button, Offcanvas} from "react-bootstrap";
import useWindowDimensions from "../../utilities/ScreenDimensions";


import sideBarItems from "./dataSideBar";
import {SidebarElement} from "./SidebarElement";
import {SidebarDetail} from "../sideBarDetails/SidebarDetail";
import Search from "../Search";



export const Sidebar=({show,handleClose})=>{
    const { width } = useWindowDimensions();

    const list=width>=1200? sideBarItems.filter(elt=>elt._id>2):sideBarItems;
    return (
        <>


            <Offcanvas show={show} onHide={handleClose} className={styles.sideBar}>
                <Offcanvas.Header closeButton closeVariant={"white"} className={styles.title}>
                    <Offcanvas.Title>
                        <em><strong>SARBI ROUHEK</strong></em></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.body}>
                        <ul>
                            {width<1200 && (
                                <li><Search/></li>)
                            }
                            {list.map((sideBarItem)=>{
                                    const {_id,title,icon}=sideBarItem;
                                    return(
                                        <li>
                                            <SidebarElement
                                                title={title}
                                                icon={icon} />

                                        </li>
                                    );
                            }
                            )}

                        </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
