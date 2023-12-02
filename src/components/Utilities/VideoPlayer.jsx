"use client";

import { XCircle, YoutubeLogo } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const options = {
    width: "300",
    height: "250",
  };

  const onError = (error) => {
    alert("Maaf terjadi kesalahan, silahkan coba lagi nanti.");
  };

  const Player = () => {
    return (
      <div className="fixed bottom-4 right-4">
        <button
          className="float-right p-1 bg-owned-dark-400 bg-opacity-60 text-owned-light-500 mb-1 transition-all"
          onClick={handleVideoPlayer}
        >
          <XCircle size={20} weight="fill" />
        </button>

        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={options}
          onError={(error) => onError(error)}
        />
      </div>
    );
  };

  const OpenPlayerButton = () => {
    return (
      <button
        className="fixed bottom-4 right-4 py-1 px-3 bg-owned-secondary-100 bg-opacity-80 text-owned-light-500 hover:bg-owned-secondary-100 transition-all flex items-center gap-2 text-sm rounded-md"
        onClick={handleVideoPlayer}
      >
        <YoutubeLogo size={28} weight="fill" /> Open Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <OpenPlayerButton />;
};

export default VideoPlayer;
