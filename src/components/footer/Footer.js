import React from 'react';
import './Footer.css'; // Importing CSS for styling

const Footer = () => {
    return (
        <footer className="footer" style={{ background: 'linear-gradient(to right, #4CAF50, #81C784)' }}>
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>Phone: +123 456 7890</p>
                    <p>Email: contact@example.com</p>
                </div>
                <div className="footer-column">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="footer-column">
                    <h3>Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <p>Facebook | Twitter | Instagram</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
