import React from "react";
import {Link} from 'react-router-dom'

const DiscoverPageItem = (props) => {

    return(
            <div className="discover-page-item">
            <h1> {props.track.title} </h1>  
                <h1> {props.track.owner_id} </h1> 
                <img src={props.track.image_url} /> 
                <audio
                    controls
                    src={props.track.track_url}>
                        Your browser does not support the
                            {/* <code>audio</code> element. */}
                        </audio>
                        <Link to={`/tracks/${props.track.id}`}>Track show page</Link>
            </div>
    )
}

export default DiscoverPageItem