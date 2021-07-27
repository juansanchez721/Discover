import React from "react";
import { Link } from "react-router-dom";
import Time from "../time/time";

const ProfileCommentItem = ({ comment }) => {
  return (
    <div className="profile-comments-item">
      <div className="title-and-date">
        <div className= "comment-track-link" >

        <p> on </p>
        <span className="small-light-words">
          <Link to={`/tracks/${comment.track_id}`}>{" " + comment.track}</Link>
        </span>
        </div>
        {/* </p> */}
        <Time time={comment.created_at} />
      
      </div>
      <p className="comment-body">"{comment.body}"</p>
    </div>
  );
};

export default ProfileCommentItem;
