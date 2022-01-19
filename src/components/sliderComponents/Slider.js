import React ,{useState,useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import Slide from './Slide';
import data from "../../data";
import styles from "../../slider.module.css";

const Slider = () => {

    const [index,setIndex]=useState(0);
    const [slide_im,setSlide_im]=useState(data);
    useEffect(()=>{
        const lastIndex= slide_im.length-1;
        if (index<0){
            setIndex(lastIndex);
        }
        else if(index>lastIndex){
            setIndex(0);
        }
    },[index]);
    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index+1);
        },3000);
        return ()=>clearInterval(slider);
    },[index]);

    //let slide = slide_im.find(image=>image._id==index)
    //console.log(index);
    return <section className={styles.section}>

            {slide_im.map((slider_img,slider_imgIndex)=>{
                    const {_id,title,url}=slider_img;
                    let position = styles.nextSlide;
                    if(slider_imgIndex===index){
                        position= styles.activeSlide;
                    }
                    if(slider_imgIndex===index-1 || (index===0 && slider_imgIndex===slide_im.length-1)){
                        position= styles.lastSlide;
                    }

                        return(
                            <article className={position} key={_id}>
                            <Slide _id={_id} title={title} url={url} />
                            </article>
                        );}


            )}

            <button className={styles.prev} onClick={()=> setIndex(index-1)}>
                <FiChevronLeft />
            </button>
            <button className={styles.next} onClick={()=>setIndex(index+1)}>
                <FiChevronRight />
            </button>

    </section>



}

export default Slider