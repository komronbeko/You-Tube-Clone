import React, { useContext } from "react";
import { ContextApi } from "../../context/context";
import "./RecommendedViideos.css";
import Media from "../Media/Media";

export const RecommendedVideos = ({ videoCards }) => {
  const { relatedToSidebar } = useContext(ContextApi);
  return (
    <div
      className={`recommnededVideos ${
        relatedToSidebar.sideBar ? "recommnededVideos-1" : "recommnededVideos-2"
      }`}
    >
      {videoCards.map((video) => {
        return (
          
          <Media
            id={video.id.videoId}
            title={video.snippet.title}
            imgSrc={video.snippet.thumbnails.high.url}
            channelTitle={video.snippet.channelTitle}
          />
        );
      })}
    </div>
  );
};
