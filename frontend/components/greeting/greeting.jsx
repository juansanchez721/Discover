import React from "react";
import SearchBar from "../search/searchbar";
import SearchBarContainer from "../search/search-container";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameDropDown: false,
      optionsDropDown: false,
    };

    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleDropDown(field) {
    this.state[field]
      ? this.setState({ [field]: false })
      : this.setState({ [field]: true });
  }

  handleBlur(field) {
    if (this.state[field]) {
      this.setState({ [field]: false });
    }
  }

  render() {
    const userDropDown = this.state.usernameDropDown ? (
      <div className="username-drop-down" id="username-circle-maker">
        {/* <button onClick={e => e.stopPropagation()} > */}
          <Link
          className="text-link"
            onMouseDown={(e) => e.preventDefault()}
            to={`/users/${this.props.currentUser.id}`}
            >
        <div className="drop-down-option">
            <i className="fas fa-user"></i> 
            <span>
              Profile
            </span>
        </div>
          </Link>
          <Link
          className="text-link"
            onMouseDown={(e) => e.preventDefault()}
            to={`/users/${this.props.currentUser.id}/likes`}
            >
        <div className="drop-down-option">
        <i className="fas fa-heart"></i>
          <span>Likes</span>
        </div>
            </Link>

            <Link
          className="text-link"
            onMouseDown={(e) => e.preventDefault()}
            to={`/users/${this.props.currentUser.id}/following`}
            >
        <div className="drop-down-option">
       <i className="fas fa-user-friends"></i>
          <span>Following</span>
        </div>
            </Link>
      </div>
    ) : null;

    const opDropDown = this.state.optionsDropDown ? (
      <div className="op-drop-down">
                <div
                onMouseDown={(e) => e.preventDefault()} 
                onClick={this.props.logout} 
                className="drop-down-option">
                  <span>Sign out</span>
                </div>
      </div>
    ) : null;

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

            <div
              className="username"
              tabIndex="0"
              onClick={() => this.handleDropDown("usernameDropDown")}
              onBlur={() => this.handleBlur("usernameDropDown")}
            >
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
              {userDropDown}
            </div>
            {/* </Link> */}

            <div className="navbar-buttons">
                <h2               
                  tabIndex="0"
                  className="options-drop-down">
                    <i className="fas fa-bell"></i>
                </h2>
              <h2                         
              tabIndex="0"
              className="options-drop-down">
                  <i className="fas fa-envelope"></i>
              </h2>
              <h2
                onClick={() => this.handleDropDown("optionsDropDown")}
                onBlur={() => this.handleBlur("optionsDropDown")}
                tabIndex="0"
                className="options-drop-down"
              >
                <i className="fas fa-ellipsis-h"></i>
              </h2>
              {opDropDown}
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
}

export default Header;
