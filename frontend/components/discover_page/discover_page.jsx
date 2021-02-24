import React from 'react'
import DiscoverPageItem from './discover_page_item'
import UserItem from './user_item'
class DiscoverPage extends React.Component {

    constructor(props) {
        debugger
        super(props)
        // this.tracks = null;
    }

    componentWillMount(){
        this.props.fetchTracks();
        this.props.fetchUsers();
        debugger
    }

    
    render(){
        let tracksfirst = this.props.tracks.map(track => (
                    <DiscoverPageItem key={track.id} track={track}/> 

        ))

        this.props.tracks.sort(() => Math.random() - 0.5)

        let trackssecond = this.props.tracks.map(track => (
            <DiscoverPageItem key={track.id} track={track}/> 
        ))

        this.props.tracks.sort(() => Math.random() - 0.5)

        let tracksthird = this.props.tracks.map(track => (
            <DiscoverPageItem key={track.id} track={track}/> 
        ))

        this.props.tracks.sort(() => Math.random() - 0.5)

        let tracksfourth = this.props.tracks.map(track => (
            <DiscoverPageItem key={track.id} track={track}/> 
        ))



        let users = this.props.users.map((user, i) => {
              return <UserItem key={user.id} user={user}/> 
    })

        debugger
        return (
            <div  className="discoverpage" >
            {/* <h1>Discover here</h1>
            <h1>Here:</h1> */}
            <div className="discover-page-holder">

            <div className="rows-of-music"> 
                <div className="inner-rom">
                <h2 className="discover-page-headers" >Most Popular</h2>
                <div className="showing-songs">
                <div className="inner-showing">
                {tracksfirst}
                </div>
                </div>
                <br/>
                <br/>
                
                <h1 className="discover-page-headers" >Your History</h1>
                <div className="showing-songs">
                <div className="inner-showing">
                {trackssecond}
                </div>
                </div>
                <br/>
                <br/>
                
                <h1 className="discover-page-headers" >Recommended</h1>
                <div className="showing-songs">
                <div className="inner-showing">
                {tracksthird}
                </div>
                </div>
                <br/>
                <br/>
                
                <h1 className="discover-page-headers">Try something new</h1>
                <div className="showing-songs">
                <div className="inner-showing">
                {tracksfourth}
                </div>
            </div>
            </div>
                </div>

                <div className="right-side-bar" >
                <div className="user-links" >
                    <h1 className="links-header"> Who to follow</h1>
                    {users}
                </div>
                </div>
             </div>
            </div>
            )
        }
}


export default DiscoverPage