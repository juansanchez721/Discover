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
        age: 18,
        warnings: "",
        page: 0
      };
      this.changePage = this.changePage.bind(this)
      this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this)
      this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this)
      this.checkField = this.checkField.bind(this)
      // this.printWarning = this.printWarning.bind(this)
      this.warnings = null;
      this.demoUserLogin = this.demoUserLogin.bind(this)
      this.handleEmail = this.handleEmail.bind(this)
    }

    demoUserLogin(){
      this.props.demoUserForm({
        email: "demouser@test.com",
        password: "demopassword"
      }).then(this.props.closeModal)
    }
    

    changePage(){
      debugger
      this.setState({ page: this.state.page + 1})
    }


    handleEmail(){
      debugger
      console.log(this.state.warnings)
      this.props.validateEmail(this.state.email)
     
      setTimeout(() =>  this.setState({ warnings: this.props.errors[0]}), 50);
      setTimeout(()=> console.log(this.state.warnings), 60);
      setTimeout(()=> this.checkField(), 60);
      this.props.clearErrors()
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
        debugger
        if (e) {
          debugger
          e.preventDefault();
        }
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
        // this.renderErrors()
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }

      checkField() {

        if(this.props.formType === 'login'){  
          
          if (this.state.email.length < 3) {
          this.setState({ warnings: "Please enter a valid email."})
          
        } else {
          this.setState({ warnings: ""})
          this.changePage();
        }
      }
       
        //Email validations
        if (this.state.page === 0 && this.state.email.length < 3 && this.state.warnings === "Email Available") {
              
              this.props.clearErrors()
              console.log("change")
              this.setState({ warnings: "Please enter a valid email."})

        } else if (this.state.page === 0 && this.state.email.length > 3 && this.state.warnings === "Email Available"){
              
              this.props.clearErrors()
              this.changePage();
              this.setState({ warnings: ""})

        } 
        //Password validations  
        else if (this.state.page === 1 && this.state.password.length < 6) {
           
              console.log("password warning")
              this.setState({ warnings: "Please enter a password (minimum 6 characters)"})
        
        } else if (this.state.page === 1 && this.state.password.length > 6) {
 
              this.setState({ warnings: ""})
              this.changePage()
        }
        
        else if (this.state.page === 2){

          let errorsArray = new Array(null, null)
            if(this.state.age < 18){
              console.log("You must be 18 years or older.")
              errorsArray[0] = (" You must be 18 years or older.")
              // this.setState({ warnings: " You must be 18 years or older."})
            }

            if(this.state.gender === ""){
              console.log("Please choose a gender.")
              errorsArray[1] = ("Please Choose a gender")
            
            }

            if(errorsArray[0] === null & errorsArray[1] === null) {
              this.changePage()
            }

            this.setState({ warnings: errorsArray})
        //gender validations
        
        } //username validations
          else if (this.state.page === 3 && this.state.username === ""){
          
              console.log("username warning")
              this.setState({ warnings: "Please enter a valid Username."})
        
        } 
          else if (this.state.page === 3 && this.props.formType === 'signup'){
        
          this.handleSubmitSignUp()
  
        }
      }
      
  renderErrors() {
    // debugger
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

       // componentWillMount(){
      //   this.props.clearErrors();
      // }

      
      // handleSignInEmail(){
      //   this.props.clearErrors()
      //   this.props.validateEmail(this.state.email)
      //   if(this.props.errors[0] === "email available"){
      //     this.setState({ page: this.state.page+1})
      //     // this.setState({ warnings: this.props.errors})
      //   } else {
      //     this.setState({ page: this.state.page})
  
      //   }

      // }


    
    render() {
      let formHeader
      if (this.props.formType === 'signup'){
        formHeader = 
        <div className="session-form-header">
          
          <h1>
            Sign up to Discover
          </h1>

        </div>
      } else{
        formHeader = 
        <div className="session-form-header">
          
        <h1>
          Log in to Discover
        </h1>

      </div>
      }
      if (this.state.page === 0 && this.props.formType === 'signup' ) {
        return (
            <div className="form-container">
              <div className="form" >
              {formHeader}

            <button onClick={this.demoUserLogin} >Demo User Login</button>
            <br/>
            <br/>
            <h2>--------------------or--------------------</h2>
            <br/>
            <div className="login-form-box">
            {this.state.warnings || this.renderErrors()}
              <div className="form">
           
                {/* <label className="label-names-input"> Email:</label> */}
                    <input type="text"
                    placeholder="Your email address"
                    className="form-inputs"
                    value={this.state.email}
                    onChange={this.update('email')}
                    />
                
                  <button onClick={this.handleEmail} >Continue</button>
              </div>
              <p className="small-light-words">We may use your email and devices for updates and tips on Discover's 
              products and services, and for activities notifications. 
              You can unsubscribe for free at any time in your notification settings.
              </p>
            </div>
            </div>
          </div>
        )

      } else if (this.state.page === 0 && this.props.formType === 'login' ) {
        return (
            <div className="form-container">
              {/* <h1>Log in to Discover</h1> */}
              <div className="form" >
              {formHeader}

              <br/>
              <br/>
            <button onClick={this.demoUserLogin} >Demo User Login</button>
            <br/>
            <br/>
            <h2>--------------------or--------------------</h2>
            <br/>
            <div className="login-form-box">
          {this.state.warnings}
              {/* <br/> */}  
          {this.renderErrors()}
              <div className="form">
           
                {/* <label className="label-names-input"> Email:</label> */}
                    <input type="text"
                    placeholder="Your email address"
                    className="form-inputs"
                    value={this.state.email}
                    onChange={this.update('email')}
                    />
                
                {/* <br/> */}
                  <button onClick={this.checkField} >Continue</button>
              </div>
            </div>
            <p className="small-light-words">We may use your email and devices for updates and tips on Discover's 
              products and services, and for activities notifications. 
              You can unsubscribe for free at any time in your notification settings.
              </p>
          </div>
          </div>
        )
      
      
      
        } else if (this.state.page === 1 && this.props.formType === 'login') {/// end of page 0
        
        return (
          <div className="form-container">
            <form onSubmit={this.handleSubmitSignIn} className="login-form-box">
              {/* <br/> */}
                            {this.renderErrors()}

              {/* Please {this.props.formType} or {this.props.navLink} */}
              {this.state.warnings}
              <div className="form">
                {/* <br/> */}
                                          
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
                <button onClick={()=>this.checkField} >Sign in</button>

                  {/* <button onClick={this.changePage} >continue</button> */}
                {/* <input className="form-inputs" type="submit" value={this.props.formType} /> */}
              </div>
            </form>
          </div>
        )

      } else if (this.state.page === 1 && this.props.formType === 'signup' ) { // end of page 1 for sign in
          return (
            // <div>second modal for password sign up</div>
            <div className="form-container">
            <div className="login-form-box">
              <h1>Create your Discover Account</h1>
              <br/>
              {/* Please {this.props.formType} or {this.props.navLink} */}
              <div className="form">

                <label>
                    <input type="text"
                      placeholder="email"
                      className="form-inputs"
                      value={this.state.email}
                      onChange={this.update('email')}
                      />
                </label>

                <br/>
                <br/>
                
                      {/* {this.renderErrors()} */}
                <label> Choose a password
                    <input type="password"
                      placeholder="password"
                      className="form-inputs"
                      value={this.state.password}
                      onChange={this.update('password')}
                      />
                </label>
                      {this.state.warnings}
                
                <br/>
                  <button onClick={this.checkField} >Accept & continue</button>
              </div>
            </div>
          </div>
          )
      } else if (this.state.page === 2){
        return (
          <div className="form-container">
            <div className="login-form-box">
            <h1>Create your Discover Account</h1>

              <br />
              {/* Please {this.props.formType} or {this.props.navLink} */}
              {/* {this.renderErrors()} */}
              <div className="form">
                <br />

                <label className="label-names-input">Tell us your age</label>
                {/* <br /> */}
                <input
                  type="number "
                  className="form-inputs"
                  value={this.state.age}
                  onChange={this.update("age")}
                />
                <br />
                {this.state.warnings[0]}

                {/* <br /> */}
                <br />
                <label className="label-names-input">Gender</label>
                <select
                  className="form-inputs"
                  onChange={this.update("gender")}
                >
                  <option value="">Indicate your gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="NA">Prefer not to say</option>
                </select>
                {this.state.warnings[1]}

                <br />
                <button onClick={this.checkField}>Continue</button>
              </div>
            </div>
          </div>
        );
      } else if (this.state.page === 3){
          return (
            <div className="form-container">
              <div className="login-form-box" >
              <h1>Tell us a bit about yourself</h1>
              <div className="form">
                {this.state.warnings}
                <label className="label-names-input" >Choose your display name</label>
                <input
                  type="text"
                  className="form-inputs"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update("username")}
                  />
              <span className="small-light-words">Your display name can be anything you like. 
              Your name or artist name are good choices.
              </span>
                <button onClick={this.checkField}>Get started</button>
              </div>
              </div>
            </div>
          );
      }
      }
    
  }

  export default withRouter(SessionForm)