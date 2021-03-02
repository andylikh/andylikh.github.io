import React from 'react';
import Skill from '../skill/skill';
import styles from './ProjectHeader.module.css';

export default function ProjectHeader({
    heroImage,
    title,
    tags,
    summary,
    learnings,
    role,
    duration,
    skills
}) {
    console.log(skills);
    return (
        <>
            <div
                // src={heroImage}
                alt="hero image"
                className={styles.featuredImage}
                style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className={styles.panel}>
                <h1>{title}</h1>
                <span className={styles.tags}>{tags}</span>
                <div className={styles.details}>
                    <div className={styles.left}>
                        <h2>SUMMARY</h2>
                        <p>{summary}</p>
                        <h2>LEARNINGS</h2>
                        <p>{learnings}</p>
                    </div>
                    <div className={styles.right}>
                        <h2>ROLE</h2>
                        <p>{role}</p>
                        <h2>DURATION</h2>
                        <p>{duration}</p>
                        <h2>SKILLS AND TOOLS</h2>
                        <div className={styles.skillsList}>
                            {skills?.map((skill) => {
                                return (
                                    <Skill
                                        skillName={skill}
                                        className={styles.skill}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
