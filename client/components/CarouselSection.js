import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mainPic1 from '../assets/workoutcat.png';
import mainPic2 from '../assets/workoutcat.png';
import mainPic3 from '../assets/workoutcat.png';
import mainPic4 from '../assets/workoutcat.png';
import mainPic5 from '../assets/workoutcat.png';
import mainPic6 from '../assets/workoutcat.png';

const Slideshow = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const images = [
        mainPic1,
        mainPic2,
        mainPic3,
        mainPic4,
        mainPic5,
        mainPic6,
    ];

    return (
        <section id="workout" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="search">
                            <i className="fa fa-search"></i>
                            <input type="text" className="form-control" placeholder="Look up your Favorite Workouts" />
                            <button className="btn btn-primary">Search</button>
                        </div>
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                        >
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slideshow;
