"use client";
import { createContext, useContext, useState } from "react";

const VideoOverlayContext = createContext({
  videoOverlay: false,
  setVideoOverlay: () => {},
});

export function VideoOverlayProvider({ children }) {
  const [videoOverlay, setVideoOverlay] = useState(false);
  return (
    <VideoOverlayContext.Provider value={{ videoOverlay, setVideoOverlay }}>
      {children}
    </VideoOverlayContext.Provider>
  );
}

export function useVideoOverlay() {
  return useContext(VideoOverlayContext);
}
