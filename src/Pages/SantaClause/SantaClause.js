import React from 'react';

const SantaClaus = () => {
  return (
    <div style={styles.container}>
      <img src="Assets/Images/santaclaus.jpg" alt="Full Page" style={styles.image} />
      <div style={styles.boxStyle}>Go Back Mother Fucker...</div>
    </div>
  );
};

const styles = {
  boxStyle: {
    position: 'absolute',
    fontSize: '40px',
    top: '50%',
    left: '30%',
    transform: 'translate(-50%, -50%)'
  },
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh', // Full viewport height
    overflow: 'hidden', // Hide any overflow
  },
  image: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Cover the entire container
    transform: 'translate(-50%, -50%)', // Center the image
  },
};

export default SantaClaus;
