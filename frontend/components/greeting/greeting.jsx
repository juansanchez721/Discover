import React from "react";
import SearchBar from "../search/searchbar";
import SearchBarContainer from "../search/search-container";
import { Link } from "react-router-dom";

class Header extends React.Component {
  

    constructor(props) {
      super(props)

      this.displayDropDown = this.displayDropDown.bind(this)
    }
  
  // debugger;

  displayDropDown() {
     let yo = document.getElementById("username-circle-maker").style.display = "flex"
  }

  render() {

    const userLoggedIn = () => (
      <nav className="loggedin-nav">
      {/* <div>

</div> */}
      <div className="loggedin-user">
        {/* <h1 className="logo" > */}
        <div className="logged-in-left-side">
          <Link to="/discover" className="text-link">
            <div className="logopic-div">
              <img src="https://img.icons8.com/ios/50/ffffff/cloud.png" />
            </div>
          </Link>
          {/* </h1> */}
          <h1>Home</h1>
          <h1>Stream</h1>
          <h1>Library</h1>
        </div>
        <SearchBarContainer />

        <div className="logged-in-right-side">
          <h2>Try Pro</h2>

          <h2>
            <Link to="/tracks/upload" className="text-link">
              Upload
            </Link>
          </h2>

          {/* <Link to={`/users/${props.currentUser.id}`} className="text-link"> */}
            <div className="username" tabIndex="0" onClick={() => this.displayDropDown()} >
              <div className="username-circle-maker">
                <img
                  className="profile-default"
                  src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"
                  />

                {/* <img className="profile-default" src={props.user.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/> */}
              </div>

              <span>{this.props.currentUser.username}</span>
              <span>
                <i className="fas fa-chevron-down"></i>
              </span>
            <div className="username-drop-down" id="username-circle-maker" >

              <h2>yoyoyo</h2>
              <h2>yoyoyo</h2>
              <h2>yoyoyo</h2>
              <h2>yoyoyo</h2>
              <h2>yoyoyo</h2>

            </div>
            </div>
          {/* </Link> */}

          <div className="navbar-buttons">
            <h2 onClick={this.props.logout}><i className="fas fa-ellipsis-h"></i></h2>
          </div>
          
        </div>
      </div>
    </nav>
  );
  
  const notLoggedIn = () => (
    <nav className="nav-bar">
      {/* import image here  */}
      <div>
        <h1 className="logo">Discover</h1>
      </div>
      <div className="splashpage-buttons">
        <button
          className="splashpage-button1"
          onClick={() => this.props.openModal("login")}
          >
          Sign in
        </button>
        <button
          className="splashpage-button2"
          onClick={() => this.props.openModal("signup")}
          >
          Create account
        </button>
      </div>
    </nav>
  );
  
  return this.props.currentUser.id ? userLoggedIn() : notLoggedIn();
}
};

export default Header;
