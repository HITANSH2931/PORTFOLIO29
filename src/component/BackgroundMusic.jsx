import React, { useRef, useState } from "react";
import Love from "../assets/Love.mp3";
import { FaPlay, FaPause } from "react-icons/fa";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); 

  const togglePlay = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      console.log(audio.currentTime,"play");
      audio.play().catch(() => {
        console.log("Autoplay blocked, user needs to interact.");
      });
      setIsPlaying(true);
    } else {
      audio.pause(); 
      console.log(audio.currentTime,"pause");
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={Love} loop /> 
      
      <button
        onClick={togglePlay}
        className="flex items-center space-x-2 bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] fixed bottom-10 right-10 z-50 rounded-full px-5.5 py-3.5 text-white font-bold  shadow-lg"
      >
       <span>{isPlaying ? "Pause" : "Play"}</span>
       {isPlaying ? <FaPause /> : <FaPlay />}

      </button>
    </div>
  );
};

export default BackgroundMusic;
