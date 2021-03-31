import React from 'react'

class EditModal extends React.Component {

    constructor(props){
        super(props)

        this.state ={
            bio: this.props.user.bio || "",
            firstName: this.props.user.firstName || "",
            lastName: this.props.user.lastName || ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(){
        debugger
        const formData = new FormData();
        formData.append('user[bio]', this.state.bio)
        formData.append('user[first_name]', this.state.firstName)
        formData.append('user[last_name]', this.state.lastName)

        // if (this.state.imageFile){
        //     formData.append('track[photo]', this.state.imageFile)
        // }
        // debugger
        this.props.updateUser( formData, this.props.user.id)
        .then(this.props.closeModal())
    }


    update(field) {
        debugger
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }


    render(){

        const {user} = this.props
        return(
            <div className="edit-modal" >
             <h1>Edit here for {user.username} </h1>

            <label>bio</label>
             <input onChange={this.update('bio')} value={this.state.bio} />

             <label>First name</label>
             <input onChange={this.update('firstName')} value={this.state.firstName}/>
             
             <label>Last name</label>
             <input onChange={this.update('lastName')} value={this.state.lastName}/>

            <button onClick={this.handleSubmit } >submit</button>
            </div>
        )

    }
}

export default EditModal