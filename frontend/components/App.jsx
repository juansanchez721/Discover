import React from "react";
import Header from "./greeting/greeting_container";
import { Route, Switch } from 'react-router-dom'
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import Modal from './modal/modal'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPageContainer from './splash_page/splashpage_container'
import DiscoverContainer from "./discover_page/discover_container";

const App = () => (
  <div className="app">
    <div className="innerapp">

      <Modal/>
        <Header/>
    {/* <SplashPage /> */}
    <Switch>
        <AuthRoute exact path="/" component={SplashPageContainer}/>
        {/* <AuthRoute exact path="/signup" component={SignUpFormContainer}/> 
        <AuthRoute exact path="/login" component={LogInFormContainer}/>  */}
        <ProtectedRoute exact path="/tracks/:trackId" component={TrackShowContainer}/>
        <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
    </Switch>
    </div>
  </div>
);

export default App;