import React from 'react'
import Time from '../time/time'
import SubComments from './subcomments-holder'
const CommentItem = ({ comment, currentUserId, deleteComment, createComment, trackId, subcomments }) => {

      // console.log(subcomments)
      const displayName =  (
        comment.commenter_id === currentUserId ? "You" : comment.username
      )

      const deleteButton =  (
        comment.commenter_id === currentUserId ? <button className="track-buttons delete-comment-btn" onClick={() => deleteComment(comment.id)} ><i className="fas fa-trash"></i></button> : null
      )


    return (
      <div className="comment-item">
        <div className="main-comment-content">

        <div className="comment-circle-maker">
          {/* <img
            // className="profile-default"
            src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"
            /> */}

          <img className="profile-default" src={comment.image_url || "https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"}/>
        </div>
        <div className="comment-item-info">
            <div className="username-date-posted">
            <p>{displayName}</p>
            <Time time={comment.created_at}/>
            </div>
            <div className="body-delete">

          <p> {comment.body} </p>
            {deleteButton}
            </div>
        </div>
        </div>
        {<SubComments currentUserId={currentUserId} 
        parentId={comment.id} 
        comments={subcomments || null}
        createComment={createComment}
        trackId={trackId}
        deleteComment={deleteComment}
        />}
      </div>
    );
}


export default CommentItem