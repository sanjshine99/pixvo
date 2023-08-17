import React, { useState } from 'react';
import '../Project.css';
import close from '../../../assets/icons/close.png'
import zero from '../../../assets/project_images/zero.png'

function Gallery() {
  const [isSoraIframeVisible, setIsSoraIframeVisible] = useState(false);
  const [isZeroIframeVisible, setIsZeroIframeVisible] = useState(false);
  const [isBlurBackground, setIsBlurBackground] = useState(false);

  const handleSoraDropdownClick = () => {
    setIsSoraIframeVisible(!isSoraIframeVisible);
  };

  const handleZeroDropdownClick = () => {
    setIsZeroIframeVisible(!isZeroIframeVisible);
  };

  const handleCloseClick = () => {
    setIsSoraIframeVisible(false);
    setIsZeroIframeVisible(false);
    setIsBlurBackground(false);
  };

  return (
        <div className={`page-container ${isBlurBackground ? 'blur-background' : ''}`}>      
        <div className="gallery-container">
        <div>
          <h1 className='project_title'>Sora no misu<div className="dropdown-header" onClick={handleSoraDropdownClick}>
       | Brand Guidelines |
      </div></h1>
          <div className="dropdown-container">
      
      {isSoraIframeVisible && (
        <div div className={`iframe-popup ${isBlurBackground ? 'active' : ''}`}>
          <button className="close-button" onClick={handleCloseClick}>
                  <img src={close} className='close-button' alt='close'  />
                </button>
          <iframe 
            title="Sora no misu Brand Identity"
            src="https://www.behance.net/gallery/176682977/Sora-no-misu-Brand-Identity?iframe=1&amp;ilo0=1"            
            width="1920"
            height="1080"  
            frameBorder="0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            style={{ border: 'none', maxWidth: '100%',maxHeight: '100%',borderRadius: '20px' }}
          ></iframe>
        </div>
      )}
             </div>
          <p className='project_desc'>
            " 空の水 " (sora no mizu) is a Japanese phrase that translates to "water of the sky" or "sky water" in
            English. This phrase is often used metaphorically to describe something that is impossible or
            non-existent, much like water in the sky, which doesn't naturally occur as a liquid. It indicates a
            situation where there is a lack or absence of something essential or expected. 
            In the journey of life,<br /> amidst the most unforeseen circumstances, miracles can happen. Just like a
            sudden rain shower that brings water to the parched earth, sometimes the seemingly impossible can
            become possible. The phrase '空の水' serves as a reminder that hope and perseverance can lead to
            unexpected breakthroughs, turning what once seemed impossible into a reality. It is a testament to the
            human spirit's resilience and ability to overcome challenges, ultimately finding the water of the sky –
            a symbol of abundance and fulfillment in even the most unlikely places.
          </p>
          <div className="image-container">
            <div className="big-image">
              <iframe
                title="Sora no misu"
                frameborder="0"
                allowfullscreen
                height={400}
                width={1080}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/ec7ac6f583594caa8475cdb0f7d9699d/embed"
                style={{ borderRadius: '20px' }}
              ></iframe>
            </div>
         <hr />
          </div>
         
        </div>
      
      <hr></hr>

        <div>
          <h1 className='project_title'>Studio ZRO°<div className="dropdown-header" onClick={handleZeroDropdownClick}>
       | Brand Guidelines |
      </div></h1>
          <div className="dropdown-container">
      
      {isZeroIframeVisible && (
        <div div className={`iframe-popup ${isBlurBackground ? 'active' : ''}`}>
          <button className="close-button" onClick={handleCloseClick}>
                  <img src={close} className='close-button' alt='close' />
                </button>
          <iframe 
            title="Studio ZRO"
            src="https://www.behance.net/gallery/177842269/Studio-ZRO?iframe=1&amp;ilo0=1"            
            width="1920"
            height="1080"  
            frameBorder="0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            style={{ border: 'none', maxWidth: '100%',maxHeight: '100%',borderRadius: '20px' }}
          ></iframe>
        </div>
      )}
             </div>
          <p className='project_desc'>
            ZRO<sup>o</sup> Studio is an avant-garde architectural firm renowned for its innovative interpretations of brutalist 
            architecture rooted in the Swiss alpine context.With a team of visionary architects, sculptors, and material artisans, 
            the studio specializes in crafting austere yet captivating architectural statements that harmonize with the rugged Swiss 
            landscape while evoking a sense of timeless grandeur.
          </p>
          <div className="image-container">
            <div className="big-image">
              <img src={zero} alt="zero" className='big-image' onClick={handleZeroDropdownClick} />
            </div>
         <hr />
          </div>
         
        </div>
       
      </div>
    
    </div>
  );
}

export default Gallery;
