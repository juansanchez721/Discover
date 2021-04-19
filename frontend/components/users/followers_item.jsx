import React from 'react'
import {Link} from 'react-router-dom'
const FollowersItem = ({ follower, followed, followUser, unfollowUser, currentUserFollow, currentUserUnfollow, currentUserBool, currentUserId }) => {

    console.log(currentUserId)
    let followButton =  follower.entity_id === currentUserId ? 
    null 
    :
     ( followed ?
    <button 
    className="following-button" 
    onClick={ currentUserBool ?
        ()=> currentUserUnfollow(currentUserId, follower.entity_id)
        :
        ()=>unfollowUser(follower.entity_id)}
    >
        <i className="fas fa-user-check"></i> Following
        </button>
    :
        <button 
        className="follow-button" 
        onClick={ currentUserBool ? 
            // () =>alert(currentUserId + " " + follower.entity_id) 
            () => currentUserFollow(currentUserId, follower.entity_id)
            : 
            () => followUser(follower.entity_id) }
        >
            <i className="fas fa-user-plus"></i> Follow
        </button>

    )

    return(
        <div className="followers-item">
            <Link to={`/users/${follower.entity_id}`} >
            <div className="follows-circle-maker" >


            <img
                // className="profile-default"
                src={ follower.image_url || "https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"}
                />
            </div>
            </Link>
              <div className={"bottom-followers-item"}>
            <Link to={`/users/${follower.entity_id}`} >
                {follower.entity}
        </Link>
                {followButton}    
                    {/* { followed ? "following" : "not following" } */}
              </div>

        </div>
    )

}

export default FollowersItem