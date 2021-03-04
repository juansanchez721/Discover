import React from "react"
import ReactDOM from "react-dom"
import configureStore from "./store/store"
import Root from './components/root'
import {signUp, login, logout, searchEmail} from './actions/session_actions'
// import { searchEmail } from './util/session_api_util'
import {fetchTracks} from './actions/track_actions'

document.addEventListener("DOMContentLoaded", () => {
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id,
                    username: window.currentUser.username,
                    trackLikes: window.currentUser.trackLikes
                },
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // const store = configureStore();
    window.searchEmail = searchEmail;
    
    window.getState = store.getState
    window.dispatch = store.dispatch
    // window.fetchTracks = fetchTracks;
    
    window.signUp = signUp
    window.login = login
    window.logout = logout
    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store} />, root)

})