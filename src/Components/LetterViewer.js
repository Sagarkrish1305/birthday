import React, { useState, useEffect } from 'react';

const LetterViewer = ({ fileName, person }) => {
  const [letterContent, setLetterContent] = useState('');

  useEffect(() => {
    // Function to fetch the letter content from a text file
    const fetchLetterContent = async () => {
      try {
        const response = await fetch('/Assets/Letters/' + fileName + '.txt'); // Adjust the path accordingly
        const text = await response.text();
        setLetterContent(text);
      } catch (error) {
        console.error('Error fetching letter content:', error);
      }
    };

    fetchLetterContent(); // Call the function
  }, [fileName]);
 
  // Tokenize the letter content by splitting it into an array of lines
  const lines = letterContent.split('\n');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', lineHeight: '1.5', padding: '20px', maxHeight: '600px', overflowY: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', alignSelf: 'flex-start' }}>Letter from {person}</h2>
      {lines.map((line, index) => (
        // Render each line as a separate <p> tag with proper indentation
        <p key={index} style={{ textIndent: '30px', margin: '10px 0', whiteSpace: 'pre-wrap' }}>{line}</p>
      ))}
    </div>
  );
};

export default LetterViewer;
