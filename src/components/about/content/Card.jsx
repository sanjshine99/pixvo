// Card.js
import React from 'react';
import '../About.css';
import TaskMaster from '../../../assets/avatar/TaskMaster.png'
import Gatekeeper from '../../../assets/avatar/GateKeeper.png'
import StrategySage from '../../../assets/avatar/Strategy Sage.png'
import WanderingWizard from '../../../assets/avatar/Wandering Wizard.png'
import PixelPicasso from '../../../assets/avatar/Pixel Picasso.png'

function Card() {
  return (
    <div className="card__grid_about">
      <div className="card__about">
        <img src={TaskMaster} alt="" className='avatar'/>
        <h2>Taskmaster</h2><br/>
The Taskmaster is a dynamic force within the team, orchestrating and optimizing operations with precision and finesse. With his keen eye for detail and exceptional organizational skills, he ensures that tasks are efficiently executed, deadlines are met, and objectives are achieved. He is the driving force behind seamless processes and effective coordination.</div>
      <div className="card__about">
      <img src={Gatekeeper} alt="" className='avatar'/>
        <h2>Gatekeeper</h2><br/>
The Gatekeeper is the guardian of order and compliance within the team. Armed with her extensive knowledge of administrative and legal matters, she safeguards the team's interests, ensuring that all documentation, contracts, and procedures adhere to regulations and best practices. She provides a solid foundation of structure and reliability, acting as a gatekeeper to protect the team's integrity.</div>
      <div className="card__about">
      <img src={StrategySage} alt="" className='avatar'/>
        <h2>Strategy Sage</h2><br/>
The Strategy Sage is the guiding light of the team, with a wealth of knowledge and experience in management and business development. She possess a strategic mindset, capable of analyzing market trends, identifying growth opportunities, and formulating effective strategies. With her visionary outlook and leadership acumen, She chart the team's path to success, navigating through challenges and propelling growth.</div>
      <div className="card__about">
      <img src={WanderingWizard} alt="" className='avatar'/>
        <h2>Wandering Wizard</h2><br/>
The Wandering Wizard is the team member dedicated to bridging gaps and fostering connections between countries and cultures. He possesses a global perspective and serves as a catalyst for international collaboration and partnerships. With his diplomatic skills and cultural sensitivity, he traverses borders, breaking down barriers, and fostering mutual understanding, ultimately bringing diverse communities together.</div>
      <div className="card__about">
      <img src={PixelPicasso} alt="" className='avatar'/>
        <h2>Pixel Picasso</h2><br/>
The Pixel Picasso is the creative visionary of the team, with an unmatched passion for design and visual storytelling. Armed with a digital brush, he breathes life into concepts and ideas, crafting stunning and captivating graphics that leave a lasting impression. His artistic prowess and innovative thinking make them the go-to expert for transforming ideas into visually striking realities.</div>
    </div>
  );
}

export default Card;
