import React from "react";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

const Contact = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSY Club | Contact</title>
        <link rel="icon" type="image/x-icon" href="CSC_Logo.ico" />
      </Head>

      <style jsx global>{`
        body {
          font-family: 'Cascadia Code', 'Courier New', 'monospace';
          background-image: url("background.png");
          background-size: cover;
          background-repeat: no-repeat;
        }

        .contact-container, .contact-details, .contact-details p, .contact-details h1 {
          color: white;
        }
      `}</style>

      <Navbar position="fixed" />

      <div className="contact-container">
        <div className="contact-details">
          <h1>Contact Us</h1>
          <p>Email: csyclub@iiitkottayam.ac.in</p>
          <p>Phone: +91-0482-2202189</p>
          <p style={{maxWidth: "350px", margin: "0 auto"}}>Address: Indian Institute of Information Technology Kottayam,

            Valavoor P O, Pala, Kottayam, Kerala, India - 686635</p>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.1280472255976!2d76.6474769742105!3d9.755219877200442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07ce23bc170053%3A0x8757971e61eb21dd!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Kottayam!5e0!3m2!1sen!2sin!4v1690775888087!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <style jsx>{`
        .contact-container {
          display: flex;
          flex-wrap: wrap;
          margin: 130px;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-details { 
          padding: 20px;
          text-align: center;
        }

        .map {
          flex: 1;
          height: 450px;
          margin-top: 20px;
          transform: translate(-15px, -15px);
        }

        @media (min-width: 768px) {
          .contact-container {
            padding-top: 130px; 
            flex-direction: row;
          }

          .contact-details {
            flex: 1 0 50%; 
            padding-right: 20px;
          }

          .map {
            flex: 1 0 50%; 
            margin-top: 0;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Contact;
