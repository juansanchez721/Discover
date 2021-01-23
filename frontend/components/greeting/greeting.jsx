import React from 'react'


const Header = (props) => {

    const userLoggedIn = () => (
        <nav className="loggedin-nav">
            <div>
            <h1 className="logo" >Discover</h1>

            </div>
      <div className="loggedin-user">
          <button className="splashpage-button2" onClick={props.logout}>Hi, {props.currentUser.username}!</button>
          <button className="splashpage-button1" onClick={props.logout}>Log Out</button>
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