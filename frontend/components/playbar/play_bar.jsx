import React from 'react'


class PlayBar extends React.Component {




    render(){

        return(
            <div className ="playbar-div">
                <audio
                    controls
                    src="">
                        Your browser does not support the
                            {/* <code>audio</code> element. */}
                        </audio>

            </div>
        )
    }
}

export default PlayBar