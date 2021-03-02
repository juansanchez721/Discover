import React from 'react'
import CommentItem from './comments_item'

const Comments = ({ comments, artist }) => {
console.log(artist)
    let songComments = Object.values(comments).map(comment => {
            return <CommentItem key={comment.id} comment = {comment} />
    })

    return (
      <div className="comments-container">
        <div className="comments-left">
          <div className="track-show-circle-maker">
            <img
              className="profile-default"
              src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"
            />

            {/* <img className="profile-default" src={props.user.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/> */}
          </div>
          <div className="artist-info">
            <p>{artist.username || "artist here"}</p>
          </div>
        </div>
        <div className="comments-mid">{songComments}</div>
        <div className="comments-right"></div>
      </div>
    );
}

export default Comments