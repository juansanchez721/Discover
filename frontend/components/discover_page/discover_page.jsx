import React from 'react'
import DiscoverPageItem from './discover_page_item'
import UserItem from './user_item'
class DiscoverPage extends React.Component {

    constructor(props) {
        debugger
        super(props)
        // this.tracks = null;
    }

    componentDidMount(){
        this.props.fetchUsers()
        .then(this.props.fetchTracks());
        debugger
    }

    
    render(){

        

        debugger
        let tracksfirst = this.props.tracks.map(track => (
            <DiscoverPageItem owner={this.props.users[track.owner_id]} key={track.id} track={track}/> 

        ))

        // this.props.tracks.sort(() => Math.random() - 0.5)

        // let trackssecond = this.props.tracks.map(track => (
        //     <DiscoverPageItem owner={this.props.users[track.owner_id]} key={track.id} track={track}/> 
        // ))

        // this.props.tracks.sort(() => Math.random() - 0.5)

        // let tracksthird = this.props.tracks.map(track => (
        //     <DiscoverPageItem owner={this.props.users[track.owner_id]} key={track.id} track={track}/> 
        // ))

        // this.props.tracks.sort(() => Math.random() - 0.5)

        // let tracksfourth = this.props.tracks.map(track => (
        //     <DiscoverPageItem owner={this.props.users[track.owner_id]} key={track.id} track={track}/> 
        // ))



        // console.log(Object.values(this.props.users))
        let userLinks = Object.values(this.props.users).map((user, i) => {
            if( i < 6 ) return <UserItem key={user.id} user={user}/> 
    })

        debugger
        return (
          <div className="discoverpage">
            {/* <h1>Discover here</h1>
            <h1>Here:</h1> */}
            <div className="discover-page-holder">
              <div className="rows-of-music">
                <div className="inner-rom">
                    <div className="discover-titles">
                            <h2 className="discover-page-headers">More of what you like</h2>
                            <p className="small-light-words"> Some holder words that go here </p>

                    </div>
                  <div className="showing-songs">
                    <div className="inner-showing">{tracksfirst}</div>
                  </div>
                  {/* <hr> */}
                  <br />
                  <br />


                  <div className="discover-titles">
                            <h2 className="discover-page-headers">Your History</h2>
                            <p className="small-light-words"> Some holder words that go here </p>
                    </div>
                  <div className="showing-songs">
                    {/* <div className="inner-showing">{trackssecond}</div> */}
                  </div>
                  <br />
                  <br />

                  <div className="discover-titles">
                            <h2 className="discover-page-headers">Recommended</h2>
                            <p className="small-light-words"> Some holder words that go here </p>

                    </div>
                  <div className="showing-songs">
                    {/* <div className="inner-showing">{tracksthird}</div> */}
                  </div>
                  <br />
                  <br />

                  <div className="discover-titles">
                            <h2 className="discover-page-headers">Try something newr</h2>
                            <p className="small-light-words"> Some holder words that go here </p>

                    </div>
                  <div className="showing-songs">
                    {/* <div className="inner-showing">{tracksfourth}</div> */}
                  </div>
                </div>
              </div>

              <div className="right-side-bar">
                <div className="user-links">
                  <h1 className="links-header"> Who to follow</h1>
                  {userLinks}
                </div>
              </div>
            </div>
          </div>
        );
        }
}


export default DiscoverPage