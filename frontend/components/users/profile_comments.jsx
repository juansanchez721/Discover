import React from 'react' 
import { NavLink, Switch } from 'react-router-dom'
import ProfileCommentItem from './profile_comments_item'
import LikesContainer from '../../components/users/likes_container'
import ProfileCommentsContainer from '../../components/users/profile_comments_container'
import { AuthRoute, ProtectedRoute } from '../../util/route_util';


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
                <div  className="profile-comments-top">
                    <h1>here commente shere</h1>
                <NavLink exact to={`/users/${this.props.match.params.userId}/comments`}  activeStyle={{
                      fontWeight: "bold",
                      color: "#FE5000"
                    }}>Comments</NavLink>
                    <NavLink exact to={`/users/${this.props.match.params.userId}/likes`}  activeStyle={{
                      fontWeight: "bold",
                      color: "#FE5000"
                    }}>likes</NavLink>
                </div>
                {/* <Switch>
                    
                <ProtectedRoute exact path="/users/:userId/likes" component={LikesContainer}/>
                <ProtectedRoute exact path="/users/:userId/comments" component={ProfileCommentsContainer}/>
                </Switch> */}

            {comments}
        </div>
    )
}
}


export default ProfileComments