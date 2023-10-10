import React from "react";
import Head from "next/head";
import styles from "../app/page.module.css";
import Script from "next/script";
import TextComponent from "../app/components/TextComponent";
import ImageComponent from "../app/components/ImageComponent";
import Navbar from "../app/components/navbar";
import Footer from '../app/components/footer';
const People = () => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSY Club | People</title>
        <link rel="icon" type="image/x-icon" href="CSC_Logo.ico"></link>
      </Head>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />

      <link
        href="https://fonts.cdnfonts.com/css/cascadia-code"
        rel="stylesheet"
      ></link>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        body {
          font-family: 'Cascadia Code', sans-serif;
            
background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 21%, rgba(0,0,0,1) 26%, rgba(5,17,9,1) 32%, rgba(8,28,14,1) 39%, rgba(10,36,18,1) 45%, rgba(14,49,25,1) 54%, rgba(16,58,30,1) 58%, rgba(19,69,35,1) 65%, rgba(23,82,42,1) 71%, rgba(29,102,53,1) 76%, rgba(32,115,60,1) 81%, rgba(36,128,67,1) 87%, rgba(39,137,72,1) 93%, rgba(39,137,72,1) 100%); 
        }
      `,
        }}
      />
      <Navbar position="fixed" />
      <div className={styles.bg} style={{ fontFamily: 'Cascadia Code, monospace' }}>
        <div
          className={styles.heading}
          style={{ marginTop: "-2rem", color: "rgb(252, 3, 3)" }}
        >
          <div
            className={`${styles.radioGroup} d-flex flex-wrap justify-content-center`}
          ></div>
        </div>
        <br />
        <br />
        <br />
        <TextComponent title="Patrons" />
        <br />
        <ImageComponent
          imageSrc1="/images/director.jpg"
          name1="Dr. Rajiv V Dharaskar"
          namex1="Director, IIIT Kottayam"
          imageSrc2="images/registrar1.jpg"
          name2="Dr. M. Radhakrishnan"
          namex2="Registar, IIIT Kottayam"
          imageSrc3="/images/pic.jpg"
          name3="Prof P. Mohanan"
          namex3="PIC-Academics, IIIT Kottayam"
        />
        <br />
        <ImageComponent
          imageSrc1="/images/ebin1.jpg"
          name1="Dr. Ebin Deni Raj"
          namex1="Associate Dean IIIT Kottayam"
          imageSrc2="/images/panchami1.jpg"
          name2="Dr. Panchami V"
          namex2="HoD, Department of Cyber Security IIIT Kottayam"
          imageSrc3="/images/lavanya.jpg"
          name3="Dr. Lavanya Settipalli"
          namex3="Asst. Professor, Department of Cyber Security IIIT Kottayam"
        />
        <br />


        <TextComponent title="Club Leads" />
        <br />
        <ImageComponent
          imageSrc1="images/tanuj1.jpg"
          name1="Tanuj Karteek Allena"
          imageSrc2="/images/ajay.jpg"
          name2="Ajay Krishna Narayanasetti"
          imageSrc3="/images/priyatham.jpg"
          name3="Priyatham Darisi"
        />
        <br />

        <TextComponent title="Core Team(2021)" />
        <br />
        <ImageComponent
          imageSrc1="/images/akhilesh.jpg"
          name1="Akhilesh"
          imageSrc2="/images/divyesh.jpeg"
          name2="Divyesh"
          imageSrc3="/images/jayant1.jpg"
          name3="Jayant"
        />
        <br />
        <ImageComponent
          imageSrc1="/images/arnav.jpg"
          name1="Arnav"
          imageSrc2="/images/shivani1.jpg"
          name2="Shivani"
          imageSrc3="/images/richa.jpg"
          name3="Richa"
        />
        <br />


        <TextComponent title="Core Team(2022)" />
        <br />
        <ImageComponent
          imageSrc1="/images/gunj.jpg"
          name1="Gunj"
          imageSrc2="/images/sarthak1.jpg"
          name2="Sarthak"
          imageSrc3="/images/abel2.jpg"
          name3="Abel"
        />
        <br />
        <ImageComponent
          imageSrc1="images/vedanta3.jpg"
          name1="Vedanta"
          imageSrc2="/images/shravasthi.jpg"
          name2="Shravasti"
          imageSrc3="images/kaustubh1.jpg"
          name3="Kaustubh"
        />
        <br />
        <ImageComponent
          imageSrc1="/images/purandhar.jpg"
          name1="Purandhar"
          imageSrc2="/images/goutham.jpeg"
          name2="Goutham"
          imageSrc3="/images/gaurav1.jpg"
          name3="Gaurav"
        />
        <br />
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossorigin="anonymous"
        />
      </div>
    </div>
  );
};

export default People;
