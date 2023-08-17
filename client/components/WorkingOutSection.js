import React, { useEffect, useState } from 'react';
import FeedItem from './FeedItem';
import '../styles/styles.css';
import gymCat from '../assets/gymcat.png';

const WorkoutSection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://wger.de/api/v2/exercisecategory/')
            .then(response => response.json())
            .then(data => {
                setCategories(data.results);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    return (
        <section id="workout" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="bold-heading">
                        <h2> Browse Through Different Exercises </h2>
                    </div>
                    {categories.map((category)=> (
                        <FeedItem
                            key={category.id}
                            url={gymCat}
                            categoryName={category.name}
                            id={category.id}
                        />
                    ))}
                    <div style={styles.buttonContainer}>
                        <button style={styles.seeMoreButton}>See More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    seeMoreButton: {
        fontFamily: "Jost, sans-serif",
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '1px',
        display: 'inline-block',
        padding: '8px', // Adjusted padding for shorter width
        width: '150px', // Set a fixed width
        borderRadius: '50px',
        transition: 'background-color 0.5s',
        backgroundColor: '#47b2e4',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center', // Center the button horizontally
        marginTop: '10px', // Adjust spacing as needed
    },
};

export default WorkoutSection;
