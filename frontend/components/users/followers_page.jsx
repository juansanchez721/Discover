import React from 'react'
import FollowersItem from './followers_item'
class FollowersPage extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchUserFollows(this.props.userId)
    }



    render() {
        // console.log(parseInt(this.props.userId))
        // console.log(this.props.currentUser.id === parseInt(this.props.userId) )

        let follows = null;

        switch (this.props.page) {
            case 'followers':
                if (!this.props.followers) return null;

                    follows = Object.values(this.props.followers).map(user => {
                    return <FollowersItem 
                    key={user.id}  
                    follower={user} 
                    followed = {this.props.currentUser.follows.includes(user.entity_id) || user.entity_followers.includes(this.props.currentUser.id)}
                    followUser={this.props.follow }
                    currentUserFollow={this.props.currentUserFollow}
                    unfollowUser={this.props.unfollow}
                    currentUserBool={ parseInt(this.props.userId) === this.props.currentUser.id}
                    currentUserId = {this.props.currentUser.id}
                    />
                })
                
                break;
            case 'following':
                if (!this.props.follows) return null;

                follows = Object.values(this.props.follows).map(user => {
                    return <FollowersItem 
                    key={user.id}  
                    follower={user} 
                    followed = {this.props.currentUser.follows.includes(user.entity_id) || user.entity_followers.includes(this.props.currentUser.id)}
                    followUser={this.props.follow}
                    currentUserFollow={this.props.currentUserFollow}
                    unfollowUser={this.props.unfollow}
                    currentUserBool={ parseInt(this.props.userId) === this.props.currentUser.id}
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