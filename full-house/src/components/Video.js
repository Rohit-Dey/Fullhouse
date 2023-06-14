import React from 'react';
import './VideoComponent.css';

const VideoComponent = (props) => {
   
  return (
    <div className='video-container'>
      <video controls>
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;
