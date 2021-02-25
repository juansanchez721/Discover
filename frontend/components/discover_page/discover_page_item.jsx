import React from "react";
import {Link} from 'react-router-dom'


const DiscoverPageItem = (props) => {
    debugger
    // console.log(props.owner.username)

    if(props.owner === undefined){
        return null;
    }

    return(
            <div className="discover-page-item" >

             
                        <Link  className="text-link" to={`/tracks/${props.track.id}`}>
                        {/* <img src={props.track.image_url} />  */}
                        <img src={"https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"} />
                        <div className="album-shadow" >

                        </div>

                        <h1 className="song-truncate"> {props.track.title} </h1>  
                        </Link>
            
                        {/* <div className="song-info"> */}
                        <h1 className="small-light-words"> {props.owner.username || 'artist here' } </h1>

                        {/* </div> */}
                        
                        </div>
            
    )
}

export default DiscoverPageItem