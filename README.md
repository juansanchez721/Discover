# README



* Welcome to [Discover](https://discover-aa.herokuapp.com/#/), a pixel-perfect [SoundCloud](https://soundcloud.com/)
  clone!
This application takes great inspiration from the music streaming service/music sharing platform, where users can sign in or sign up to upload their own songs, listen to, comment on, and like other's media, upload their own media, and follow other users.

*The technologies I used for this project are as follows:*

## For the frontend:
 + React.js
 + Redux.js
 + CSS
 + Javascript

## For the Backend:
 + Ruby on Rails

## For the Database:
 + PostgreSQL 

## Hosting:

 + AWS for files (audio, images)
 + Heroku (for app deployment)

## Features

### User Authentication

+ Users are able to log in with their own credentials, or as a demo user to have access to app features.
+ Sign in/Sign up forms validate errors* upon the user's action to log in or sign up.

### Uploading

+ Signed-in users are able to upload songs they wish to share, with or without a photo.
+ These songs are then available on their respective show page, and even in the Discover page.

### User Profile Page

+ A user's profile page will show all of their uploaded music, should they upload any at all.
+ It will also have their profile picture displayed along with their username.
+ section to show user's likes, follows, followers, and comments
+ The same structure is followed for every user.

### Playbar
+ Audio can be played based on what song a user chooses.
+ User can queue more songs to allow continuous play.
+ User can skip, rewind, and pause to manipulate playbar actions.

### Track Show Page
+ Shows an individual track's information. 
+ User comments are shown for the track, each which can be replied to with subcomments 

### Play Button Snippet
One of my favorite parts of React is being able to build reusable components that can be placed throughout the site. for instance, the following code snippet is the play button, 
which takes in two props: a track's information, and a boolean that lets the redux state know whether if it's the current playing track on the playbar.

![Play Button Snippet](https://github.com/juansanchez721/Discover/blob/main/app/assets/images/playbutton_snippet.png "Play Button Snippet")

The play button was placed virtually on every page of Discover, as it is the main mechanism in choosing which song to play. From the code snippet, the two main actions used are to play a song, and to pause a song. Dependent on the currentTrackBool, the play button turns into the pause button - other song entities remain as a play button. 

### Coming soon

+ Continuous play depending on user's current location on the app.
+ Search feature to explore more tracks, users
