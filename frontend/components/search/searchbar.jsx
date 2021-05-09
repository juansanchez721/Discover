import React from "react";
import { Link } from 'react-router-dom'
class SearchBar extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      search: "",
    }

    this.search = this.search.bind(this)
    this.update = this.update.bind(this)
  }

  update(e){
 
    this.setState({
      search: e.target.value
    })

    setTimeout(() => {
    this.search()
    }
    , 600)

  }

  search(){

        this.props.fetchSearchResults(this.state.search)
        .then(() => console.log(this.props.searchResults))
  }


  render() {

    const { searchResults } = this.props

    let trackResults = null
    let artistResults = null

    
    if("tracks" in searchResults){
      trackResults = Object.values(searchResults.tracks).map(track =>{
        return <Link to={`/tracks/${track.id}`} >
        <div className="search-result">
         <p>{track.title}</p> <i className="fas fa-sliders-h"></i>
        </div>
        </Link> 
      })
    }
    if("artists" in searchResults){
      artistResults = Object.values(searchResults.artists).map(artist =>{
        return <Link to={`/users/${artist.id}`} >
        <div className="search-result">
          <p>{artist.username}</p> <i className="fas fa-user"></i>
        </div>
        </Link>
      })
    }


    let searchDD = this.state.search ?
    <div className="search-drop-down">
      {trackResults}
      {artistResults}
    </div> 
    :
     null

      if (this.props.currentUser) {
        return (
          <div className="nav-search">
        <input className="minisearch" 
        onChange={this.update}
        placeholder="Search" />
        <span className="search-icon">
          <i className="fas fa-search"
          ></i>
        </span>
          {searchDD}
      </div>
    );
  } else {
    return (
      <div className="searchbar-container">
        <div className="innersearchcontainer">
          <div className="search-first">
            <input className="search-bar" placeholder="search artist or song" />
          </div>
          <div className="or-upload">
            <p>or</p>
            <button
              className="orangebutton"
              onClick={() => props.props.openModal("signup")}
              >
              {" "}
              Upload your own
            </button>
          </div>
        </div>
      </div>
    );
  }
}
};

export default SearchBar;
