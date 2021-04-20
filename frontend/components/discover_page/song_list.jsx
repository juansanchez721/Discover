import React from "react";
import SongListItem from "./song_list_item";
import PlayButton from '../play_button/play_button'
const SongList = ({ currentUser, tracks, deleteLike, createLike }) => {
  let imgSource = null;
  let listTracks = Object.values(tracks).map((track, i) => {
    if (i === 0) imgSource = track;

    return <SongListItem 
    key={track.id} 
    createLike={createLike}
    deleteLike={deleteLike}
    liked={track.likers.includes(currentUser.id)}
    track={track} />;
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
          <PlayButton track={imgSource} />
        </div>

        {/* </div> */}
      {/* </div> */}
      <div className="song-list">{listTracks}</div>
    </div>
  );
};

export default SongList;
