export const asArray = ({ tracks }) => (
    Object.keys(tracks).map(key => tracks[key])
  );
  
  export const selectTrack = ({tracks}, id) => {
    debugger
    if (tracks[id]) {
      const track = tracks[id];
      return track;
    }
    return {};
  };