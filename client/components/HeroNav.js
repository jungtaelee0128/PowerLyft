import React from 'react';
import mainPic from '../assets/workoutcat.png';

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                        <h1>Curate your own personal workout</h1>
                        <h2>OVER 20,000 WORKOUTS TO CHOOSE FROM</h2>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <a href="#about" className="btn-get-started">Get Started</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img">
                        <img src={mainPic} alt="Main Cat" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
