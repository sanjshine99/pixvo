import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import quotes from '../../../assets/icons/quote.png';

function Data() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {

    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 0);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className="data__area">
      <h1 className={animate ? 'lineUp' : ''}>Pixvo Studio</h1>
      <div className="quote">
        <img src={quotes} alt="" id='quotes' />
        <p className='para__title'>Elevating Designs to New Heights:</p>
        <p className='para__content'>Immerse Yourself in our Dynamic Portfolio Showcasing our Artistry.</p>
      </div>
      <div className="buttons">
        <Link to="/about">
          <button>About Us</button>
        </Link>
        <Link to="/project">
          <button>Our Work</button>
        </Link>
      </div>
    </div>
  );
}

export default Data;
