// import { Check } from "lucide-react";
// import React from "react";
// import { Link } from "react-router-dom";

// const Pricing = () => {
//   const pricing = [
//     {
//       imgUrl: "/pricing.jpg",
//       title: "QUARTERLY",
//       price: 18000,
//       length: 3,
//     },
//     {
//       imgUrl: "/pricing.jpg",
//       title: "HEAL_YEARLY",
//       price: 34000,
//       length: 6,
//     },
//     {
//       imgUrl: "/pricing.jpg",
//       title: "YEARLY",
//       price: 67000,
//       length: 12,
//     },
//   ];
//   return (
//     <section className="pricing">
//       <h1>ELITE EDGE FITNESS PLANS</h1>
//       <div className="wrapper">
//         {pricing.map((element) => {
//           return (
//             <div className="card" key={element.title}>
//               <img src={element.imgUrl} alt={element.title} />
//               <div className="title">
//                 <h1>{element.title}</h1>
//                 <h1>PACKAGE</h1>
//                 <h3>Rs {element.price}</h3>
//                 <p>For {element.length} Months</p>
//               </div>
//               <div className="description">
//                 <p>
//                   <Check /> Equipment
//                 </p>
//                 <p>
//                   <Check /> All Day Fre Training
//                 </p>
//                 <p>
//                   <Check /> Free Restroom
//                 </p>
//                 <p>
//                   <Check /> 24/7 Skilled Support
//                 </p>
//                 <p>
//                   <Check /> 20 Days Freezing Option
//                 </p>
//                 <Link to={"/"}>Join Now</Link>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Pricing;


import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF-YEARLY",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 67000,
      length: 12,
    },
  ];

  return (
    <section className="pricing">
      <h1 className="pricing-heading">ELITE EDGE FITNESS PLANS</h1>
      <div className="pricing-wrapper">
        {pricing.map((element) => (
          <div className="pricing-card" key={element.title}>
            <img className="pricing-img" src={element.imgUrl} alt={element.title} />
            <div className="pricing-title">
              <h2>{element.title}</h2>
              <h3>PACKAGE</h3>
              <h4>Rs {element.price}</h4>
              <p>For {element.length} Months</p>
            </div>
            <div className="pricing-description">
              <p>
                <Check /> Access to All Equipment
              </p>
              <p>
                <Check /> All-Day Free Training
              </p>
              <p>
                <Check /> Free Restroom Facilities
              </p>
              <p>
                <Check /> 24/7 Skilled Support
              </p>
              <p>
                <Check /> 20-Day Freezing Option
              </p>
              <Link className="join-now-btn" to={"/"}>
                Join Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
