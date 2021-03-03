import React from 'react'


class Time extends React.Component {
    constructor(props){
        super(props)
    
    }

    handleTime() {
        let _initial = this.props.time;
        let fromTime = new Date(_initial);
        let toTime = new Date();

        let differenceTravel = toTime.getTime() - fromTime.getTime();
        let seconds = Math.floor(differenceTravel / 1000);
        // return ((seconds/60)/60)/24
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        if (minutes < 60){
          return Math.floor(minutes) + " minutes ago"
        }
        if( hours >= 1 && hours < 24 ){
          return Math.floor(hours) + " hours ago"
        }
        if (days <= 31){
            return Math.floor(days) + " days ago"
        } else {
            return Math.floor(days/12) + " months ago"
        }

    }

    
    
    render(){

        return (
            <p className="small-light-words" > {this.handleTime() || 'time'}</p>        
            )
    }
}


export default Time