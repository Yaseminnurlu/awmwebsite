import React, { useState } from 'react';
import './Contact.css';

const ContactInfo = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            // You can add API call here to save the email to a database or list
            setEmail(''); // Reset email input after subscription
        }
    };

    return (
        <div className="contact-info-container">
            <h2>Contact Us</h2>

            <div className="contact-details">
                <p><strong>Email:</strong> <a href="mailto:buawmchapter@gmail.com">buawmchapter@gmail.com</a></p>
                <p><strong>Instagram:</strong> <a href="https://instagram.com/bu.awm" target="_blank" rel="noopener noreferrer">@bu.awm</a></p>
            </div>

            <div className="email-signup">
                <h3>Sign up for our email list</h3>
                {isSubscribed ? (
                    <p>Thank you for subscribing!</p>
                ) : (
                    <form onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactInfo;
