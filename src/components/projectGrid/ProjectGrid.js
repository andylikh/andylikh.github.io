import React from 'react';
import styles from './ProjectGrid.module.css';
import Tilt from 'react-tilt';

export default function ProjectGrid({ gridData }) {
    return (
        <div className={styles.grid}>
            {gridData?.map(
                ({
                    title = 'Title',
                    slug = '/',
                    logo,
                    // description = 'description',
                    thumbnail,
                    tags = ['']
                }) => (
                    <ProjectCard
                        name={title}
                        link={slug}
                        logo={logo}
                        // description={description}
                        thumbnail={thumbnail}
                        tags={tags}
                    />
                )
            )}
        </div>
    );
}

function ProjectCard({
    name,
    logo,
    link,
    // description,
    imgAlt,
    thumbnail,
    tags
}) {
    return (
        <Tilt
            className={styles.projectCard}
            options={{
                max: 5,
                reverse: true,
                scale: 1.08,
                speed: 700
            }}>
            {/* <a href={link} className={styles.projectCard}> */}

            <a href={link} className={styles.overlay}>
                <Tilt
                    className={styles.glare}
                    options={{
                        max: 100,
                        reverse: false,
                        scale: 1,
                        speed: 700
                    }}></Tilt>
            </a>
            <img src={thumbnail} alt="thumbnail" className={styles.thumbnail} />
            <div className={styles.projectInfo}>
                <img src={logo} alt="prop" className={styles.logo} />
                <h2 className={styles.projectInfoH2}> {name} </h2>
                <ul className={styles.projectInfoP}>
                    {tags.map((tag) => (
                        <li className={styles.tag}>{tag}</li>
                    ))}
                </ul>
            </div>
            {/* </a> */}
        </Tilt>
    );
}
