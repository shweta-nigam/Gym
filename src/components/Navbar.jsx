// import React from "react";

// const Navbar = () => {
//   return (
//     <header>
//       <p>ELITE EDGE FITNESS</p>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-logo">GYM FIT</h1>
        <nav className="navbar-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
