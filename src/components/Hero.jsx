// import React from "react";

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="content">
//         <div className="title">
//           <h1>LET'S</h1>
//           <h1>GET</h1>
//           <h1>MOVING</h1>
//         </div>
//         <div className="sub-title">
//           <p>Your Journey to Fitness Starts Here</p>
//           <p>Unleash Your Potential</p>
//         </div>
//         <div className="buttons">
//           <button>Start Your Journey</button>
//           <button>Discover Your Plan</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-title">
          <h1 className="hero-text">LET'S</h1>
          <h1 className="hero-text">GET</h1>
          <h1 className="hero-text">MOVING</h1>
        </div>
        <div className="hero-subtitle">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="hero-buttons">
          <button className="btn primary-btn">Start Your Journey</button>
          <button className="btn secondary-btn">Discover Your Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

