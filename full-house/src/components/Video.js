import React from 'react';
import './VideoComponent.css';

const VideoComponent = () => {
    const vidpath = require('../videos/puppy.mp4')
  return (
    <div className='video-container'>
      <video controls>
        <source src={vidpath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;
