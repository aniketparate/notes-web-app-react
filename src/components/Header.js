import React from "react";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>Your Notes</h1>
            <button className="save" onClick={() => handleToggleDarkMode(darkMode => !darkMode)} >Toggle</button>
        </div>
    )
}

export default Header