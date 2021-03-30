import React from 'react'


const LikesItem = ({ track }) => {
    return (
        <div className="likes-item">
                   <img src={track.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/>
        <div className="like-item-info" >

            <h1>{track.artist}</h1>
            <h2>
                {track.title}
            </h2>
            <span className="like-item-info-span" >

            <p><i className="fas fa-heart"></i>{ " " + track.likers.length + " "}</p>
            <p><i className="fas fa-comment-alt"></i> { " " + track.comment_count + " "}</p>
            </span>
        </div>
        </div>
    )
}

export default LikesItem