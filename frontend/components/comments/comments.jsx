import React from "react";
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
        
        const { comments, artist } = this.props
        console.log(artist);
        let songComments = Object.values(comments).map((comment) => {
            return <CommentItem key={comment.id}
            comment={comment} 
            currentUserId ={this.state.commenter_id} 
            deleteComment = {this.props.deleteComment}
            createComment = {this.props.createComment}
            trackId={this.state.track_id}
            />;
          });
        
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

              <div className="comments-other">
                <div className="avatar-user-info">
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
                <div className="comments-section">
                  <div className="comment-count">
                  <i className="fas fa-comment-alt"></i> 
                    <p>
                    {songComments.length === 1? "1 comment" : songComments.length + " comments"}
                    </p>
                  </div>
                  {songComments}
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
