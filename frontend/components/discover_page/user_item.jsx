import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = (props) => {
    return (

        <div className="user-link">
            <Link className="link" to={`/users/${props.user.id}`}>

            <div className="icon-container">
                        
                        <div className="circle-maker">
                        <img className="profile-default" src={props.user.image_url}/>
                        </div>
                    
            <h1>{props.user.username}</h1>
                    </div>

            </Link>
        </div>
    )
}




export default UserItem