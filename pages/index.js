"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../app/components/navbar';
import CyberSecurityClub from '../app/components/homeContent';
import Footer from '../app/components/footer';
import Head from 'next/head';

const Home_Page = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const logoStyles = {
        marginBottom: '1rem',
        width: '300px',
        maxWidth: '100%',
        marginTop: windowWidth <= 768 ? '20rem' : '1rem',
    };
    useEffect(() => {
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src =
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
        bootstrapScript.integrity =
            'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz';
        bootstrapScript.crossOrigin = 'anonymous';
        document.body.appendChild(bootstrapScript);

        return () => {
            document.body.removeChild(bootstrapScript);
        };
    }, []);
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>CSY Club | Home</title>
                <link rel="icon" type="image/x-icon" href="CSC_Logo.ico"></link>
            </Head>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
            body {
              font-family: 'Cascadia Code', 'Courier New', 'monospace';
                 
background: '3ACD6B';
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 21%, rgba(0,0,0,1) 26%, rgba(5,17,9,1) 32%, rgba(8,28,14,1) 39%, rgba(10,36,18,1) 45%, rgba(14,49,25,1) 54%, rgba(16,58,30,1) 58%, rgba(19,69,35,1) 65%, rgba(23,82,42,1) 71%, rgba(29,102,53,1) 76%, rgba(32,115,60,1) 81%, rgba(36,128,67,1) 87%, rgba(39,137,72,1) 93%, rgba(39,137,72,1) 100%);
            }
            /* Add other global CSS styles here */
            .navbar {
              transition: transform 0.3s ease-in-out; /* Add transition property */
            }
            .show-navbar {
              transform: translateY(0); /* Move navbar to visible position */
            }
          `,
                }}
            />
            <Navbar />
            {windowWidth > 768 ? (
                <div style={{ display: 'flex', fontFamily: 'Cascadia Code, monospace', color: 'white', textAlign: 'center', height: '100vh' }}>
                    <div style={{ flex: 4.5, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginLeft: '1%' }}>
                        <div style={logoStyles}>
                            <img src="/CSC_Logo.png" alt="Logo" style={{ width: '120%', height: '120%', objectFit: 'contain' }} />
                        </div>
                    </div>
                    <div style={{ flex: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '70px',marginRight:'7%' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Cyber Security Club</div>
                        <div style={{ fontSize: '1.2rem', lineHeight: '1.5', maxWidth: '800px', marginBottom: '2rem', marginRight: '0.5rem' }}>
                            Join the Cyber Security Club of IIIT Kottayam as we explore new cutting edge technology.
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ marginTop: '-38vh', marginBottom: '20vh' }}>
                    <div style={{ fontFamily: 'Cascadia Code, monospace', color: 'white', textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={logoStyles}>
                            <img src="/CSC_Logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', marginTop: '10rem', marginBottom: '10rem' }} />
                        </div>

                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Cyber Security Club</div>
                    </div>
                </div>
            )}
            <CyberSecurityClub />
            <Footer />
        </>
    );
};

export default Home_Page;