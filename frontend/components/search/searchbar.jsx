import React from 'react'



const SearchBar = () => {

    return (
        
        <div className="searchbar-container">
            <div className="innersearchcontainer">

            <div className="search-first">
                <input className="search-bar" placeholder= "search artist or song"/>
            </div>
            <div className="or-upload" >
                <p>or</p>
                <button className="orangebutton"> Upload your own</button>
            </div>
            </div>
        </div>
    )
}


export default SearchBar