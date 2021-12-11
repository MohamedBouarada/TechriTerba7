import React from "react";
import { FaSearch } from "react-icons/fa";

const Search=()=>{
    return (
        <form action="/" method="GET">
            <input
                type="text"
                class="search-input"
                placeholder="search..."
                name="search"
            />
            <button type="submit" className="search-btn"><FaSearch/></button>
        </form>
    );
}

export default Search;