import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faSearch,faAngleRight,faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FaAngleRight} from "react-icons/fa";
import {FaAngleDown} from "react-icons/fa";
import styles from "./sidebarElement.module.css"
import {SidebarDetail} from "../sideBarDetails/SidebarDetail";
import {useState} from "react";
export const SidebarElement=({title,icon})=>{
    const [showDetails,setShowDetails]=useState(false);
    const chevron=showDetails? faAngleDown:faAngleRight;
    return(
     <div className={styles.body} onClick={()=>setShowDetails(!showDetails)}>
         <FontAwesomeIcon className={styles.icons} icon={icon}/>
         <span className={styles.title}>{title}</span>
         <FontAwesomeIcon icon={chevron} className={styles.faAngleRight}/>
         {
             showDetails && (<SidebarDetail title={title} />)
         }

     </div>
    )
}