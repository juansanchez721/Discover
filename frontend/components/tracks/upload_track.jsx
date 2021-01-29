import React from 'react'


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
                <div className="actual-form">
                <h1 className="form-header" >UPLOAD FORM</h1>

                    <input type="file" 
                    className="file-input" 
                    accept=".mp3, audio/*"
                    onChange={this.updateFile}/>

                    {/* <button onClick={this.checkFile} >next</button> */}
                </div>

            </div>
        )
    }     else if (this.state.page === 1){
          return (

            <div className="uploadform-page">

            <div className="second-page-form">
                {/* <h1 className="form-header">enter additional info</h1> */}
                <div className="image-half">

                    <input type="file" onChange={this.previewFile}/>
                        <br/>
                    <img src={this.state.imageUrl} height="200" alt="Image preview..."/>
                
                </div>
                <div className="additional-info">

                <label>Title:</label>
                <input type= "text" value={this.state.title} onChange={this.update('title')}/>
                
                <label>Genre</label>
                <input type= "text" value={this.state.genre} onChange={this.update('genre')}/>
                
                <label>Description</label>
                <textarea value={this.state.description} onChange={this.update('description')}/>
            
                <button onClick={this.handleSubmit} >submit song</button>
            </div>

            </div>
                </div>
                )  
    
    
    }   else if (this.state.page === 2){

        return (
            <h1>yes you submitted</h1>
        )
    }


    }
    

}


export default UploadForm