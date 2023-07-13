import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Responsive Web Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visually appealing, responsive layouts.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Flexible grid systems for compatibility.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimized images for fast loading.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CSS media queries for screen adaptation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-browser and device testing.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Intuitive and engaging interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Interactive elements and animations.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Accessibility standards compliance.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Pixel-perfect UI implementation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Integration of UI libraries.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Front-end Optimization</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Code and asset optimization.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Minification and compression.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Caching techniques for speed.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Performance audits and improvements.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Image optimization and lazy loading.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
