import React from 'react'
import DiscoverPageItem from './discover_page_item'

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
                    <DiscoverPageItem key={track.id} track={track}/> 

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