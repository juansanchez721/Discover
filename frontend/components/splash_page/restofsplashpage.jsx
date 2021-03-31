import React from "react";

const SplashPageBottom = (props) => {
  // debugger;
  return (
    <div className="splashpage-bottom">
      {/* <h1>Rest of splash page</h1> */}
      <div className="first-row">
        <div className="firstrow-img">
          <img src="https://a-v2.sndcdn.com/assets/images/never_stop_listening@1x-9c5264ff.jpg" />
        </div>
        <div className="firstrow-text">
          <h1>Never Stop Listening</h1>
          <br />
          <p>
            Discover is available on Web, iOS, Android, Sonos, Chromecast, and
            Xbox One.
          </p>
          <br />
          <p>We don't have a mobile app yet - hopefully soon!</p>
        </div>
      </div>
      <div className="second-row">
        {/* <div> */}
          <img
            src="https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg"
            className="callingcreators"
          />
        {/* </div> */}
        <div className="second-row-text">
          <h1>Calling all Creators</h1>
          <p>
            Get on SoundCloud to connect with fans, share your sounds, and grow
            your audience. What are you waiting for?
          </p>

          <button onClick={() => props.props.openModal("signup")}> Find out more </button>
        </div>
      </div>
      <div className="last-row">
        <div className="bottom-info">
          <div>
            <h1>Thanks for listening. Now Join in.</h1>
            <br />
            <h2>
              Save tracks, follow artists and build playlists. All for free.
            </h2>
            <br />

            <button
              className="orangebutton"
              onClick={() => props.props.openModal("signup")}
            >
              Create account
            </button>
            <div className="have-account">
              <p> Already have an account?</p>
              <button onClick={() => props.props.openModal("login")}>
                Sign in
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <span>
              <a href="https://github.com/juansanchez721" target="_blank">
                Github
              </a>
            ⁃
              <a href="https://www.linkedin.com/in/juan-sanchez-24a68b113/" target="_blank">
                LinkedIn
              </a>
            ⁃
              <a href="https://angel.co/u/juan-sanchez-41" target="_blank">
                AngelList
              </a>
          </span>

            <a href="" target="_blank" className="last-footer-link" >
              Portfolio
            </a>
        </div>
      </div>
    </div>
  );
};

export default SplashPageBottom;
