const defaultArg = Object({
  currentTrack: null,
  isPlaying: false,
  played: [],
  queue: [40, 28, 37, 26, 27],
});

import {
  PLAY_SONG,
  PLAY_NEW_SONG,
  QUEUE_SONG,
  PLAY_NEXT_SONG,
  PLAY_PREV_SONG,
  PAUSE_SONG,
} from "../actions/playbar_actions";

const playbarReducer = (state = defaultArg, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case PLAY_SONG:
      newState.currentTrack = action.song;
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
    default:
      return state;
  }
};

export default playbarReducer;
