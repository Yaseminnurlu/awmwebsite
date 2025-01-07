import React from "react";
import{ useState } from "react";
import { motion } from 'framer-motion';  // Importing motion from Framer Motion
import member1 from './photo/yasemin.jpg';
import './EBoard.css';
const MeetTheEboard = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const eboardMembers = [
        {
            name: 'Yasemin Nurluoglu',
            role: 'Co-President',
            bio: 'Yasemin is dedicated to empowering women in math and promoting diversity.',
            image: member1,
        },
        {
            name: 'Lakshya Venkatesh',
            role: 'Co-President',
            bio: 'Yasemin is dedicated to empowering women in math and promoting diversity.',
            image: '',
        },
        {
            name: 'Anastasiia Kon',
            role: 'Vice President',
            bio: 'Jane works towards building an inclusive and supportive environment for students.',
            image: 'link-to-image.jpg'
        },
        {
            name: 'Jodi Yu',
            role: 'Treasurer',
            bio: 'Jane works towards building an inclusive and supportive environment for students.',
            image: 'link-to-image.jpg'
        },
        {
            name: 'Emily Egan',
            role: 'Social Media Manager',
            bio: 'Jane works towards building an inclusive and supportive environment for students.',
            image: 'link-to-image.jpg'
        },
        {
            name: 'Sarah Datta',
            role: 'Outreach Chair',
            bio: 'Jane works towards building an inclusive and supportive environment for students.',
            image: 'link-to-image.jpg'
        }
    ];

    const handleCardClick = (member) => {
        setSelectedMember(member); // Open modal with member details
    };

    return (
        <div className="Wrap">
            <h2 id="title">Meet the Eboard</h2>
            <div className="eboard-member">
                {eboardMembers.map((member, index) => (
                    // Wrap the card in motion.div to apply the animation
                    <motion.div
                        key={index}
                        className="eboard-card"
                        onClick={() => handleCardClick(member)}
                        whileHover={{scale: 1.05}} // On hover, scale the card
                        transition={{type: 'spring', stiffness: 300}} // Spring transition for smooth scaling
                    >
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <img src={member.image} alt={member.name} style={{width: '10%'}}/>

                    </motion.div>
                ))}
            </div>

            {/* Modal to show more details */}
            {selectedMember && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setSelectedMember(null)}>&times;</span>
                        <h2>{selectedMember.name}</h2>
                        <p>{selectedMember.role}</p>
                        <p>{selectedMember.bio}</p>
                        <img src={selectedMember.image} alt={selectedMember.name} style={{width: '20%'}}/>

                    </div>
                </div>
            )}
        </div>
    );
};

export default MeetTheEboard;
