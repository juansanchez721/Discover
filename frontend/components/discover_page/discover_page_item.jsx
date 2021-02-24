import React from "react";
import {Link} from 'react-router-dom'


const DiscoverPageItem = (props) => {
    debugger
    // console.log(props.owner.username)
    return(
            <div className="discover-page-item" >

             
                        <Link to={`/tracks/${props.track.id}`}>

                        <img src={props.track.image_url} /> 

                        </Link>
            
                        <h1> {props.track.title} </h1>  
                        <h1> {props.owner.username || 'artist here' } </h1>
                        
                        </div>
            
    )
}

export default DiscoverPageItem