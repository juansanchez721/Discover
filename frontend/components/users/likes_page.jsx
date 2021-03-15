import React from 'react'
import DiscoverPageItem from '../discover_page/discover_page_item'

class LikesPage extends React.Component { 
// const LikesPage = (props) => {

    constructor(props){
        super(props)
        this.state = {
            loaded: true
        }
    }

    // console.log(props.tracks)
    
    componentDidMount() {
 
        this.props.fetchTrackLikes(this.props.match.params.userId)
        .then(() => this.setState({ loaded: false }) ) 
    }

    render() {

        const {likedTracks} = this.props 
        if(this.state.loaded) return null;
        
        let likeTracks = Object.values(likedTracks).map(track => (
            <DiscoverPageItem
             key={track.id} 
             track={track}
             liked={track.likers.includes(this.props.currentUser.id)}
             createLike={this.props.createLike}
            deleteLike={this.props.deleteLike}
             /> 
            
            ))
            
            return (
                <div className="likes-container" >
                    <div className='likes-header'>

                    <h1 >
                        hear the tracks you've liked:
                    </h1>
                    </div>
            <div className="likes-inner" >
            {likeTracks}
            </div>
        </div>
    )
}
}


export default LikesPage