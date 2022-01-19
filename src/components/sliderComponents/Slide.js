import React ,{useState,useEffect} from "react";
import data from "../../data";
import styles from "../../slide.module.css"
const Slide = (props)=>{
    const {_id}=props;
    const {title}=props;
    const {url}=props;

                    return(
                        <>
                            <img src={url} alt={title} className={styles.personImg} />
                        </>

                    )
}

export default Slide;