import React from "react";
import styles from './rating.module.css';
import {FaStar} from 'react-icons/fa';
import {FaStarHalfAlt} from 'react-icons/fa';
import {FaRegStar} from 'react-icons/fa';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfAlt,faStarOfDavid} from "@fortawesome/free-solid-svg-icons";

const Rating=({value,text,color})=>{
    return (
        <div className={styles.rating}>
            <span>
                <FontAwesomeIcon icon={
                    value >= 1
                        ? faStar
                        : value >= 0.5
                            ? faStarHalfAlt
                            : faStarOfDavid
                }/>
      </span>
            <span>
                <FontAwesomeIcon icon={
                    value >= 2
                        ? faStar
                        : value >= 1.5
                            ? faStarHalfAlt
                            : faStarOfDavid
                }/>
      </span>
            <span>
                <FontAwesomeIcon icon={
                    value >= 3
                        ? faStar
                        : value >= 2.5
                            ? faStarHalfAlt
                            : faStarOfDavid
                }/>
      </span>
            <span>
                <FontAwesomeIcon icon={
                    value >= 4
                        ? faStar
                        : value >= 3.5
                            ? faStarHalfAlt
                            : faStarOfDavid
                }/>
      </span>
            <span>
                <FontAwesomeIcon icon={
                    value >= 5
                        ? faStar
                        : value >= 4.5
                            ? faStarHalfAlt
                            : faStarOfDavid
                }/>

      </span>

        </div>
    )
}
export default Rating;