import React , {useState,useEffect} from "react";
import data from "./data";
//import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
//import { FaQuoteRight } from 'react-icons/fa';

const Slider = ()=> {
    const [slider_image,setSlider_image]=useState(data);
    const [index,setIndex]=useState(0);

    return <section className="section">
            <div className="section-center">
                {slider_image.map((slider_im,index)=>{
                    const {_id,title,url}=slider_im;
                    return(
                        <article className="slide" key={_id}>
                            <img src={url} alt={title} className="person-img" />
                            <h4>{title}</h4>

                        </article>
                    )
                }
                )}
            </div>
    </section>
}
export default Slider;