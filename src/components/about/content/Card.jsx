import React from 'react';
import '../About.css';
import TaskMaster from '../../../assets/avatar/TaskMaster.png';
import Gatekeeper from '../../../assets/avatar/GateKeeper.png';
import StrategySage from '../../../assets/avatar/Strategy Sage.png';
import WanderingWizard from '../../../assets/avatar/Wandering Wizard.png';
import PixelPicasso from '../../../assets/avatar/Pixel Picasso.png';

function Card() {
  return (
    <section className="about__container">
      <div className="card__grid_about">
      <div className="card__about">
        <div className="about__content">
          <img src={TaskMaster} alt="" className="avatar" />
          <h6>Taskmaster</h6>
          <div className="hover_content">
            <p>
              The Taskmaster is a dynamic force within the team, orchestrating
              and optimizing operations with precision and finesse. With his
              keen eye for detail and exceptional organizational skills, he
              ensures that tasks are efficiently executed, deadlines are met,
              and objectives are achieved. He is the driving force behind
              seamless processes and effective coordination.
            </p>
          </div>
        </div>
      </div>
      <div className="card__about">
        <div className="content">
          <img src={Gatekeeper} alt="" className="avatar" />
          <h6>Gatekeeper</h6>
          <div className="hover_content">
            <p>
              The Gatekeeper is the guardian of order and compliance within the
              team. Armed with her extensive knowledge of administrative and
              legal matters, she safeguards the team's interests, ensuring that
              all documentation, contracts, and procedures adhere to regulations
              and best practices. She provides a solid foundation of structure
              and reliability, acting as a gatekeeper to protect the team's
              integrity.
            </p>
          </div>
        </div>
      </div>
      <div className="card__about">
        <div className="content">
          <img src={StrategySage} alt="" className="avatar" />
          <h6>Strategy Sage</h6>
          <div className="hover_content">
            <p>
              The Strategy Sage is the guiding light of the team, with a wealth
              of knowledge and experience in management and business
              development. She possess a strategic mindset, capable of
              analyzing market trends, identifying growth opportunities, and
              formulating effective strategies. With her visionary outlook and
              leadership acumen, She chart the team's path to success,
              navigating through challenges and propelling growth.
            </p>
          </div>
        </div>
      </div>
      <div className="card__about">
        <div className="content">
          <img src={WanderingWizard} alt="" className="avatar" />
          <h6>Wandering Wizard</h6>
          <div className="hover_content">
            <p>
              The Wandering Wizard is the team member dedicated to bridging gaps
              and fostering connections between countries and cultures. He
              possesses a global perspective and serves as a catalyst for
              international collaboration and partnerships. With his diplomatic
              skills and cultural sensitivity, he traverses borders, breaking
              down barriers, and fostering mutual understanding, ultimately
              bringing diverse communities together.
            </p>
          </div>
        </div>
      </div>
      <div className="card__about">
        <div className="content">
          <img src={PixelPicasso} alt="" className="avatar" />
          <h6>Pixel Picasso</h6>
          <div className="hover_content">
            <p>
              The Pixel Picasso is the creative visionary of the team, with an
              unmatched passion for design and visual storytelling. Armed with a
              digital brush, he breathes life into concepts and ideas, crafting
              stunning and captivating graphics that leave a lasting impression.
              His artistic prowess and innovative thinking make them the go-to
              expert for transforming ideas into visually striking realities.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Card;
