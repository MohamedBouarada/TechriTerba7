import React from 'react';
import productData from './ProductData';
import {Title} from '../Title/Title';
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import styles from './product.module.css';
import sideBarItems from "../sideBar/dataSideBar";

export const Products = ({category,title}) => {
    const newTitle=title?title:'NEW PRODUCTS';
    const list=category? productData.filter(elt=>elt.category==category):productData;
    return (
        <div>
            <Title title={newTitle} />
        <section className={styles.section}>

            {list.map((item, index) => (

                <div className={styles.ProductItem} key={index}>
                    <div className={styles.ImgContainer} >

                            <img src={item.image} alt={item.name}/>

                        <div className={styles.IconWrapper}>
                            <FaShoppingCart className={styles.icon}/>
                        </div>

                    </div>
                    <div className={styles.Bottom}>
                        <div className={styles.ProductLink}>

                                {item.name}

                        </div>
                        <div className={styles.price}>
                            <span>${item.price}</span>
                        </div>
                    </div>
                </div>
            ))}
        </section>
        </div>
    );
}




