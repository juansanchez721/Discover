import React from 'react'

const ProfileCommentItem = ({comment}) => {
    return (
        <div>
            <h1>{comment.body}</h1>
        </div>
    )
}


export default ProfileCommentItem