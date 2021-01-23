import React from "react";
import Header from "./greeting/greeting_container";
import { Route, Switch } from 'react-router-dom'
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import Modal from './modal/modal'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash_page/splashpage'
import DiscoverContainer from "./discover_page/discover_container";

const App = () => (
  <div className="app">
    <div className="innerapp">

      <Modal/>
        <Header/>
    {/* <SplashPage /> */}
    <Switch>
        <Route exact path="/" component={SplashPage}/>
        {/* <AuthRoute exact path="/signup" component={SignUpFormContainer}/> 
        <AuthRoute exact path="/login" component={LogInFormContainer}/>  */}
        <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
    </Switch>
    </div>
  </div>
);

export default App;