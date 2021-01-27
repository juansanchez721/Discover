import React from 'react'

class TrackShow extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.props.fetchTrack(this.props.songId)
    }


    render() {

        return (
            <div className="show-full-page">

                <div className="track-show">

                    <div className="info-playbar" >

                        <div className="info-text">
                            <h1> {this.props.song.title } </h1>
                            <h1> {this.props.song.owner_id } </h1>
                        </div>
                        <div className="audio-player-holder" >

                                <audio
                                controls
                                src={this.props.song.track_url}>
                                    Your browser does not support the
                                </audio>
                        </div>
                    </div>
                    <div className="show-image">

                            <img src={this.props.song.image_url} /> 
                    </div>
                
                </div>

           

            </div>
    )
}
}



export default TrackShow