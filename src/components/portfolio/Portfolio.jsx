import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
    const data = [
        {
            id: 1,
            image: IMG1,
            title: "data visualization and charts templates for Figma",
            github: "https://github.com",
            demo: "https://dribbble.com/shots/21895539-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
        },
        {
            id: 2,
            image: IMG2,
            title: "Set of widgets and blocks with charts of all types",
            github: "https://github.com",
            demo: "https://dribbble.com/shots/21895152-Funnel-graphs-Hyper-charts-UI-Kit",
        },
        {
            id: 3,
            image: IMG3,
            title: "Hyper charts UI Kit",
            github: "https://github.com",
            demo: "https://dribbble.com/shots/21895092-Library-of-all-types-of-bar-graphs-Hyper-charts-UI-Kit",
        },
        {
            id: 4,
            image: IMG4,
            title: "Huge library of all kinds of charts and data visualization",
            github: "https://github.com",
            demo: "https://dribbble.com/shots/21894936-Huge-library-of-all-kinds-of-charts-and-data-visualization",
        },
        {
            id: 5,
            image: IMG5,
            title: "Visualizing global data on the dashboard",
            github: "https://github.com",
            demo: "https://dribbble.com/shots/21895242-Visualizing-global-data-on-the-dashboard",
        },
        {
            id: 6,
            image: IMG6,
            title: "Largest library of chart components ✦ Hyper charts",
            github: "https://github.com",
            demo: "https://dribbble.com/shots/21850743-Largest-library-of-chart-components-Hyper-charts",
        }
    ];

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
