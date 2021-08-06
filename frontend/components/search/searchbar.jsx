import React from "react";
import { Link } from "react-router-dom"
import { debounce } from 'lodash'
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchDD: false,
    };

    this.search = debounce(this.search.bind(this), 300);
    this.update = this.update.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleSelectionClick = this.handleSelectionClick.bind(this)
  }

  handleSelectionClick(){
    this.setState({ searchDD: false })
    this.setState({ search: ""})

    this.props.removeSearchResults()
    let searchBox = document.getElementById("minisearch")
    searchBox.blur()
  }

  handleDropDown() {
    this.state.handleDropDown
      ? this.setState({ searchDD: false })
      : this.setState({ searchDD: true });


  }

  update(e) {
    // debugger
    if (!this.state.searchDD) this.setState({ searchDD: true });

    this.setState({
      search: e.target.value,
    });

    // debugger
    // debounce(() => {
      this.search();
    // }, 1000);
  }

  search() {
    // debugger
    this.props.fetchSearchResults(this.state.search);
    // .then(() => console.log(this.props.searchResults))
  }

  render() {
    if (this.props.currentUser) {
      // console.log(this.state.search)
      const { searchResults } = this.props;

      let trackResults = null;
      let artistResults = null;

      if ("tracks" in searchResults) {
        trackResults = Object.values(searchResults.tracks).map((track) => {
          return (
            <Link
              key={track.id}
              onClick={() => this.hideDropDown()}
              to={`/tracks/${track.id}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => this.handleSelectionClick()}
            >
              <div className="search-result">
                <p>{track.title}</p> <i className="fas fa-sliders-h"></i>
              </div>
            </Link>
          );
        });
      }
      if ("artists" in searchResults) {
        artistResults = Object.values(searchResults.artists).map((artist) => {
          return (
            <Link
              key={artist.id}
              to={`/users/${artist.id}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => this.handleSelectionClick()}
            >
              <div className="search-result">
                <p>{artist.username}</p> <i className="fas fa-user"></i>
              </div>
            </Link>
          );
        });
      }

      let nothingMessage =
        Object.keys(searchResults).length === 0 ? (
          <div className="search-result">
            <p>
              {this.state.search
                ? `No results for "${this.state.search}"`
                : "Start typing to Discover"}
            </p>
          </div>
        ) : null;

      let searchDD = this.state.searchDD ? (
        <div className="search-drop-down">
          {trackResults}
          {artistResults}
          {nothingMessage}
        </div>
      ) : null;

      return (
        <div className="nav-search">
          <input
          type="search"
          autoComplete="off"
          id="minisearch"
            className="minisearch"
            value={this.state.search}
            onChange={this.update}
            onClick={() => this.handleDropDown()}
            onBlur={() => this.setState({ searchDD: false })}
            placeholder="Search"
          />
          <span className="search-icon">
            <i className="fas fa-search"></i>
          </span>
          {searchDD}
        </div>
      );
    } else {
      return (
        <div className="searchbar-container">
          <div className="innersearchcontainer">
            <div className="search-first">
              <input
                className="search-bar"
                placeholder="search artist or song"
              />
            </div>
            <div className="or-upload">
              <p>or</p>
              <button
                className="orangebutton"
                onClick={() => this.props.props.openModal("signup")}
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
}

export default SearchBar;
