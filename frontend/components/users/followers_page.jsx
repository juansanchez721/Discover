import React from 'react'
import FollowersItem from './followers_item'
class FollowersPage extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            loaded: true
        }
    }

    componentDidMount(){
        this.props.fetchUserFollows(this.props.userId)
        .then(() => this.setState({ loaded: false}))
    }



    render() {
 
        
        let follows = null;

        if(this.state.loaded) {
            return <div className="loading-page">
          <i className="fas fa-spinner loader"></i>
        </div>
    
        }

        let currentUserBool = parseInt(this.props.userId) === this.props.currentUser.id
        switch (this.props.page) {

            case 'followers':
                if (!this.props.followers) return <div className="empty-message">
                <span>  
                <i className="fas fa-users"></i> 
                </span>
                <p>
                { this.props.currentUserBool ? "No one is following you yet" : "No followers yet" }.
                </p>
              </div>;

                    follows = Object.values(this.props.followers).map(user => {
                    return <FollowersItem 
                    key={user.id}  
                    follower={user} 
                    followed = { currentUserBool ? user.entity_followers.includes(this.props.currentUser.id) :this.props.currentUser.follows.includes(user.entity_id) }
                    followUser={this.props.follow }
                    currentUserFollow={this.props.currentUserFollow}
                    currentUserUnfollow={this.props.currentUserUnFollow}
                    unfollowUser={this.props.unfollow}
                    currentUserBool={currentUserBool }
                    currentUserId = {this.props.currentUser.id}
                    />
                })
                
                break;
            case 'following':
                if (!this.props.follows) return <div className="empty-message">
                <span>  
                <i className="fas fa-users"></i> 
                </span>
                <p>
                You aren't following anyone yet
                </p>
              </div>;

                follows = Object.values(this.props.follows).map(user => {
                    return <FollowersItem 
                    key={user.id}  
                    follower={user} 
                    followed = { currentUserBool ? user.entity_followers.includes(this.props.currentUser.id) :this.props.currentUser.follows.includes(user.entity_id) }
                    followUser={this.props.follow}
                    currentUserFollow={this.props.currentUserFollow}
                    currentUserUnfollow={this.props.currentUserUnFollow}
                    unfollowUser={this.props.unfollow}
                    currentUserBool={ currentUserBool}
                    currentUserId = {this.props.currentUser.id}
                    />
                })

            break;
            default:
                break;
        }

        return(
            <div className="followers-page" >
                <div className="followers-inner" >

                {follows}
                </div>
            </div>
        )
    }
}


export default FollowersPage