// import axios from "axios";
// import React, { useState } from "react";
// import { ClipLoader } from "react-spinners";
// import { toast } from "react-toastify";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMail = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/send/mail",
//         {
//           name,
//           email,
//           message,
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       setName("");
//       setEmail("");
//       setMessage("");
//       toast.success(data.message);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <section className="contact">
//       <form onSubmit={sendMail}>
//         <h1>CONTACT US</h1>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Message</label>
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "15px",
//           }}
//         >
//           {loading && <ClipLoader size={20} color="white" />}
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
// import "../styles/App.css"; // Ensure this path matches your file structure

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/send/mail",
        {
          name,
          email,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <form onSubmit={sendMail} className="contact-form">
          <h1 className="contact-heading">Get in Touch</h1>
          <p className="contact-description">
            Have any questions or concerns? Drop us a message and we'll get back to you!
          </p>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading && <ClipLoader size={20} color="white" />} Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

