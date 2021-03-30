import React from "react";
import {Link} from 'react-router-dom'
import PlayButton from '../play_button/play_button'

class DiscoverPageItem extends React.Component{


// const DiscoverPageItem = (props) => {
        constructor(props){
            super(props)

            this.handleLike = this.handleLike.bind(this)
        }
    // console.log(props.owner.username)

    // if(props.owner === undefined){
    //     return null;
    // }   
    // console.log(props)
    handleLike() {
        // .then(() => this.setState({ button: <button onClick={() => alert('liked already')} > LIKED</button> }))
        if (this.props.liked) {
          // alert('delete like')
          this.props.deleteLike(this.props.track.id);
    
          //  this.setState({ button: <button onClick={() => alert('liked already')} > LIKED</button> })
        } else {
          // alert('add like')
          this.props.createLike(this.props.track.id);
          //  this.setState({ button: <button onClick={() => this.likeTrack()} > {'<3'} {this.props.track.like_count} </button> })
        }
      }

    render(){

        const { track, liked } = this.props
        return (
          <div className="discover-page-item">
            <Link className="text-link" to={`/tracks/${track.id}`}>
              
              <img src={track.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"} /> 
              {/* <img
                src={
                  "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"
                }
              /> */}
              <div className="album-shadow"></div>

            </Link>
            <div className="album-shadow-circle">
              <PlayButton track={track} />
            </div>
            <div className="index-options" >
              <span
                className={liked ? "liked-heart" : ""}
                
                >
                <i onClick={this.handleLike} className="fas fa-heart"></i>
              </span>

            </div>

            <div className="song-info">
              <div className="yoyo">
                <h1 className="song-truncate" >
                {track.title}

                </h1>
              </div>
            <h1 className="small-light-words">
              {track.artist || "artist here"}
            </h1>

            </div>
          </div>
        );
        }
        }
        
        export default DiscoverPageItem