import React from "react"
import ReactDOM from "react-dom"
import configureStore from "./store/store"
import Root from './components/root'
import {signUp, login, logout, searchEmail} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id,
                    username: window.currentUser.username,
                    track_likes: window.currentUser.track_likes,
                    follows: window.currentUser.follows,
                    image_url: window.currentUser.image_url,
                    topThreeLikes: window.currentUser.userLikes
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