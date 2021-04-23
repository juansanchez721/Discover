const defaultArg = Object({
  currentTrack: null,
  isPlaying: false,
  played: [],
  queue: [],
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
} from "../actions/playbar_actions";

const playbarReducer = (state = defaultArg, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case PLAY_SONG:
      let splitHere = newState.queue.indexOf(action.song.id)
      debugger
      newState.currentTrack = action.song;
      newState.queue = state.queue.slice(splitHere+1)
      newState.played = state.queue.slice(0, splitHere)
      newState.isPlaying = true;
      return newState;

    case PLAY_NEW_SONG:
      // debugger
      newState.played.push(state.currentTrack.id);
      newState.isPlaying = true;
      newState.currentTrack = action.track;
      return newState;

    case PAUSE_SONG:
      newState.isPlaying = false;
      return newState;

    case PLAY_NEXT_SONG:
      newState.isPlaying = true;

      newState.played.push(state.currentTrack.id);
      newState.queue.shift(); //remove song from queue
      newState.currentTrack = Object.values(action.track)[0];
      return newState;

    case PLAY_PREV_SONG:
      // debugger;
      newState.isPlaying = true;

      //   newState.queue.unshift(parseInt(Object.keys(action.track)[0])); //remove song from queue
      newState.queue.unshift(state.currentTrack.id);
      newState.played.pop(); //remove song from played
      newState.currentTrack = Object.values(action.track)[0];
      return newState;

    case QUEUE_SONG:
      newState.queue.unshift(action.trackId);
        return newState

    case QUEUE_PAGE_SONG:
      debugger
      newState.queue.push(action.trackId);
      return newState
    case CLEAR_PAGE_QUEUE:
      newState.queue = []
      return newState

    default:
      return state;
  }
};

export default playbarReducer;
