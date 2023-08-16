import React from 'react';
import '../styles/styles.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <p>&copy; 2023 PowerLyft. All rights reserved.</p>
                    {/* <div className="social-links">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
