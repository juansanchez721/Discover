import React from 'react'
import SubCommentItem from './sub_comments'

class SubComments extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            parent_comment_id: this.props.parentId,
            track_id: this.props.trackId,
            commenter_id: this.props.currentUserId,
            body: "",
            createCommentBool: this.props.replyBool
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
        formData.append('comment[parent_comment_id]', this.state.parent_comment_id)
        formData.append('comment[track_id]', this.state.track_id)
        formData.append('comment[commenter_id]', this.state.commenter_id)
        formData.append('comment[body]', this.state.body)

        this.props.createComment(formData)
        .then(this.setState({ body: "" }))

    }



    render() {

        const newSubComment =  this.props.replyBool ?
        <div className="sub-comment-input-holder">
        <img
          // className="profile-default"
          src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"
        />
        <div className="sub-comment-input-box">
          <form onSubmit={this.handleSubmit}>
            <input
              tabIndex="1"
              className="write-a-comment"
              type="text"
              placeholder="reply to this comment"
              value={this.state.body}
              onChange={this.update("body")}
            />
          </form>
        </div>
      </div>
      :
      null

        const { comments, deleteComment, currentUserId } = this.props
        
        if(comments === null) return newSubComment

        // console.log(comments)
 
     let subcomments = Object.values(comments).map(subcomment => {
          return <SubCommentItem key={subcomment.id} 
          comment={subcomment} 
          deleteComment={deleteComment}
          currentUserId={currentUserId} />
        })


        return (
            <div className="subcomments">
                    {subcomments.reverse()}
                    {newSubComment}
               
            </div>

        )
    }


}

export default SubComments