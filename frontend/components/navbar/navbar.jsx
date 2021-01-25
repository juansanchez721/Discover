import React from 'react'


class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }












    render() {
        return (
            <nav className="loggedin-nav">
            <div>
            <h1 className="logo" >DO</h1>

            </div>
      <div className="loggedin-user">
          {/* <div> */}
          <h1>Upgrade</h1>
          <h1>Upload</h1>
          <h1>{props.currentUser.username}!</h1>
          <h1>Placeholder</h1>
          <h1>Placeholder</h1>

          {/* </div> */}
          <button className="splashpage-button1" onClick={props.logout}>Log Out</button>
          <br/>
      </div>
    </nav>


        )
    }
}


export default NavBar