import React from 'react'
import PlayButton from '../play_button/play_button'
import CommentsContainer from '../comments/comments_container'
class TrackShow extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.props.fetchTrack(this.props.match.params.trackId)
        .then(() => this.props.fetchTrackComments(this.props.match.params.trackId))
        .then(() => this.props.fetchUser(this.props.song.owner_id))
        }
        
        componentDidUpdate(prevProps){
            // console.log(prevProps)
            if( prevProps.songId !== this.props.songId ){
                this.props.fetchTrack(this.props.songId)
                .then(() => this.props.fetchUser(this.props.song.owner_id))
                .then(() => this.props.fetchTrackComments(this.props.song.id))
            } 
        }
        
        render() {
        // console.log(this.props.song)
        // console.log(this.props.user)

        if (this.props.song === undefined || this.props.user[this.props.song.owner_id] === undefined) {
            return null;
        }
        return (
            <div className="show-full-page">

                <div className="track-show">

                    <div className="info-playbar" >

                        <div className="info-text">
                            <div className="track-show-circle-container">
                                <PlayButton />
                            </div>
                            <div className="song-info">

                            <h1> {this.props.user[this.props.song.owner_id].username } </h1>
                            <h1> {this.props.song.title } </h1>
                            </div>
                        </div>
                        {/* <div className="audio-player-holder" >

                                <audio
                                controls
                                // src={this.props.song.track_url}
                                >
                                    Your browser does not support the
                                </audio>
                        </div> */}
                    </div>
                    <div className="show-image">
                    <img src={"https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"} />

                            {/* <img src={this.props.song.image_url} />  */}
                    </div>
                
                </div>
                        <CommentsContainer artist={this.props.user[this.props.song.owner_id]} />
           

            </div>
    )
}
}



export default TrackShow