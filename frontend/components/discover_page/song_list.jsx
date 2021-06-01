import React from "react";
import SongListItem from "./song_list_item";
import PlayButton from '../play_button/play_button'
const SongList = ({ currentUser, tracks, deleteLike, createLike, queueSong, currentTrack }) => {
  let imgSource = null;
  let listTracks = Object.values(tracks).map((track, i) => {
    
    if (i === 0) imgSource = track;

    return <SongListItem 
    key={track.id} 
    createLike={createLike}
    deleteLike={deleteLike}
    liked={currentUser.track_likes.includes(track.id)}
    track={track} 
    // queueSong={queueSong}
    />;
  });
  return (
    <div className="song-list-container">
      {/* <div className="discover-page-item"> */}
          {/* <img src={props.track.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"} />  */}
          <img
            src={
                imgSource ? imgSource.image_url : "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"
            }
          />

        <div className="play-button-holder">
          <PlayButton track={imgSource} currentTrackBool={ currentTrack && imgSource ? currentTrack.id === imgSource.id : false }/>
        </div>

        {/* </div> */}
      {/* </div> */}
      <div className="song-list">{listTracks}</div>
    </div>
  );
};

export default SongList;
