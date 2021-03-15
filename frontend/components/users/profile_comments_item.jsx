import React from 'react'
import Time from '../time/time'

const ProfileCommentItem = ({comment}) => {
    return (
        <div className="profile-comments-item">
            <div>

            <p> on  <span className="small-light-words" >{comment.track}</span> </p>
            <p className="comment-body" >"{comment.body}"</p>
            </div>
            
            <Time time={comment.created_at} />
        </div>
    )
}


export default ProfileCommentItem