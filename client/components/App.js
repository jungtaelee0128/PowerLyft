import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'; // Importing Routes here
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/styles.css';
import NavigationBar from './NavigationBar';
import HeroSection from './HeroNav';
import WorkoutSection from './WorkingOutSection';
import Footer from './Footer';
import Exercises from './Exercises';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavigationBar />
                    <Routes>
                        <Route path="/" element={<div className="content-container"><HeroSection /> <WorkoutSection /></div>} />
                        <Route path="/exercises/:id/:categoryName" element={<div className="content-container"><Exercises /></div>} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
