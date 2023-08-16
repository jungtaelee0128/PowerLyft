import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeedItem = ({ index, url, categoryName, id }) => {
    const navigate = useNavigate();

    const handleClick = (id, categoryName) => {
        navigate(`/exercises/${id}/${categoryName}`); // Add categoryName to the URL
    };

    return (
        <button style={styles.container} onClick={() => handleClick(id, categoryName)}>
            <img
                src={url}
                alt={`Feed Item ${index}`}
                style={styles.image} 
            />
            <h3 style={styles.textBottom}>{categoryName.toUpperCase()}</h3>
        </button>
    );
};
const styles = {
    container: {
        border: '1px solid black',
        width: '300px',
        height: '300px', 
        margin: '10px',
        position: 'relative', 
        backgroundColor: 'white',
        textAlign: 'center',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)', 
    },
    image: {
        width: '100%',
        height: 'auto',
        marginTop: '10px',
    },
    textBottom: {
        position: 'absolute',
        bottom: '10px',
        left: '0', 
        width: '100%',
        textAlign: 'center',
        textTransform: 'uppercase', 
        // fontWeight: 'bold', 
    }
};

export default FeedItem;
