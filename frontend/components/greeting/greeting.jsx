import React from 'react'

class Greeting extends React.Component{

    constructor(props){
        super(props)

    }

    render() {
        debugger
        return (
            <div>
                {this.props.currentUser ? <h1> Welcome to Discover {this.props.currentUser.username} </h1> : <p>No user found</p>} 

            </div>
        )
    }

}

export default Greeting