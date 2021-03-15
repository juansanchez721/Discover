import React from 'react' 
import ProfileCommentItem from './profile_comments_item'



class ProfileComments extends React.Component {
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
    this.props.fetchUserComments(this.props.match.params.userId)

    }
    
    render(){

        const comments = Object.values(this.props.comments).map(comment => {
            return <ProfileCommentItem comment={comment} />
        })


        return (
            <div className="profile-comments-page" >
            <h1>here commente shere</h1>
            {comments}
        </div>
    )
}
}


export default ProfileComments