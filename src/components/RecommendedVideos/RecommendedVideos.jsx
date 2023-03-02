import React, { useContext } from "react";
import { ContextApi } from "../../context/context";
import "./RecommendedViideos.css"

export const RecommendedVideos = ({ videoCards }) => {
  const {relatedToSidebar} = useContext(ContextApi)
  return (
    <div className={`recommnededVideos ${relatedToSidebar.sideBar ? "recommnededVideos-1" : "recommnededVideos-2"}`}>
      {videoCards.map((video) => (
        <div key={video.id.videoId} className={`videos ${relatedToSidebar.sideBar ? "videos-1" : "videos-2"}`}>
          <img src={video.snippet.thumbnails.high.url} alt="" />
          <h4>{video.snippet.title}</h4>
        </div>
      ))}
    </div>
  );
};
