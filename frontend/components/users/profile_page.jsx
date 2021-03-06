

import React from 'react'
// import ProfileTracksContainer from './profile_tracks_container'
import ProfileTrackItem from './profile_track_item'
class ProfilePage extends React.Component {

    constructor(props){
        super(props)
        debugger

        this.state = {
            loaded: true
        }
        // this.yoo = null;
        // this.userId = this.props.match.params.userId
    }

    componentDidMount() {
        // this.setState({ userId: this.props.match.params.userId})
        
        this.props.fetchUser(this.props.match.params.userId)
        .then(() => this.props.fetchSingleUserTracks(this.props.match.params.userId))
        .then(() => this.setState({ loaded: false }) ) 
    }

    componentDidUpdate(prevProps){
        debugger
        if(this.props.match.params.userId !== prevProps.match.params.userId ){
            this.props.fetchSingleUserTracks(this.props.match.params.userId)
        .then(this.props.fetchUser(this.props.match.params.userId))
        }
        debugger
    }
    
    render() {
        debugger
        // this.yoo 
        // if(this.state.userIdid !== parseInt(this.props.match.params.userId)){
        //     debugger
        //     // this.setState({ userId: this.props.match.params.userId})

        //     this.props.fetchSingleUserTracks( this.props.match.params.userId)
        // }

        // console.log(this.state.userId)
        // console.log(this.props.match.params.userId)
        // console.log(this.props.user.id) //use id for a container for the profile track items

        if(this.state.loaded) {
            return (
                <div className="profile-page">
                    <h1>Loading . . .</h1>
                </div>
            )
        }

        if(this.props.user === undefined){
            return null
        }

        console.log(this.props.tracks)
        debugger
        let tracks = this.props.tracks.map(track => (
            <ProfileTrackItem key={track.id} 
            user={this.props.user} 
            track={track} 
            liked={track.likers.includes(this.props.currentUser.id)}
            currentUser={this.props.currentUser}
            playSong={this.props.playSong}
            updateTrackModal ={this.props.updateTrackModal}
            deleteTrackModal={this.props.deleteTrackModal}
            createLike={this.props.createLike}
            deleteLike={this.props.deleteLike} />
        ))

        return(

            <div className="profile-page">
                <div className ="info-holder">
                    <div className="image-container">
                        
                        <div className="circle-holder">
                            <img className="profile-default" src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"/>
                        {/* <img className="profile-default" src={this.props.user.image_url ? this.props.user.image_url : "https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"}/> */}
                        </div>
                    
                    </div>
                        <div className="user-info">
                            <div className="text">
                            <h1>{this.props.user.username}</h1>

                            </div>
                        </div>
                        {/* <h1>This is the user page</h1> */}

                        <div>
                        </div>
                
                </div>
                <div className="profile-page-bottom">

                <div className="recent-tracks">

                {/* <div className="actual-tracks"> */}

                <h3>Recent</h3>
                            {tracks.reverse()}
                {/* </div> */}
                {/* <ProfileTracksContainer /> */}

                </div>
                {/* <div className="right-side-bar">
                <div className="profile-links">
                  <h1 className="links-header"> Who to follow</h1>
                  yoooooo
                </div>
              </div> */}
                </div>
            </div>
        )
    }


}


export default ProfilePage