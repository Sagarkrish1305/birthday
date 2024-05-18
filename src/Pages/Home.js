import React, { useState } from 'react';
import ThreeScene from '../Components/ThreeJs/ThreeScene';
import TreasureHuntInstructions from '../Components/Instructions/TreasureHuntInstructions';
import Button from '../Components/Button/Button';

export default function Home() {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    return (
        <div style={{ position: 'relative' }}>
            <div style={canvasContainerStyle}>
                <ThreeScene />
            </div>
            <div style={buttonStyle}>
                <Button onClick={toggleVisibility} />
            </div>
            {visibility && (
                <div style={overlayStyle}>
                    <TreasureHuntInstructions />
                </div>
            )}
        </div>
    );
}

const canvasContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1, // Ensure it's below everything
    width: '100%',
    height: '100%',
};

const buttonStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    zIndex: 2, // Ensure the button is above the canvas
};

const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '11%',
    // transform: 'translate(-50%, -50%)',
    zIndex: 1, // Ensure it's above the canvas but below the button
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
};
