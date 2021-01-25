import React from 'react'


class DiscoverPage extends React.Component {

    constructor(props) {
        debugger
        super(props)
        // this.tracks = null;
    }

    componentWillMount(){
        this.props.fetchTracks()
        debugger
    }

    
    render(){
        let tracks = this.props.tracks.map(track => (
            <div>
                <h1> {track.title} </h1>  
                <h1> {track.owner_id} </h1> 
                <img src={track.image_url} /> 

            </div>
        ))
        debugger
        return (
            <div  className="discoverpage" >
            <h1>Discover here</h1>
            <h1>Here:
                
                </h1>
                {tracks}
            </div>
            )
        }
}


export default DiscoverPage