import React from 'react'
import Time from '../time/time'
import { Link } from "react-router-dom";

const SubCommentItem = ({ comment, currentUserId, deleteComment }) => {

    const displayName =  (
      comment.commenter_id === currentUserId ? "You" : comment.username
    )

    const deleteButton =  (
      comment.commenter_id === currentUserId ? <button className="track-buttons delete-comment-btn" onClick={() => deleteComment(comment.id)} ><i className="fas fa-trash"></i></button> : null
    )


  return (
    <div className="sub-comment-item">
      <div className="sub-comment-circle-maker">
      <Link to={`/users/${comment.commenter_id}`}>

        <img
          className="profile-default"
          src= {comment.image_url || "https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"}
          />
          </Link>

        {/* <img className="profile-default" src={props.user.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/> */}
      </div>
      <div className="comment-item-info">
          <div className="username-date-posted">
          <Link to={`/users/${comment.commenter_id}`} >

          <p>{displayName}</p>
          </Link>
          <Time time={comment.created_at}/>
          </div>
          <div className="body-delete">

        <p> {comment.body} </p>
          {deleteButton}
          </div>
      </div>
    </div>
  );
}


export default SubCommentItem