import React, { useState } from 'react';
import LetterViewer from '../../Components/LetterViewer'; // Import LetterViewer component

const Person = ({ textFileName, personName }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url("/Assets/Images/bgmImg.jpg")`, // Set the background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardStyle = {
    width: '600px',
    height: '800px',
    perspective: '1000px',
    overflow: 'auto', // Make the card scrollable
  };

  const cardInnerStyle = {
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
  };

  const cardFrontStyle = {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '100%',
  };

  const cardBackStyle = {
    backgroundColor: '#2E5E6E',
    color: '#ede7e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    backfaceVisibility: 'hidden',
    position: 'absolute',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '100%',
    transform: 'rotateY(180deg)',
  };

  return (
    <div style={pageStyle}>
      <div className="card" style={cardStyle} onClick={handleCardClick}>
        <div className="card-inner" style={cardInnerStyle}>
          <div className="card-front" style={cardFrontStyle}>
            <img src={'/Assets/Images/circle-scatter-haikei.svg'} alt="Front" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} />
          </div>
          <div className="card-back" style={cardBackStyle}>
            {isFlipped && <LetterViewer fileName={textFileName} person={personName} />} {/* Conditionally render LetterViewer component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
