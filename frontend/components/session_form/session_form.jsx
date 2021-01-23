import React from 'react'
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
      debugger
      super(props);
      debugger
      this.state = {
        username: "",
        email: "",
        password: "",
        gender: "",
        age: "",
        page: 0
      };
      this.changePage = this.changePage.bind(this)
      this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this)
      this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this)

    }

    changePage(){
      // debugger
      this.setState({ page: this.state.page + 1})
    }

    componentWillUnmount () {
      // this.props.clearErrors();
  }


    handleSubmitSignIn(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        this.props.processForm({
          email: this.state.email,
          password: this.state.password
        }).then(this.props.closeModal)
      }

      handleSubmitSignUp(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        this.props.processForm({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          gender: this.state.gender,
          age: this.state.age
        }).then(this.props.closeModal)
        // this.props.history.push
      }

      
      update(field) {
        this.renderErrors()
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }

      
  renderErrors() {
    debugger
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
    
    render() {
      let formHeader
      if (this.props.formType === 'signup'){
        formHeader = 'Sign up to Discover'
      } else{
        formHeader = "Log in to Discover"
      }
      
      if (this.state.page === 0 ) {
        return (
            <div className="form-container">
              {/* {formHeader} */}
            <form onSubmit={this.changePage} className="login-form-box">
              {/* <br/> */}
              {/* Please {this.props.formType} or {this.props.navLink} */}
              {this.renderErrors()}
              <div className="login-form">
           
                
                {/* <label className="label-names-input"> Email:</label> */}
                    <input type="text"
                    placeholder="Your email address"
                    className="form-inputs"
                      value={this.state.email}
                      onChange={this.update('email')}
                    />
                
                
                {/* <br/> */}
                  <button onClick={this.changePage} >Continue</button>
                {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
              </div>
            </form>
          </div>
        )

      } else if (this.state.page === 1 && this.props.formType === 'login') {/// end of page 0
        
        return (
          <div className="form-container">
            <form onSubmit={this.handleSubmitSignIn} className="login-form-box">
              {/* <br/> */}
              {/* Please {this.props.formType} or {this.props.navLink} */}
              {this.renderErrors()}
              <div className="login-form">
                {/* <br/> */}
                          
                <br/>
                
                <label>
                    <input type="text"
                      className="form-inputs"
                      value={this.state.email}
                      onChange={this.update('email')}
                    />
                </label>
                
                <br/>
                
                <label>
                    <input type="password"
                      placeholder="Your Password"
                      className="form-inputs"
                      value={this.state.password}
                      onChange={this.update('password')}
                    />
                </label>
                
                <br/>
                  {/* <button onClick={this.changePage} >continue</button> */}
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
            </form>
          </div>
        )

      } else if (this.state.page === 1 && this.props.formType === 'signup' ) { // end of page 1 for sign in
          return (
            <div className="form-container">
            <form onSubmit={this.handleSubmitSignUp} className="login-form-box">
              <br/>
              {/* Please {this.props.formType} or {this.props.navLink} */}
              {this.renderErrors()}
              <div className="login-form">
                <br/>
                          
                <br/>
                
                <label>
                    <input type="text"
                      placeholder="email"
                      className="form-inputs"
                      value={this.state.email}
                      onChange={this.update('email')}
                    />
                </label>

                <br/>
                
                <label>
                    <input type="password"
                      placeholder="password"
                      className="form-inputs"
                      value={this.state.password}
                      onChange={this.update('password')}
                    />
                </label>
                
                <br/>
                  <button onClick={this.changePage} >Continue</button>
                {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
              </div>
            </form>
          </div>
          )
      } else if (this.state.page === 2){
        return (
          <div className="form-container">
            <form onSubmit={this.handleSubmitSignUp} className="login-form-box">
              <br/>
              {/* Please {this.props.formType} or {this.props.navLink} */}
              {this.renderErrors()}
              <div className="login-form">
                <br/>

                <label className="label-names-input">Gender</label>
                    <br/>
                    <input type="text"
                      className="form-inputs"
                      value={this.state.gender}
                      onChange={this.update('gender')}
                    />
                
                <br/>
                <label className="label-names-input">Tell us your age</label>
                <br/>
                    <input type="text"
                      className="form-inputs"
                      value={this.state.age}
                      onChange={this.update('age')}
                    />
                
                
                <br/>
                  <button onClick={this.changePage} >Continue</button>
              </div>
            </form>
            </div>
        )
      } else if (this.state.page === 3){
          return(
            <div className="form-container">
            <form onSubmit={this.handleSubmitSignUp} className="login-form-box">
            {this.renderErrors()}

                   <input type="text"
                   className="form-inputs"
                   placeholder="Username"
                     value={this.state.username}
                     onChange={this.update('username')}
                   />

            <input className="session-submit" type="submit" value={this.props.formType} />

            </form>
            </div>
          )
      }
      }
    
  }

  export default withRouter(SessionForm)