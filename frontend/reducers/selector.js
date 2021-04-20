export const asArray = ({ tracks }) => (
    Object.keys(tracks).map(key => tracks[key])
  );

  export const asArrayUsers = ({ users }) => (
    Object.keys(users).map(key => users[key])
  );
  
  export const selectTrack = ({tracks}, id) => {
    if (tracks[id]) {
      const track = tracks[id];
      return track;
    }
    return {};
  };