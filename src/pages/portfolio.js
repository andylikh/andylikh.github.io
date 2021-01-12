import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ProjectGrid from '../components/projectGrid/ProjectGrid';

export default function Portfolio() {
    return (
        <div style={{ color: `teal` }}>
            <Navbar />
            <ProjectGrid />
        </div>
    );
}
