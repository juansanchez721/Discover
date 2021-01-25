import React from 'react'



const SplashPageBottom = () => {

    return (
        <div className="splashpage-bottom">
            {/* <h1>Rest of splash page</h1> */}
            <div className="first-row">
                <div className="firstrow-img">
                    <img src="https://a-v2.sndcdn.com/assets/images/never_stop_listening@1x-9c5264ff.jpg" />
                </div>
                <div className="firstrow-text">
                <h1>Never Stop Listening</h1>
                <br/>
                <p>SoundCloud is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.</p>
                    <br/>
                <p>We don't have a mobile app yet - hopefully soon!</p>
                </div>
            </div>
            <div className="second-row">
                    <div>

                    <img  src="https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg" className="callingcreators" />

                    </div>
                    {/* <div className="absdiv"> */}

                    {/* <h1>Calling all Creators</h1> */}

                    {/* </div> */}
            </div>
            <div className="last-row">
                <div className="bottom-info">
                    <h1>Thanks for listening. Now Join in.</h1>
                    <br/>
                    <h2>Save tracks, follow artists and build playlists. All for free.</h2>
                    <br/>
                  
                    <button className="orangebutton">Create Account</button>
                </div>
            </div>
        </div>
    )
}


export default SplashPageBottom