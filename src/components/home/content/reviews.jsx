import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../Home.css'; // Import your CSS file

function Reviews() {
  return (
    <div className="wrapper">
      <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay interval={5000}>
        <div className="slide__item">
          <h2 className="slide__heading">★★★★✰</h2>
          <blockquote>
            <p className="slide__quote">"Working with the creative wizards at this studio was an absolute delight! Their branding expertise gave our business a fresh new look that perfectly encapsulated our values. Our brand identity has been elevated to a whole new level of excellence."</p>
            <cite className="slide__cite">- Sarah Thompson</cite>
          </blockquote>
        </div>
        <div className="slide__item">
          <h2 className="slide__heading">★★★✰✰</h2>
          <blockquote>
            <p className="slide__quote">"The work by the team at this creative studio is incredible. Their ability to capture our brand essence and translate it into visually stunning designs is truly remarkable. Adding to that, the motion graphics they produced added a whole new dimension to our online presence, making our content engaging and shareable. Our business now stands out with a unique and cohesive brand identity that resonates with our audience. Kudos to the studio for their top-notch creativity and professionalism!"</p>
            <cite className="slide__cite">- Michael Chen </cite>
          </blockquote>
        </div>
        <div className="slide__item">
          <h2 className="slide__heading">★★★★✰</h2>
          <blockquote>
            <p className="slide__quote"> "A sincere thank you to the creative geniuses behind this studio! The attention to detail and dedication they put into understanding our vision resulted in branding that truly reflects who we are. If you're seeking a partner to enhance your brand identity, look no further"</p>
            <cite className="slide__cite">- Lakmal Perera</cite>
          </blockquote>
        </div>
      </Carousel>
    </div>
  );
}

export default Reviews;
