import React from 'react';

const FeedItem = ({ index, url }) => {
    return (
        <div style={styles.container}>
            <img
                src={url}
                alt={`Feed Item ${index}`}
                style={styles.image} // Apply styles to the image
            />
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid black',
        height: '100%',
        width: '100%',
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Ensure the image covers the entire container
    },
};

export default FeedItem;
