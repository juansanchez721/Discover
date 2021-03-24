import React from 'react'

const FollowersItem = ({ follower, followed, followUser, unfollowUser, currentUserFollow, currentUserUnfollow, currentUserBool, currentUserId }) => {

    let followButton = ( followed ?
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
            <img
                className="profile-default"
                src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"
              />
              <div className={"bottom-followers-item"}>
                {follower.entity + " " + follower.entity_id}
                {followButton}    
                    {/* { followed ? "following" : "not following" } */}
              </div>

        </div>
    )

}

export default FollowersItem