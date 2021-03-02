import React from 'react'

const CommentItem = ({ comment }) => {
    return (
      <div className="comment-item">
        <div className="comment-circle-maker">
          <img
            className="profile-default"
            src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"
          />

          {/* <img className="profile-default" src={props.user.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/> */}
        </div>
        <div className="comment-item-info">
            <div className="username-date-posted">
            <p>{comment.username}</p>
            <p>{comment.created_at}</p>
            </div>
          <p> {comment.body} </p>
        </div>
      </div>
    );
}


export default CommentItem