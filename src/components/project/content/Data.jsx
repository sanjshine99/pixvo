import React, { useEffect, useState } from 'react';
import '../Project.css'
function Data() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {

    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 0);

    return () => clearTimeout(animationTimeout);
  }, []);
  return (
    <section className="projectsection" id="service">
      <div className="project__container container">
        <div className="project__content">
        <h1 className={animate ? 'lineUp' : ''}>Projects</h1>
        <div className="project__area">
            <p>
            Hello and welcome to our Projects! Discover captivating brand stories that highlight our commitment to creativity and innovation. As we redefine branding excellence one project at a time, let our work speak for itself. Have fun on your journey!            </p>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Data