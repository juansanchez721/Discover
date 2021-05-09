import React from "react";

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

    let searchDD = this.state.search ?
    <div className="search-drop-down">

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
