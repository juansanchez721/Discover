import React from 'react'

class EditModal extends React.Component {

    constructor(props){
        super(props)

        this.state ={
            bio: this.props.user.bio || "",
            firstName: this.props.user.firstName || "",
            lastName: this.props.user.lastName || "",
            imageUrl: this.props.user.image_url || null,
            imageFile: null,

        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.previewFile = this.previewFile.bind(this)

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

    handleSubmit(){
        const formData = new FormData();
        formData.append('user[bio]', this.state.bio)
        formData.append('user[first_name]', this.state.firstName)
        formData.append('user[last_name]', this.state.lastName)

        if (this.state.imageFile){
            formData.append('user[photo]', this.state.imageFile)
        }
        this.props.updateUser( formData, this.props.user.id)
        .then(this.props.closeModal())
    }


    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }


    render(){

        let preview;
        let inp;
        if(this.state.imageUrl){
            preview = <img src={this.state.imageUrl} alt="Image preview..."/>
            inp = <input className="replace-img" type="file" onChange={this.previewFile}/>

        } else {
            preview = <img src={this.state.imageUrl} alt="Image preview..."/>;
            inp = <input type="file" onChange={this.previewFile}/>

        }

        const {user} = this.props
        return(
            <div className="edit-modal" >
                <div className="image-preview-side" >
                    {preview}
                    {inp}
                </div>
                <div className="form-side" >

             <label>First name</label>
             <input onChange={this.update('firstName')} value={this.state.firstName}/>
             
             <label>Last name</label>
             <input onChange={this.update('lastName')} value={this.state.lastName}/>

            <label>Bio</label>
             <input onChange={this.update('bio')} value={this.state.bio} />
            <div className="edit-modal-buttons" >

             <button onClick={this.props.closeModal } >cancel</button>
            <button onClick={this.handleSubmit } >submit</button>
            </div>
                </div>
            </div>
        )

    }
}

export default EditModal