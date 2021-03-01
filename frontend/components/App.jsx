import React from "react";
import Header from "./greeting/greeting_container";
import { Route, Switch } from 'react-router-dom'
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import Modal from './modal/modal'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPageContainer from './splash_page/splashpage_container'
import DiscoverContainer from "./discover_page/discover_container";
import TrackShowContainer from './tracks/track_show_container'
import ProfileContainer from '../components/users/profile_container'
import UploadTrackContainer from '../components/tracks/upload_track_container'
import UpdateTrackContainer from '../components/tracks/update_track_container'
import Playbar from './playbar/playbar'
const App = () => (
  <div className="app">
        <Header/>
    <div className="innerapp">

      <Modal/>
    <Switch>
        <AuthRoute exact path="/" component={SplashPageContainer}/>
        <ProtectedRoute exact path="/tracks/:trackId/edit" component={UpdateTrackContainer}/>
        <ProtectedRoute exact path="/tracks/upload" component={UploadTrackContainer}/>
        <ProtectedRoute exact path="/tracks/:trackId" component={TrackShowContainer}/>
        <ProtectedRoute exact path="/users/:userId" component={ProfileContainer}/>
        <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
    </Switch>
    
    </div>
    <Playbar/>
  </div>
);

export default App;