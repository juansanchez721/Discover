import React from 'react'


class UpdateTrack extends React.Component {



    constructor(props){
        super(props)
        this.state = {
            track: this.props.track.track_url,
            imageUrl: this.props.track.image_url,
            imageFile: null,
            title: this.props.track.title,
            description: this.props.track.description,
            genre: this.props.track.genre,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.previewFile = this.previewFile.bind(this)
    }

    // componentDidMount(){
    //     this.props.fetchTrack(this.props.trackId)
    // }

    // componentDidUpdate(prevProps, prevState){
    //   if(prevState.title === ""){
    //     // this.props.fetchTrack(this.props.trackId)
    //     this.setState({
    //       imageUrl: this.props.track.imageUrl,
    //         imageFile: null,
    //         title: this.props.track.title,
    //         description: this.props.track.description,
    //         genre: this.props.track.genre,
    //     })
    //   }
    // }

    previewFile(e){
      e.preventDefault();
      const file = e.target.files[0]
      if(file){
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onloadend = () => {
              this.setState({ imageFile: file, imageUrl: fileReader.result })
          }
      }
  }

    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('track[title]', this.state.title)
        formData.append('track[genre]', this.state.genre)
        formData.append('track[description]', this.state.description)
        // formData.append('track[owner_id]', this.state.owner_id)
        // formData.append('track[track]', this.state.track)
        if (this.state.imageFile){
            formData.append('track[photo]', this.state.imageFile)
        }
        this.props.updateTrack( formData, this.props.track.id)
        .then(this.props.closeModal())

    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }



    render() {

        let preview;
        let inp;
        if(this.state.imageUrl){
            preview = <img src={this.state.imageUrl} alt="Image preview..."/>
            inp = <input className="replace-img" type="file" onChange={this.previewFile}/>

        } else {
            preview = <img src={this.state.imageUrl} alt="Image preview..."/>;
            inp = <input type="file" onChange={this.previewFile}/>

        } 

        return(
            <div className="track-update-container">
            
            <div className="second-inner-form">
                  <div className="image-half">
                    {preview}
                    {/* <br/> */}
                    <div className="img-upload-holder">
                      <h1>Upload image</h1>
                      {inp}
                    </div>
                  </div>
                  <div className="additional-info">
                    <label>Title:</label>
                    <input
                      type="text"
                      value={this.state.title}
                      onChange={this.update("title")}
                      required
                    />
                    <br />

                    <label>Genre</label>

                    <select name="genre" onChange={this.update("genre")}>
                      <option value="Hip-Hop">Hip-Hop</option>
                      <option value="Metal">Metal</option>
                      <option value="RandB">RB</option>
                      <option value="Spanish">Spanish</option>
                    </select>

                    {/* <input
                      type="text"
                      value={this.state.genre}
                      onChange={this.update("genre")}
                    /> */}
                    <br />

                    <label>Description</label>
                    <textarea
                      value={this.state.description}
                      onChange={this.update("description")}
                    />

                    <div className="upload-track-button">
                    <button onClick={this.handleSubmit}>Save changes</button>

                    </div>
                  </div>
                </div>
            
            </div>
        )
    }
}

export default UpdateTrack