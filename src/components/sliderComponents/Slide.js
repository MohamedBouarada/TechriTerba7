import React ,{useState,useEffect} from "react";
import data from "../../data";

const Slide = (props)=>{
    const {_id}=props;
    const {title}=props;
    const {url}=props;

                    return(
                        <>
                            <img src={url} alt={title} className="person-img" />

                        </>

                    )
}

export default Slide;