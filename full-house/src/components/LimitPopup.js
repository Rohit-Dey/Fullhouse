import React, { useState } from 'react';
import './LimitPopup.css'

const LimitPopup = ({ text }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span>{text}</span>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default LimitPopup;
