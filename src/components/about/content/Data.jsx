import React, { useEffect, useState } from 'react';
import '../About.css'
import Image from '../../../assets/art.webp'
function Data() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {

    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 0);

    return () => clearTimeout(animationTimeout);
  }, []);
  return (
    <section className="aboutsection" id="about">
      <div className="about__container container">
        <div className="about__content">
        <h1 className={animate ? 'lineUp' : ''}>About</h1>
        <div className="about__area">
            <img src={Image} alt="Art"  id ="aboutimg"/>
            <div className="about__area">
            <p id='text'>
              We are a team of developers and designers with backgrounds in motion graphics,<br/>
              3D modeling and rendering, product design, UI UX, and front end development.</p>
          </div>
          <h2 id='meet'>Meet the team</h2>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Data