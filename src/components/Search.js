import React from "react"
import { MdSearch } from "react-icons/md"

const Search = ({ handleSearchNote }) => {
    return (
        <div className="search">
            <MdSearch className="search-icon" size='1.5rem' />
            <input onChange={(event) => handleSearchNote(event.target.value.toLowerCase())} type='text' placeholder="type to search..." />
        </div>
    )
}

export default Search