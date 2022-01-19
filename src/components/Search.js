import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../search.module.css";
const Search=()=>{
    return (
        <form action="/" method="GET">
            <input
                type="text"
                className={styles.searchInput}
                placeholder="search..."
                name="search"
            />
            <button type="submit" className={styles.searchBtn}><FaSearch/></button>
        </form>
    );
}

export default Search;