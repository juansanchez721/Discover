import React from 'react'


class DeleteTrack extends React.Component {


    constructor(props) {
        debugger
        super(props)
    }


    render(){
        debugger
        return (
            <div>
                <h1> Delete track:</h1> 
                {Object.values(this.props.tracks).map(track => {
                             return <p> {track.title} </p>
                })} 
            </div>
        )
    }



}


export default DeleteTrack