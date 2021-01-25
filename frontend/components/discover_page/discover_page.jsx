import React from 'react'


class DiscoverPage extends React.Component {

    constructor(props) {
        debugger
        super(props)
    }

    
    render(){
        let tracks = this.props.tracks

        return (
            <div  className="discoverpage" >
            <h1>Discover here</h1>
                {tracks}
            </div>
            )
        }
}


export default DiscoverPage