import React from "react";
import {Link} from 'react-router-dom'
import PlayButton from '../play_button/play_button'

const DiscoverPageItem = (props) => {
    debugger
    // console.log(props.owner.username)

    // if(props.owner === undefined){
    //     return null;
    // }   
    // console.log(props)

    return(
            <div className="discover-page-item" >

             
                        <Link  className="text-link" to={`/tracks/${props.track.id}`}>
                        {/* <img src={props.track.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"} />  */}
                        <img src={"https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"} />
                        <div className="album-shadow" >
                        </div>

                        <h1 className="song-truncate"> {props.track.title} </h1>  
                        </Link>
                            <div className="album-shadow-circle">
                                <PlayButton track={props.track}/>
                            </div>
            
                        {/* <div className="song-info"> */}
                        <h1 className="small-light-words"> {props.track.artist || 'artist here' } </h1>

                        {/* </div> */}
                        
                        </div>
            
    )
}

export default DiscoverPageItem