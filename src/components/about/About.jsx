import React, { useEffect } from 'react';
import './About.css';
import Data from './content/Data';
import Card from './content/Card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function About() {
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
    <section className="aboutsection" id="about">
      <div className="about__container container">
        <div className="about__content">
          <div className="about__area revealUp">
            <Data />
          </div>
          <div className="aboutcard__area revealUp">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
