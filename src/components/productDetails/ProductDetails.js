import React, {useState} from 'react';
import styles from './productDetails.module.css';
import productData from '../products/ProductData';
import Rating from '../rating/Rating';
import {FaChevronDown} from "react-icons/all";
import {green} from "tailwindcss/colors";
import {Link} from "react-router-dom";
import {Products} from "../products/Products";

const ProductDetails=({id})=>{

    const product=productData.filter(elt=>elt.id==id);
    const [qty, setQty] = useState(1);


    console.log(product);
    const {name,image,price,rating,numReviews,countInStock,brand,category,description}=product[0];
    return (
                    <div>
                    <div className={styles.productDetails}>
                        <div className={styles.left}>
                            <div className={styles.main}>
                                <img src={image} alt='' />
                            </div>
                            <div className={styles.otherimages}>
                                <div className={styles.otherimg}>
                                    <img src={image} alt='' />
                                </div>
                                <div className={styles.otherimg}>
                                    <img src={image} alt='' />
                                </div>
                                <div className={styles.otherimg}>
                                    <img src={image} alt='' />
                                </div>
                                <div className={styles.otherimg}>
                                    <img src={image} alt='' />
                                </div>
                            </div>
                        </div>

                        <div className={styles.right}>
                            <h1 className={styles.name} style={{color:""}}>
                                {name}
                            </h1>



                            <Rating value={rating} />
                            <div className={styles.price}>
                                {price}$
                            </div>

                            {countInStock > 0 && (
                                <form className={styles.form}>
                                    <div>
                                        <select className={styles.select} value={qty} onChange={e => setQty(e.target.value)}>
                                            {[...Array(countInStock).keys()].map(x => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                        <span>
                                            <FaChevronDown />
                                        </span>
                                    </div>
                                </form>
                            )}
                            <div className={styles.inStock}>
                                Status: {product.countInStock === 0 ?<label className={styles.inStockNo}>Out of Stock</label> : <label className={styles.inStockYes}>In Stock</label>}
                            </div>

                            {countInStock === 0 ? (
                                <div
                                    to={`/`}
                                    className={styles.linkDisabled}
                                    onClick={event => event.preventDefault()}
                                >
                                    Add To Cart
                                </div>
                            ) : (
                                <div  to={`/`}>
                                    Add To Cart
                                </div>
                            )}
                            <h3 className={styles.heading}>Product Description</h3>
                            <div className={styles.description}>
                                {description}
                            </div>


                        </div>




                    </div>
                        <Products category={category} title={'produiet ychabhou'}/>
                    </div>

        )

}
export default ProductDetails;