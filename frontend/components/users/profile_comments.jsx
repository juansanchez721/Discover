import React from 'react' 
import { NavLink, Switch } from 'react-router-dom'
import ProfileCommentItem from './profile_comments_item'
import LikesContainer from '../../components/users/likes_container'
import FollowersContainer from '../../components/users/followers_container'
import ProfileCommentsContainer from '../../components/users/profile_comments_container'
import { AuthRoute, ProtectedRoute } from '../../util/route_util';


class ProfileComments extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            currentUserBool: this.props.match.params.userId === this.props.currentUser.id
        }
    }

    componentDidMount(){
    this.props.fetchUserComments(this.props.match.params.userId)

    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (parseInt(prevProps.match.params.userId) !== this.props.user.id) {
    //         this.props.fetchUserComments(this.props.match.params.userId)
    //     }
    //   }
    
    
    render(){
        let content = null

    //     if(Object.values(this.props.comments).length === 0) content = <div className="empty-message">
    //     you don't have any comments yet.
    //   </div>

        let userId = this.props.match.params.userId

        let page = this.props.match.path.split("/")[3]
        const comments = Object.values(this.props.comments).map(comment => {
            return <ProfileCommentItem key={comment.id} comment={comment} />
        })


        switch (page) {
            case "likes":
                content = <LikesContainer userId={userId} />
                break;
        
            case "comments":
                content = comments.length ? comments : <div className="empty-message">
                    <span>
                        <i className="far fa-comment-alt"></i>
                    </span>
                    <p>
                        { this.state.currentUserBool ? "You don't have any " : "No " } comments yet.
                    </p>
              </div>
                break;
            case "followers":
                content = <FollowersContainer page={page} userId={userId} currentUserBool={this.state.currentUserBool} />
                break;
            case "following":
                    content = <FollowersContainer page={page} userId={userId} currentUserBool={this.state.currentUserBool} />
                    break;
            default:
                break;
        }
        let navlinkSelected = { 
            color: "#FE5000",
             borderBottom: "1px solid #FE5000"
        }

        return (
            <div className="profile-comments-page" >
                <div  className="profile-comments-top">
                    <div className="user-items-link" >
                        
                    <NavLink exact to={`/users/${this.props.match.params.userId}/likes`}  
                    className="hover-user-item"
                    activeStyle={navlinkSelected}>
                        Likes
                        </NavLink>
                    
                    
                        <NavLink exact to={`/users/${this.props.match.params.userId}/following`}  
                    className="hover-user-item"
                    activeStyle={navlinkSelected}>
                        Following
                        </NavLink>
                        
                        <NavLink exact to={`/users/${this.props.match.params.userId}/followers`}  
                    className="hover-user-item"
                    activeStyle={navlinkSelected}>
                        Followers
                        </NavLink>

                        <NavLink exact to={`/users/${this.props.match.params.userId}/comments`}  
                    className="hover-user-item"
                    activeStyle={navlinkSelected}>
                        Comments
                        </NavLink>
                    </div>
                </div>
                {/* <Switch>
                    
                <ProtectedRoute exact path="/users/:userId/likes" component={LikesContainer}/>
                <ProtectedRoute exact path="/users/:userId/comments" component={ProfileCommentsContainer}/>
                </Switch> */}

            {content}
        </div>
    )
}
}


export default ProfileComments