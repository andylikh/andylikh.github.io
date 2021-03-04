import React from 'react';

const imageMap = {
    figma: '/images/skills/icon_figma.png',
    system:
        'https://cdn2.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-7/24/Untitled-8-512.png'
};

export default function Skill({ skillName, className }) {
    return (
        <div className={className}>
            <img src={imageMap[skillName.toLowerCase()]} />
            <p>{skillName}</p>
        </div>
    );
}
