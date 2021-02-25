import React from 'react'
import {Link} from 'react-router-dom'

class UploadForm extends React.Component {

    constructor(props){
        super(props)
        debugger
        this.state = {
            songFile: null,
            imageUrl: null,
            imageFile: null,
            title: "",
            description: "",
            genre: "",
            owner_id: this.props.currentUser.id,
            page: 0
        }
        debugger
        this.changePage = this.changePage.bind(this)
        this.updateFile = this.updateFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.previewFile = this.previewFile.bind(this)
    }

    changePage(){
        this.setState({page: this.state.page + 1})
    }

    update(field) {
        debugger
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }

    updateFile(e){

        
        // if (e){ 

            e.preventDefault()
            
            let audioFile = e.target.files[0]
            
            if (audioFile && audioFile.type === "audio/mpeg"){
                this.setState({
                    title: audioFile.name,
                    songFile: audioFile
                 })
                this.changePage()
            } else {
                console.log("please enter a file")
            }
        // }
    }

    handleSubmit(e) {
        e.preventDefault()
        debugger
        const formData = new FormData();
        formData.append('track[title]', this.state.title)
        formData.append('track[genre]', this.state.genre)
        formData.append('track[description]', this.state.description)
        formData.append('track[owner_id]', this.state.owner_id)
        formData.append('track[track]', this.state.songFile)
        if (this.state.imageFile){
            formData.append('track[photo]', this.state.imageFile)
        }

        this.props.createTrack(formData).then(
            this.setState({ page: this.state.page+1 })
          )
        debugger
    }

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



    render(){

        if (this.state.page === 0){

            return(
                <div className="uploadform-page">
                                    <img src="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg"/>

                <div className="actual-form">
                    <div className="inner-form">
                        
                <h1 className="form-header" >Choose or drag file to upload</h1>

                    <input type="file" 
                    className="file-input" 
                    accept=".mp3, audio/*"
                    onChange={this.updateFile}/>

                    {/* <button onClick={this.checkFile} >next</button> */}
                    </div>
                </div>

            </div>
        )
    }     else if (this.state.page === 1){
        let preview;
        let inp;
        {if(this.state.imageUrl){
            preview = <img src={this.state.imageUrl} alt="Image preview..."/>
            inp = <input className="replace-img" type="file" onChange={this.previewFile}/>

        } else {
            preview = <img src={"https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"} alt="Image preview..."/>;
            inp = <input type="file" onChange={this.previewFile}/>

        } 
    }     

          return (
            <div className="uploadform-page">
              <img src="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg" />
              <div className="second-page-form">
                {/* <h1 className="form-header">enter additional info</h1> */}
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
                    <button onClick={this.handleSubmit}>Save</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          );  
    
    
    }   else if (this.state.page === 2){

        return (
            <div className="uploadform-page" >
                <div className="success-page" >
                        <h1>Thank you for sharing your sounds.</h1>
                        <h1>You can view your song <Link to={`/users/${this.props.currentUser.id}`} >here.</Link></h1>
                </div>
            </div>
        )
    }


    }
    

}


export default UploadForm