import React from 'react';

const TreasureHuntInstructions = () => {
    const styles = {
        container: {
            backgroundColor: 'transparent',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            padding: '20px',
            width: '1000px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#333',
        },
        instructions: {
            color: '#000',
            lineHeight: '1.6',
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Treasure Hunt Instructions</h2>
            <div style={styles.instructions}>
                <p>1. This Treasure Hunt is exclusively tailored for you.</p>
                <p>2. Your mission? Follow the clues to uncover the mystery person they point to.</p>
                <p>3. But hold on a second. Think it's going to be a breeze? Let's dial up the challenge just a notch.</p>
                <p>4. You're currently at the home page{`('/')`}. Now, try adding '/santaclause' at the end of the website's URL. Voila! You're off to a new page. This nifty trick is called Routing. this enables multiple webpages on one site.</p>
                <p>5. Your task is straightforward. Picture this: you're at the home page, eager to reach the first clue. Just append '/clue1' at the end of the URL. Easy Peasy!</p>
                <p>6. Once you've cracket the mystery person's name hinted by the clue, add '/name' to the URL for a surprise.</p>
                <p>7. Found your surprise? Ready for the next challenge? Simply add '/clue' followed by the next clue number.</p>
                <p>8. Wishing you a fabulous Birthday and good luck on your adventure!! Time to embark on the quest. Happy Hunting!</p>
            </div>
        </div>
    );
};

export default TreasureHuntInstructions;
