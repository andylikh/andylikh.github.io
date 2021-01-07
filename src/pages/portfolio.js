import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar/Navbar';
import ProjectGrid from '../components/projectGrid/ProjectGrid';

export default function Portfolio() {
    return (
        <div style={{ color: `teal` }}>
            <Navbar />
            <Header>Hi, I'm Andy</Header>
            <p>This is a list of my projects</p>
            <ProjectGrid />
        </div>
    );
}
