import React from 'react'
import Time from '../time/time'
import SubCommentItem from './sub_comments'

const CommentItem = ({ comment, currentUserId, deleteComment }) => {

      const displayName =  (
        comment.commenter_id === currentUserId ? "You" : comment.username
      )

      const deleteButton =  (
        comment.commenter_id === currentUserId ? <button className="track-buttons delete-comment-btn" onClick={() => deleteComment(comment.id)} ><i className="fas fa-trash"></i></button> : null
      )

      let subcomments = null

        if(comment.subcomments) {
        subcomments = Object.values(comment.subcomments).map(subcomment => {
            return <SubCommentItem key={subcomment.id} comment={subcomment} />
          })
        }


    return (
      <div className="comment-item">
        <div className="main-comment-content">

        <div className="comment-circle-maker">
          <img
            className="profile-default"
            src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"
            />

          {/* <img className="profile-default" src={props.user.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/> */}
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
        <div className="subcomments">
      {subcomments}
        </div>
      </div>
    );
}


export default CommentItem