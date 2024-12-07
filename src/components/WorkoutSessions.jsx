// import React from "react";

// const WorkoutSessions = () => {
//   return (
//     <section className="workout_session">
//       <div className="wrapper">
//         <h1>TOP WORKOUT SESSION</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
//           quisquam. Eaque alias, blanditiis quidem maiores illo unde ipsam!
//         </p>
//         <img src="/img5.jpg" alt="workout" />
//       </div>
//       <div className="wrapper">
//         <h1>FEATURED BOOTCAMPS</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
//           impedit quasi sunt amet rerum accusamus odio eveniet unde?
//         </p>
//         <div className="bootcamps">
//           <div>
//             <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
//               saepe repellendus nemo sit facere ipsam!
//             </p>
//           </div>
//           <div>
//             <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
//               saepe repellendus nemo sit facere ipsam!
//             </p>
//           </div>
//           <div>
//             <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
//               saepe repellendus nemo sit facere ipsam!
//             </p>
//           </div>
//           <div>
//             <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
//               saepe repellendus nemo sit facere ipsam!
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkoutSessions;

import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout-session">
      <div className="workout-wrapper">
        <h1 className="workout-heading">TRANSFORMATIVE WORKOUT SESSIONS</h1>
        <p className="workout-description">
          Unlock your potential with our expertly designed workout sessions. Whether you’re a beginner or a seasoned athlete, we provide tailored programs to help you achieve your fitness goals. Elevate your training experience with cutting-edge equipment and professional guidance.
        </p>
        <img className="workout-img" src="/img5.jpg" alt="Workout Session" />
      </div>
      <div className="workout-wrapper">
        <h1 className="workout-heading">FEATURED BOOTCAMPS</h1>
        <p className="workout-description">
          Push beyond your limits with our high-intensity bootcamps. Experience team-driven energy and motivation in sessions designed to challenge, inspire, and deliver results. Join a bootcamp today and feel the burn!
        </p>
        <div className="bootcamps">
          {[
            {
              title: "Strength & Conditioning",
              description:
                "Build power and endurance through targeted exercises focusing on core stability, strength, and functional movement.",
            },
            {
              title: "Cardio Blast",
              description:
                "Get your heart pumping with this high-energy cardio session designed to burn calories and improve cardiovascular health.",
            },
            {
              title: "Yoga Flow",
              description:
                "Achieve balance and flexibility with guided yoga sessions. Perfect for recovery and mindfulness.",
            },
            {
              title: "HIIT Workouts",
              description:
                "Torch calories with high-intensity interval training. Short, intense bursts of activity followed by brief rest periods.",
            },
          ].map((bootcamp, idx) => (
            <div className="bootcamp-card" key={idx}>
              <h4 className="bootcamp-title">{bootcamp.title}</h4>
              <p className="bootcamp-text">{bootcamp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
