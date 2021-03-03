import React from 'react'
import PlayButton from '../play_button/play_button'
import Time from '../time/time'

class DeleteTrack extends React.Component {


    constructor(props) {
        debugger
        super(props)
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.deleteTrack(this.props.track.id)
        .then(this.props.closeModal())
    }


    render(){
        debugger

        const { track, user } = this.props
        
        return (
          <div className="delete-track-container">
            <div className="top-delete">
              <img
                src={
                  "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"
                }
              />
              <div className="top-delete-info">
                  {/* <div className="top-delete-top"> */}
                    <div className="top-delete-circle">
                      <PlayButton track={track} user={user} />
                    </div>
                    <div className="top-delete-text">
                      <div className="song-info-time">
                      <h2 className="small-light-words"> {user.username} </h2>
                      <Time time={track.created_at} />
                      </div>
                      <h1 className=""> {track.title} </h1>
                    </div>
                  {/* </div> */}
              </div>
            </div>
            <div className="center-div"></div>
            <div className="bottom-delete">
              <h1> Permanently delete this track? </h1>
              <button onClick={() => this.handleClick()}>Delete song</button>
            </div>
          </div>
        );
    }



}


export default DeleteTrack