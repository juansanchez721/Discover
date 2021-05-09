const defaultArg = Object({
  currentTrack: null,
  isPlaying: false,
  played: [],
  pageQueue: [],
  staticQueue:[],
  userQueue: []
});

import {
  PLAY_SONG,
  PLAY_NEW_SONG,
  QUEUE_SONG,
  QUEUE_PAGE_SONG,
  CLEAR_PAGE_QUEUE,
  PLAY_NEXT_SONG,
  PLAY_PREV_SONG,
  PAUSE_SONG,
  PLAY_QUEUE_SONG
} from "../actions/playbar_actions";

const playbarReducer = (state = defaultArg, action) => {
  // debugger
  let newState = Object.assign({}, state);
  switch (action.type) {
    case PLAY_SONG:
      let splitHere = newState.staticQueue.indexOf(action.song.id)
      // debugger
      newState.currentTrack = action.song;
      newState.pageQueue = state.staticQueue.slice(splitHere+1)
      newState.played = state.staticQueue.slice(0, splitHere)
      newState.isPlaying = true;
      return newState;

    case PLAY_NEW_SONG:

      // debugger
      let splitHere2 = newState.staticQueue.indexOf(action.track.id)
      newState.currentTrack = action.track;
      newState.pageQueue = state.staticQueue.slice(splitHere2+1)
      newState.played = state.staticQueue.slice(0, splitHere2)
      // debugger
      // newState.played.push(state.currentTrack.id);
      newState.isPlaying = true;
      // newState.currentTrack = action.track;
      return newState;

    case PLAY_QUEUE_SONG:
      // debugger
        // newState.played
        newState.currentTrack = Object.values(action.track)[0];
      return newState

    case PAUSE_SONG:
      newState.isPlaying = false;
      return newState;

    case PLAY_NEXT_SONG:
      newState.isPlaying = true;

      newState.played.push(state.currentTrack.id);
      newState.pageQueue.shift(); //remove song from queue
      newState.currentTrack = Object.values(action.track)[0];
      return newState;

    case PLAY_PREV_SONG:
      // debugger;
      newState.isPlaying = true;

      //   newState.queue.unshift(parseInt(Object.keys(action.track)[0])); //remove song from queue
      newState.pageQueue.unshift(state.currentTrack.id);
      newState.played.pop(); //remove song from played
      newState.currentTrack = Object.values(action.track)[0];
      return newState;

    case QUEUE_SONG:
      newState.userQueue.push(action.trackId);
        return newState

    case QUEUE_PAGE_SONG:
      // debugger
      newState.staticQueue.push(action.trackId)
      newState.pageQueue.push(action.trackId);
      return newState
    case CLEAR_PAGE_QUEUE:
      newState.played = []
      newState.pageQueue = []
      newState.staticQueue = []
      return newState

    default:
      return state;
  }
};

export default playbarReducer;
