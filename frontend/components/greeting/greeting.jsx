import React from 'react'
import SearchBar from '../search/searchbar'
import SearchBarContainer from '../search/search-container'
const Header = (props) => {

    const userLoggedIn = () => (
    
        <nav className="loggedin-nav">
            {/* <div>

            </div> */}
      <div className="loggedin-user">
            <h1 className="logo" >DO</h1>
            <h1 >Home</h1>
            <h1 >Stream</h1>
          <h1>Library</h1>
          <SearchBarContainer/>
          <h1 className="fixedh1">Upgrade</h1>
          <h1 className="fixedh1">Upgrade</h1>
          <h1 className="fixedh1">Upload</h1>
          <h1 className="fixedh1">{props.currentUser.username}!</h1> 
          {/* <h1>Placeholder</h1> */}

          {/* </div> */}
          <h1 className="fixedh1" onClick={props.logout}>***</h1>
          <br/>
      </div>
    </nav>
    )

    const notLoggedIn = () => (
        <nav className="nav-bar">
                  {/* import image here  */}
        <div>
            <h1 className="logo" >Discover</h1>
        </div>
      <div className="splashpage-buttons">
          <button className="splashpage-button1" onClick={() => props.openModal('login')}>Sign in</button>
          <button className="splashpage-button2" onClick={() => props.openModal('signup')}>Create account</button>
      </div>
    </nav>
    )

    return props.currentUser ? userLoggedIn() : notLoggedIn()
}


export default Header