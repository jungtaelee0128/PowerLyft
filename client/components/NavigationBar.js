import React from 'react';

const NavigationBar = () => {
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a href="/">PowerLyft</a></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link active" href="/">Home</a></li>
                        <li><a className="nav-link" href="/#workout">Workout</a></li>
                        <li><a className="nav-link" href="/#services">Tracker</a></li>
                        <li><a className="getstarted" href="#about">Get Started</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}

export default NavigationBar;
