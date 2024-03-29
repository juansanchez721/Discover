import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      gender: "",
      age: 18,
      warnings: "",
      page: 0,
    };
    this.changePage = this.changePage.bind(this);
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
    this.checkField = this.checkField.bind(this);
    // this.printWarning = this.printWarning.bind(this)
    this.warnings = null;
    this.demoUserLogin = this.demoUserLogin.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.splitHandle = this.splitHandle.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  demoUserLogin() {
    this.props
      .demoUserForm({
        email: "demouser@test.com",
        password: "demopassword",
      })
      .then(this.props.closeModal);
  }

  changePage() {
    this.setState({ page: this.state.page + 1 });
  }

  handleSubmitSignIn(e) {
    // e.preventDefault();
    this.props
      .processForm({
        email: this.state.email,
        password: this.state.password,
      })
      .then(this.props.closeModal);
  }

  checkLogin() {
    if (this.state.email.length < 3) {
      // debugger
      this.setState({ warnings: "Please enter a valid email." });
      return;
    } else {
      // debugger
      this.setState({ warnings: null });
      this.changePage();
      // this.handleSubmitSignIn();
      return;
    }
  }

  handleSubmitSignUp(e) {
    if (e) {
      e.preventDefault();
    }
    // const user = Object.assign({}, this.state);
    this.props
      .processForm({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        gender: this.state.gender,
        age: this.state.age,
      })
      .then(this.props.closeModal);
  }

  handleEmail() {
    this.setState({ warnings: null });
    this.props.clearErrors();

    if (this.state.email.length < 3) {
      this.setState({ warnings: "Please enter a valid email." });
    } else {
      this.props.validateEmail(this.state.email).then(() => {
        this.splitHandle();
      });
    }

    // this.props.clearErrors()
  }

  splitHandle() {
    if (this.props.errors[0] === "Email Available") {
      this.changePage();
      this.props.clearErrors();
      this.setState({ warnings: "" });
    }
  }

  update(field) {
    // this.renderErrors()
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  checkField() {
    this.props.clearErrors();
    //Password validations
    if (this.state.page === 1 && this.state.password.length < 6) {
      this.setState({
        warnings: "Please enter a password (minimum 6 characters)",
      });
    } else if (this.state.page === 1 && this.state.password.length >= 6) {
      this.setState({ warnings: "" });
      this.changePage();
    } else if (this.state.page === 2) {
      let errorsArray = new Array(null, null);
      if (this.state.age < 18) {
        errorsArray[0] = "You must be 18 years or older.";
      }

      if (this.state.gender === "") {
        errorsArray[1] = "Please Choose a gender";
      }

      if (!errorsArray[0] & !errorsArray[1]) {
        this.changePage();
      }

      this.setState({ warnings: errorsArray });
      //gender validations
    } //username validations
    else if (this.state.page === 3 && this.state.username === "") {
      this.setState({ warnings: "Please enter a valid Username." });
    } else if (this.state.page === 3 && this.props.formType === "signup") {
      this.setState({ warnings: null });

      this.handleSubmitSignUp();
      // .then(

      // )
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let formHeader;

    if (this.props.formType === "signup") {
      formHeader = (
        <div className="session-form-header">
          <h1>Sign up to Discover</h1>
        </div>
      );
    } else {
      formHeader = (
        <div className="session-form-header">
          <h1>Log in to Discover</h1>
        </div>
      );
    }

    if (this.state.page === 0 && this.props.formType === "signup") {
      return (
        <div className="form-container">
          <div className="form">
            {formHeader}

            <button onClick={this.demoUserLogin}>Demo User Login</button>
            <br />
            <br />
            <h2>--------------------or--------------------</h2>
            <br />
            <div className="login-form-box">
              <span>
                {/* {this.renderErrors()} */}
                {this.props.errors.length > 0
                  ? this.renderErrors()
                  : this.state.warnings}
              </span>
              <div className="form">
                {/* <label className="label-names-input"> Email:</label> */}
                <input
                  type="text"
                  placeholder="Your email address"
                  className={
                    this.state.warnings || this.props.errors.length
                      ? "red-form-inputs"
                      : "form-inputs"
                  }
                  value={this.state.email}
                  onChange={this.update("email")}
                />

                <button onClick={this.handleEmail}>Continue</button>
              </div>
              <p className="small-light-words">
                We may use your email and devices for updates and tips on
                Discover's products and services, and for activities
                notifications. You can unsubscribe for free at any time in your
                notification settings.
              </p>
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 0 && this.props.formType === "login") {
      return (
        <div className="form-container">
          {/* <h1>Log in to Discover</h1> */}
          <div className="form">
            {formHeader}

            <br />
            <br />
            <button className="demo-user-login" onClick={this.demoUserLogin}>
              Demo User Login
            </button>
            <br />
            <br />
            <h2>--------------------or--------------------</h2>
            <br />
            <div className="login-form-box">
              <span>
                {this.state.warnings}
                {/* <br/> */}
                {this.renderErrors()}
              </span>
              <div className="form">
                {/* <label className="label-names-input"> Email:</label> */}
                <input
                  type="text"
                  placeholder="Your email address"
                  className={
                    this.state.warnings ? "red-form-inputs" : "form-inputs"
                  }
                  value={this.state.email}
                  onChange={this.update("email")}
                />

                {/* <br/> */}
                <button onClick={this.checkLogin}>Continue</button>
              </div>
            </div>
            <p className="small-light-words">
              We may use your email and devices for updates and tips on
              Discover's products and services, and for activities
              notifications. You can unsubscribe for free at any time in your
              notification settings.
            </p>

            <p className="small-light-words">
              We may use information you provide us in order to show you
              targeted ads as described in our Privacy Policy.
            </p>
          </div>
        </div>
      );
    } else if (this.state.page === 1 && this.props.formType === "login") {
      /// end of page 0

      return (
        <div className="form-container">
          <form onSubmit={this.handleSubmitSignIn} className="login-form-box">
            {/* <br/> */}

            {/* Please {this.props.formType} or {this.props.navLink} */}
            {formHeader}
            <div className="form">
              {/* <br/> */}
              <span>
                {this.state.warnings}
                {this.renderErrors()}
              </span>
              <label>
                <input
                  type="text"
                  className={
                    this.props.errors.length > 0
                      ? "red-form-inputs"
                      : "form-inputs"
                  }
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>

              <br />

              <label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className={
                    this.props.errors.length > 0
                      ? "red-form-inputs"
                      : "form-inputs"
                  }
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>

              <br />
              <button>Sign in</button>

              {/* <button onClick={this.changePage} >continue</button> */}
              {/* <input className="form-inputs" type="submit" value={this.props.formType} /> */}
            </div>
          </form>
        </div>
      );
    } else if (this.state.page === 1 && this.props.formType === "signup") {
      // end of page 1 for sign in
      return (
        // <div>second modal for password sign up</div>
        <div className="form-container">
          <div className="login-form-box">
            <h1>Create your Discover Account</h1>
            {/* <br/> */}
            {/* Please {this.props.formType} or {this.props.navLink} */}
            <div className="form">
              <label>
                <input
                  type="text"
                  placeholder="email"
                  className="form-inputs"
                  value={this.state.email}
                  onChange={this.update("email")}
                  disabled
                />
              </label>

              <br />
              <br />

              {/* {this.renderErrors()} */}
              <label>
                {" "}
                Choose a password
                <input
                  type="password"
                  placeholder="password"
                  className={
                    this.state.warnings ? "red-form-inputs" : "form-inputs"
                  }
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              <span>{this.state.warnings}</span>

              <br />
              <button onClick={this.checkField}>Accept & continue</button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 2) {
      return (
        <div className="form-container">
          <div className="login-form-box">
            <h1>Create your Discover Account</h1>

            {/* <br /> */}
            {/* Please {this.props.formType} or {this.props.navLink} */}
            {/* {this.renderErrors()} */}
            <div className="form">
              <br />

              <label className="label-names-input">Tell us your age</label>
              {/* <br /> */}
              <input
                type="number "
                className={
                  this.state.warnings[0] ? "red-form-inputs" : "form-inputs"
                }
                value={this.state.age}
                onChange={this.update("age")}
              />
              <br />
              <span>{this.state.warnings[0]}</span>

              {/* <br /> */}
              <br />
              <label className="label-names-input">Gender</label>
              <select
                className={
                  this.state.warnings[1] ? "red-form-inputs" : "form-inputs"
                }
                onChange={this.update("gender")}
              >
                <option value="">Indicate your gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="NA">Prefer not to say</option>
              </select>
              <span>{this.state.warnings[1]}</span>

              <br />
              <button onClick={this.checkField}>Continue</button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 3) {
      return (
        <div className="form-container">
          <div className="login-form-box">
            <h1>Tell us a bit about yourself</h1>
            <div className="form">
              <label className="label-names-input">
                Choose your display name
              </label>
              <input
                type="text"
                className={
                  this.state.warning === "username taken"
                    ? "red-form-inputs"
                    : "form-inputs"
                }
                placeholder="Username"
                value={this.state.username}
                onChange={this.update("username")}
              />
              <span>
                {this.props.errors.length > 0
                  ? this.renderErrors()
                  : this.state.warnings}
              </span>
              <p className="small-light-words">
                Your display name can be anything you like. Your name or artist
                name are good choices.
              </p>
              <button onClick={this.checkField}>Get started</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);
