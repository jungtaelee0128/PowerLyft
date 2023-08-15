import React, { useEffect, useState } from 'react';

const WorkoutSection = () => {
    const [categories, setCategories] = useState([]);
    const [categoryImages, setCategoryImages] = useState({});

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

    // ...

    useEffect(() => {
        const fetchCategoryImages = async () => {
            const imageMap = {};

            for (const category of categories) {
                try {
                    const response = await fetch(`https://wger.de/api/v2/exercise/?category=${category.id}`);
                    const exerciseData = await response.json();

                    if (exerciseData.results.length > 0 && exerciseData.results[0].images?.length > 0) {
                        const imageUrl = exerciseData.results[0].images[0]?.image;
                        imageMap[category.name] = imageUrl;
                    }
                } catch (error) {
                    console.error(`Error fetching images for category ${category.name}:`, error);
                }
            }

            setCategoryImages(imageMap);
        };

        if (categories.length > 0) {
            fetchCategoryImages();
        }
    }, [categories]);




    return (
        <section id="workout" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    {categories.map(category => (
                        <div key={category.id} style={styles.container}>
                            <h3>{category.name}</h3>
                            {categoryImages[category.name] && (
                                <img src={categoryImages[category.name]} alt={category.name} style={styles.image} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    container: {
        border: '1px solid black',
        width: '300px',
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 'auto',
        marginTop: '10px',
    },
};

export default WorkoutSection;
