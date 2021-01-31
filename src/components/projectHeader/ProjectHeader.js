import React from 'react';
import styles from './ProjectHeader.module.css';

export default function ProjectHeader({
    heroImage,
    title,
    tags,
    summary,
    learnings,
    role,
    durations,
    skills
}) {
    return (
        <>
            <img
                src={heroImage}
                alt="hero image"
                className={styles.featuredImage}
            />
            <div className={styles.panel}>
                <h1>{title}</h1>
                <h2>{tags}</h2>
                <div className={styles.details}>
                    <div className={styles.left}>
                        <h3>SUMMARY</h3>
                        <p>{summary}</p>
                        <h3>LEARNINGS</h3>
                        <p>{learnings}</p>
                    </div>
                    <div className={styles.right}>
                        <h3>ROLE</h3>
                        <p>{role}</p>
                        <h3>DURATIONS</h3>
                        <p>{durations}</p>
                        <h3>SKILLS AND TOOLS</h3>
                        <p>{skills}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
