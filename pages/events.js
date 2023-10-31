"use client"
import styles from '../app/page.module.css';
import Head from 'next/head';
import Script from 'next/script';
import MediaComponent from '../app/components/MediaComponent';
import MediaComponent2 from '../app/components/MediaComponent2';
import React, { useState } from 'react';
import Navbar from '../app/components/navbar';
import Footer from '../app/components/footer';

const Events = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleRadioChange = (event) => {
        setIsChecked(!isChecked);
    };

    return (
        <div class="custom-background" style={{ fontFamily: 'Cascadia Code, monospace' }}>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/x-icon" href="CSC_Logo.ico"></link>
                <title>CSY Club | Events</title>
            </Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet" />
            <style
                dangerouslySetInnerHTML={{
                    __html: `
        body {
            font-family: 'Cascadia Code', 'Courier New', 'monospace';
            background: rgb(0,0,0);
            background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 21%, rgba(0,0,0,1) 26%, rgba(5,17,9,1) 32%, rgba(8,28,14,1) 39%, rgba(10,36,18,1) 45%, rgba(14,49,25,1) 54%, rgba(16,58,30,1) 58%, rgba(19,69,35,1) 65%, rgba(23,82,42,1) 71%, rgba(29,102,53,1) 76%, rgba(32,115,60,1) 81%, rgba(36,128,67,1) 87%, rgba(39,137,72,1) 93%, rgba(39,137,72,1) 100%); 
             
        }`}} />
            <Navbar position="fixed" />
            <div className={styles.heading} style={{ marginTop: '10px', color: 'rgb(252, 3, 3)' }}>
                <div className={`${styles.radioGroup} d-flex flex-wrap justify-content-center`}>
                    <div className={`${styles.radioItem}`}>
                        <input
                            type="radio"
                            className={`${styles.radioButton}`}
                            name="btnradio"
                            id="btnradio1"
                            autoComplete="off"
                            checked={isChecked}
                            onChange={handleRadioChange}
                        />
                        <label className={`${styles.radioLabel}`} htmlFor="btnradio1">
                            Upcoming
                        </label>
                    </div>
                    <div className={`${styles.radioItem}`}>
                        <input
                            type="radio"
                            className={`${styles.radioButton}`}
                            name="btnradio"
                            id="btnradio3"
                            autoComplete="off"
                            checked={!isChecked}
                            onChange={handleRadioChange}
                        />
                        <label className={`${styles.radioLabel}`} htmlFor="btnradio3">
                            Previous
                        </label>
                    </div>
                </div>
            </div>

            <br />
            <br />

            {isChecked ? (
                <>
                    

                </>
            ) : (

                <>
                    <MediaComponent2
                        imageSrc="/hactoberfest_hands_on.jpeg"
                        title="Hactoberfest Hands On: Live Open Source Contribution"
                        description="We're back and this time it's all about diving headfirst into the exciting world of open source and community contributions. As part of the ongoing Hacktoberfest, we're continuing our journey of giving back to the coding community.
                        In follow-up with our previous sessions, we will make contributions to the community space, the CSY club’s cipher project, Ecocrypt🍀, and our club’s website too! Get your hands dirty (figuratively, of course) and leave your mark on the virtual canvas.
                        This session promises to be fun, engaging, and, most importantly, hands-on. So, don't forget to get your laptops and be a part of a tech adventure that's not just about learning but also giving back to the community.
                        See you there!🌟💻"
                    /><br /><br />
                    <MediaComponent2
                        imageSrc="/hactoberfest_git_and_github.jpeg"
                        title="Hactoberfest'23 Git and Github: Gateway to Open Source"
                        description="🚀 Hey Tech Trailblazers! 🌟
                        🎉 Get ready to embark on an epic tech journey with GDSC and Cybersecurity Club IIIT Kottayam as we celebrate HacktoberFest! 🎃✨
                        Join us for an electrifying session where you'll uncover the magic of Git and GitHub, the superpower duo of version control systems! 🦸‍♂️💻 We're here to demystify the world of VCS and unveil the limitless open-source opportunities HacktoberFest has in store. 🌍
                        🔥 Meet our own expert speakers, Reetam Dey and Anshumohan Acharya, who'll not only teach you the tech ropes but also answer all your burning questions! 🗣️💡
                        Ready to step out of your tech comfort zone and dive into the realm of global collaboration? 🌐✨ This event is tailor-made for every one of you out there! 🚀
                        Don't let this opportunity slip through your fingertips—reserve your spot now via this magical link:
                        So, mark your calendars, and let's set sail on this incredible tech adventure together! 🌌💫 #HacktoberFest #GDSC #CSYClub"
                    /><br /><br />
                    <MediaComponent2
                        imageSrc="/hactoberfest_intro.png"
                        title="Introduction to Hactoberfest and Open Source"
                        description="Hey there! We are elated to announce that the Cyber Security Club of IIIT Kottayam will be collaborating with Hacktoberfest!
                        Hacktoberfest is DigitalOcean’s annual event that encourages people to contribute in open source projects.
                        Whether it’s correcting spell errors or creating your first pull request, every contribution matters. The Cyber Security Club is here to guide you through your first ever open source contribution!
                        In this event, we will introduce you to open source projects and making your first contribution to the club’s own repository.
                        Stand a chance to win holopin badges and other exciting merchandise!
                        We’re calling everyone to participate in this one-of-its-kind event and grab the opportunity to learn and practice skills that will help shape your careers."
                    /><br /><br />
                    <MediaComponent2
                        imageSrc="/kickoff.jpeg"
                        title="Introductory Session on CyberSecurity"
                        description="It’s a dimly lit room,
                            ambiguous in a hoodie, keyboard clacking, 🧑🏼‍💻💻
                            ACCESS GRANTED!🔓
                            Sounds like straight out of a movie scene!🎥
                            We say life’s a movie and we are Rami Malek from Mr.Robot.
                            
                            Here’s your ticket to the dark web 🎟️
                            To ciphering and decoding secret messages 💬
                            To live the cool life 😎
                            Are you ready to dive in?🕵🏼
                            
                            Join us at Tapovan on the 11th of September 🗓️
                            and ensure your clocks read 6 PM sharp⌚
                            For your initiation
                            Into the intriguing realm of cybersecurity."
                    /><br /><br />
                    <MediaComponent2
                        imageSrc="/ecocrypt.jpg"
                        title="EcoCrypt"
                        description="🌿 Join us for ECO-CRYPT Cipher Project '23! 🌍🔒 Celebrate Environment Day with a cybersecurity twist! 🚀🔐 Explore open-source magic, master GitHub, and unravel the secrets of ciphers. 🌱🔓 Encrypt ASCII characters into captivating emojis and share securely via WhatsApp! 📲💬 Dive into the intersection of nature and cybersecurity. Don't miss out! 🌿🔒💚
                            #ECOCRYPT #EnvironmentDay #CyberSecurity #OpenSource"
                    /><br /><br />

                    <MediaComponent2
                        imageSrc="/smart.jpg"
                        title="Introduction to Web 3.0 and Smart Contracts (Webinar)"
                        description="During this webinar, you will learn about the fundamentals of Web 3.0, blockchain, and smart contracts, careers in Web3 and more. Our guest speaker, Mr. Sanket Agarwal has worked with and consulted multiple Web3 startups. He has built and scaled Quillcheck, a rug pull detection tool. He has managed multiple Web3 development and security projects. He has experience in teaching 20,000+ students around web3.0, and cybersecurity in South East Asia. Don't miss this incredible opportunity to upskill yourself and stay ahead of the curve in the ever-changing world of technology. Register now for the webinar on Introduction to Web 3.0 and Smart Contracts."
                    /><br /><br />


                    <MediaComponent2
                        imageSrc="/drones.png"
                        title="Reimagining The Future of Drones (Webinar)"
                        description="Drones have become increasingly popular over the years, with advancements in technology making them more accessible and affordable. While drones have many practical uses, they also pose a significant security threat if they fall into the wrong hands. In recent years, drones have been used to carry out a range of illegal activities, including GPS spoofing, espionage, and even terrorist attacks. As such, developing effective countermeasures to mitigate these risks is essential.

                            During this webinar, we will discuss the various threats posed by drones, including the challenges faced by law enforcement agencies in detecting and countering drone-based attacks. We will also explore the latest technologies and techniques for detecting and neutralizing drones."
                    /><br /><br />

                    <MediaComponent
                        imageSrc="/apoorvctf.jpg"
                        title="Apoorv CTF"
                        description="We are thrilled to announce that, Cyber Security Club IIIT Kottayam is hosting its first CTF for the Techno Cultural Fest of IIIT Kottayam , Apoorv IIIT Kottayam. Are you ready to put your skills to the test and compete in a thrilling game of strategy, teamwork, and cunning? Then join us for our upcoming Capture The Flag 🚩 event! The competition won't just be limited to the challenges – players will need to work together and strategize to outsmart their opponents and claim victory.
                            So gather your team, practice your skills, and get ready for a day of high-stakes competition and unforgettable memories. We'll see you on the battlefield!"
                    /><br /><br />
                    <MediaComponent2
                        imageSrc="/cybeerintro.jpg"
                        title="Introduction to Cyber Security"
                        description="Attention all tech-savvy students!
                            Are you ready to dive into the thrilling world of cyber security and learn how to safeguard your digital assets?
                            Then come join us in CAB201 at 6 pm for an introduction to the field that will blow your mind!
                            Don't miss out on this opportunity to sharpen your skills and stay one step ahead of the hackers. See you there!"
                    /><br /><br />
                </>
            )}
            <Footer />
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                crossorigin="anonymous"
            />
        </div>
    );
};

export default Events;
