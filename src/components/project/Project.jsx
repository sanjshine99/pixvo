import React, { useEffect } from 'react';
import Gallery from './content/Gallery';
import Data from './content/Data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Project() {
  useEffect(() => {
    gsap.utils.toArray('.revealUp').forEach((elem) => {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: 'back',
          scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'bottom 40%',
            markers: false, // Set this to true for debug markers
          },
        }
      );
    });
  }, []);
  return (
    <section className="projectsection" id="about">
      <div className="project__container container">
        <div className="project__content">
          <div className="project__area revealUp">
          <Data />
          </div>
          <div className="projectcard__area revealUp">
          <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project