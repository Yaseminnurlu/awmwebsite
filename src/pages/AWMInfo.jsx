import React from "react";
import "./AWMInfo.css"
const AWMInfo = () => {
    return (
        <div className="awm-info">
            <h3 id="about">
                Welcome to the BU Chapter of the Association for Women in Mathematics (AWM)!
                Our mission is to build a supportive and inclusive community where women and gender minorities can thrive in their mathematical journeys. Whether you're solving integrals, exploring mathematical theory, or just starting out, AWM is here to support you every step of the way!
            </h3>
            <h4>What we do:</h4>
            <div id="events">
                <ul>
                    <li>Meetings: to connect with peers and mentors.</li>
                    <li>Resume reviews and career workshops to help you professionally.</li>
                    <li>Class help sessions for tackling tough problems together.</li>
                    <li>Social events to bond, network, and celebrate our love for math!</li>
                </ul>
            </div>
            <h3>
                Join us as we promote equitable opportunities, celebrate diversity, and empower each other in the mathematical sciences. All math enthusiasts are welcome!
            </h3>
        </div>
    );
};

export default AWMInfo;
