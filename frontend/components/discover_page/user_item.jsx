import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = (props) => {
    return (

        <div className="user-link">
            <Link className="link" to={`/users/${props.user.id}`}>

            <div className="icon-container">
                        
                        <div className="circle-maker">
                        <img className="profile-default" src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"/>

                        {/* <img className="profile-default" src={props.user.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/> */}
                        </div>
                    <div className="icon-info">
                        <p>{props.user.username}</p>
                        <span><i className="fas fa-sliders-h"></i> {props.user.track_count}</span>
                    </div>
                    </div>

            </Link>
        </div>
    )
}




export default UserItem