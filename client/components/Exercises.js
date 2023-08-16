import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/styles.css'; 

const Exercises = () => {
    const { id, categoryName} = useParams();
    const [exerciseDetails, setExerciseDetails] = useState([]); // State to store exercise details

    useEffect(() => {
        const fetchExerciseDetails = async () => {
            try {
                const response = await fetch(`https://wger.de/api/v2/exercise/?category=${id}&language=2`);
                const exerciseData = await response.json();
                console.log(exerciseData);
                const equipmentData = {1 : 'barbell', 8 : 'Bench', 3 : 'Dumbbell', 4 : 'Gym mat', 9 : 'Incline bench', 10 : 'Kettlebell', 7 : 'none (bodyweight exercise)', 6 :'Pull-up bar', 5 : 'Swiss Ball', 2 : 'SZ-Bar'}
                // Extract the relevant details from the exerciseData and update state
                const details = exerciseData.results.map(result => ({
                    name: result.name,
                    description: result.description,
                    equipment: equipmentData[Number(result.equipment)],
                }));
                setExerciseDetails(details);
            } catch (error) {
                console.error(`Error fetching exercises for category ${id}:`, error);
            }
        };

        fetchExerciseDetails(); // Call the function to fetch exercise details
    }, [id]); // Include id as a dependency

    return (
        <div className="exercise-container">
            <div className="container">
                <div className="row">
                    <h2>Some of the {categoryName} Workouts That We Recommend</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Equipment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exerciseDetails.map((exercise, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{exercise.name}</td>
                                    <td>{exercise.description}</td>
                                    <td>{exercise.equipment}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Exercises;