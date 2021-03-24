import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user, followingBool, follow, unfollow}) => {

    let followButton = followingBool ? (
        <button
          className="following-button"
          onClick={() => unfollow(user.id)}
        >
          <i className="fas fa-user-check"></i> Following
        </button>
      ) : (
        <button
          className="follow-button"
          onClick={() => follow(user.id)}
        >
          <i className="fas fa-user-plus"></i> Follow
        </button>
      );

    return (

        <div className="user-link">
            <Link className="link" to={`/users/${user.id}`}>

            <div className="icon-container">
                        
                        <div className="circle-maker">
                        <img className="profile-default" src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"/>

                        {/* <img className="profile-default" src={props.user.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/> */}
                        </div>
                    <div className="icon-info">
                        <p>{user.username}</p>
                        <span><i className="fas fa-sliders-h"></i> {user.track_count}
                        </span>
                    </div>
                    </div>

            </Link>
            <div className="user-link-button" >

                            {followButton}
            </div>
        </div>
    )
}




export default UserItem