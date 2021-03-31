import React from "react";
import {Link} from 'react-router-dom'

import { deleteComment } from "../../actions/comment_actions";
import { createComment } from "../../util/comment_api_util";
import CommentItem from "./comments_item";


class Comments extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            track_id: this.props.trackId,
            commenter_id: this.props.currentUser.id,
            body: ""
        }
        // console.log(this.state)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLike = this.handleLike.bind(this)
    }

    handleLike() {
      // .then(() => this.setState({ button: <button onClick={() => alert('liked already')} > LIKED</button> }))
      if (this.props.liked) {
        // alert('delete like')
        this.props.deleteLike(this.props.trackId);
  
        //  this.setState({ button: <button onClick={() => alert('liked already')} > LIKED</button> })
      } else {
        // alert('add like')
        this.props.createLike(this.props.trackId);
        //  this.setState({ button: <button onClick={() => this.likeTrack()} > {'<3'} {this.props.track.like_count} </button> })
      }
    }
    
    update(field) {
        return e => this.setState({ 
            [field]: e.target.value 
        })
    }

    handleSubmit(){

        const formData = new FormData();
        // formData.append('comment[parent_comment_id]', 42)
        formData.append('comment[track_id]', this.state.track_id)
        formData.append('comment[commenter_id]', this.state.commenter_id)
        formData.append('comment[body]', this.state.body)

        this.props.createComment(formData)
        .then(this.setState({ body: "" }))

    }
    
    render(){
        
        const { comments, artist, currentUser, trackId, liked, likeCount } = this.props
        // console.log(artist);
        let pComments = Object.values(comments).filter(comment => !comment['parent_comment_id'])
        // let cComments = Object.values(comments).filter(comment => comment['parent_comment_id']) 
        let commentCount = Object.keys(comments).length
        // console.log(pComments)
        // console.log(cComments)
        let parentComments = pComments.map((comment) => {
            return <CommentItem key={comment.id}
            comment={comment} 
            subcomments={Object.values(comments).filter(subcomment => subcomment[`parent_comment_id`] === comment.id )}
            currentUserId ={this.state.commenter_id} 
            deleteComment = {this.props.deleteComment}
            createComment = {this.props.createComment}
            trackId={this.state.track_id}
            />;
          });

          let followButton = this.props.currentUser.follows.includes(artist.id) ? (
            <button
              className="following-button"
              onClick={() => this.props.unfollow(artist.id)}
            >
              <i className="fas fa-user-check"></i> Following
            </button>
          ) : (
            <button
              className="orange-follow"
              onClick={() => this.props.follow(artist.id)}
            >
              <i className="fas fa-user-plus"></i> Follow
            </button>
          );

          // let liked = currentUser.track_likes.includes(trackId)
          
        
        return (
          <div className="comments-container">
            <div className="comments-left">
              <div className="comment-input-holder">
                <img
                  // className="profile-default"
                  src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"
                />
                <div className="input-box">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      tabIndex="1"
                      className="write-a-comment"
                      type="text"
                      placeholder="Write a comment"
                      value={this.state.body}
                      onChange={this.update("body")}
                    />
                  </form>
                </div>
              </div>
              <div className="track-buttons-container" >
              <button
          className={liked ? "liked-button" : "track-buttons"}
          onClick={this.handleLike}
        >
          <i className="fas fa-heart"></i>{" "}
          {liked ? "Liked" : "Like"}
        </button>
        <h1> <i className="fas fa-heart"></i> {likeCount} </h1>
              </div>
              <div className="comments-other">
                <div className="avatar-user-info">
                <Link to={`/users/${artist.id}`} >

                  <div className="track-show-circle-maker">

                    <img src={artist.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/>
                  </div>

                  <div className="artist-info">
                    <p>{artist.username || "artist here"}</p>
                  </div>
                </Link>
                        <span className="user-stats">
                        
                        <p>
                            <i className="fas fa-user-friends"></i> {artist.followers_count}
                            </p> 
                            <p>
                                <i className="fas fa-sliders-h"></i> {artist.track_count}
                                </p>
                        
                        </span>
                  {followButton}
                </div>
                <div className="comments-section">
                  <div className="comment-count">
                  <i className="fas fa-comment-alt"></i> 
                    <p>
                    {commentCount === 1? "1 comment" : commentCount + " comments"}
                    </p>
                  </div>
                  {parentComments.reverse()}
                </div>
              </div>
            </div>
            {/* <div className="comments-mid"> */}
            {/* </div> */}
            {/* <div className="comments-right"></div> */}
          </div>
        );
};
}

export default Comments;
