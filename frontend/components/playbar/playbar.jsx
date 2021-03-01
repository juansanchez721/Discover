import React from 'react'


class PlayBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: null
        }
    }

    componentDidUpdate(){
        this.setState({ title: this.props.currentSong.title})
    }



    render(){

        if(this.props.currentSong === undefined) {
            return null
        } else {

            return(
                <div className ="playbar-div">
                    cdv
                <h1>{this.state.title}</h1>

            </div>
        )
    }
    }
}

export default PlayBar