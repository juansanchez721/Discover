import React from 'react'
import { Link } from "react-router-dom";

import Time from '../time/time'
import SubComments from './subcomments-holder'
class CommentItem extends React.Component {
  
  
  constructor(props){
    super(props)

    this.state = {
      replyBool:false
    }

  }

  render(){

    
    const { comment, currentUserId, deleteComment, createComment, trackId, subcomments } = this.props
    
    // console.log(subcomments)
    const displayName =  (
      comment.commenter_id === currentUserId ? "You" : comment.username
      )
      
      const deleteButton =  (
        comment.commenter_id === currentUserId ? <button className="delete-comment-btn" onClick={() => deleteComment(comment.id)} ><i className="fas fa-trash"></i></button> : null
        )
        
        const replyButton = 
        <button className="reply-comment-btn" 
        onClick={()=> this.setState({ replyBool: !this.state.replyBool }) } >
        <i className="fas fa-reply"></i>
          </button>
        
        
        return (
          <div className="comment-item">
        <div className="main-comment-content">

        <div className="comment-circle-maker">
          {/* <img
            // className="profile-default"
            src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"
          /> */}
                        <Link to={`/users/${comment.commenter_id}`} >

          <img className="profile-default" src={comment.image_url || "https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"}/>
                        </Link>
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
          {replyButton}
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
        replyBool={this.state.replyBool}
        />}
      </div>
    );
  }
  
}
  
  export default CommentItem