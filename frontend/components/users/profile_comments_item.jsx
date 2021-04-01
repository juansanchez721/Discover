import React from 'react'
import {Link} from 'react-router-dom'
import Time from '../time/time'

const ProfileCommentItem = ({comment}) => {
    return (
        <div className="profile-comments-item">
            <div>

            <p> on  
                <span className="small-light-words" >
                <Link to={`/tracks/${comment.track_id}`} >
                    {" " + comment.track}
                </Link>
                    </span> 
                </p>
            <p className="comment-body" >"{comment.body}"</p>
            </div>
            
            <Time time={comment.created_at} />
        </div>
    )
}


export default ProfileCommentItem