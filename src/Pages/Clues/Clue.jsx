import React, { useState, useEffect } from 'react';

function Clue({ clueFileName }) {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchClue = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/Assets/Clues/${clueFileName}.txt`);
        const text = await response.text();
        setFileContent(text);
      } catch (error) {
        console.error('Error fetching clue:', error);
      }
    };

    fetchClue();
  }, [clueFileName]);

  return (
    <div style={styles.container}>
      <h1>Treasure Hunt Clue</h1>
      <div style={styles.cluesContainer}>
        <div style={styles.clue}>
          <p>
            {fileContent}
          </p>
        </div>
        {/* Add more clues as needed */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    padding: 20,
    textAlign: 'center',
    background: 'linear-gradient(to right, #64bdf5, #1575b3)',
    fontSize: '35px',
    color: '#560f80',
  },

  cluesContainer: {
    position: 'relative',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
  },
  clue: {
    padding: '10px',
    border: '1px solid #000',
    borderRadius: 5,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default Clue;
