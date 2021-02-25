import React from 'react'

class TrackShow extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount(){
        debugger
        this.props.fetchTrack(this.props.match.params.trackId)
        // console.log(this.props.song)
        .then(
        //     // if(this.props.song !== undefined){

                // this.props.fetchUser(this.props.song.owner_id)
        //     // }
            )
            debugger
        }
        
        // componentDidUpdate(prevProps){
        //     debugger
        //     console.log(prevProps)
        //     if( parseInt(Object.keys(this.props.user)[0]) !== this.props.song.owner_id ){
        //         this.props.fetchTrack(this.props.match.params.trackId)
        //         debugger 
        //             this.props.fetchUser(this.props.song.owner_id)
        //     } 
        //     debugger
        // }
        
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
                            <h1> {this.props.song.title } </h1>
                            <h1> {this.props.user[this.props.song.owner_id].username } </h1>
                        </div>
                        <div className="audio-player-holder" >

                                <audio
                                controls
                                // src={this.props.song.track_url}
                                >
                                    Your browser does not support the
                                </audio>
                        </div>
                    </div>
                    <div className="show-image">
                    <img src={"https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"} />

                            {/* <img src={this.props.song.image_url} />  */}
                    </div>
                
                </div>

           

            </div>
    )
}
}



export default TrackShow