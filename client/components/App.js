import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/styles.css';
import NavigationBar from './NavigationBar';
import HeroSection from './HeroNav';
import WorkoutSection from './WorkingOutSection'

class App extends Component {
    render() {
        const url = 'http://image-server-prod.eba-jqccpzay.us-west-2.elasticbeanstalk.com/images';
        return (
            <div>
                <NavigationBar />
                <HeroSection /> 
                <WorkoutSection/>
            </div>
        );
    }
}

export default App;
