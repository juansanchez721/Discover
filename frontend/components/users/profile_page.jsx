

import React from 'react'

class ProfilePage extends React.Component {

    constructor(props){
        super(props)
        debugger
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        debugger
    }

    render() {
        debugger

        if(this.props.user === undefined){
            return null
        }
        return(

            <div className="profile-page">
                <div className ="info-holder">
                    <div className="image-container">
                        
                        <div className="circle-holder">
                        <img className="profile-default" src={this.props.user.image_url}/>
                        </div>
                    
                    </div>
                        <div className="user-info">
                            <div className="text">
                            <h1>{this.props.user.username}</h1>

                            </div>
                        </div>
                        {/* <h1>This is the user page</h1> */}
                
                </div>

            </div>
        )
    }


}


export default ProfilePage