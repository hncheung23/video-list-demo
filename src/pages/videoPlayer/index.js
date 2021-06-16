import React from "react";
import { ReactVideo } from "reactjs-media";
import { useLocation } from 'react-router-dom'

const VideoPlayer = () => {

  const location = useLocation()
  const { state } = location
  const streamingURL = state
  return (  
    <div>
      <ReactVideo
        src={streamingURL}
        primaryColor="blue"
        // other props
      />
    </div>
  );
};

export default VideoPlayer