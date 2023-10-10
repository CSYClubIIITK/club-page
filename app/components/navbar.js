"use client"
import styles from '../page.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Popup from './Popup';


const Navbar = () => {
    const router = useRouter();
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [navbarHeight, setNavbarHeight] = useState('85px');

    useEffect(() => {
        const handleResize = () => {
            setNavbarHeight(window.innerWidth > 768 ? '82.5px' : null);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleShowPopup = (message) => {
        setPopupMessage(message);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet" />

            <nav
                className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
                style={{
                    fontFamily: 'Cascadia Code, monospace',
                    height: navbarHeight,
                }}
            >
                <div class="container">
                    <div className={styles.navLogo}>
                        <img
                            src="CSC_Logo_Light_name.svg"
                            alt="Logo"
                            width="100"
                            height="100"
                            className={`d-inline-block align-text-top ${styles.glogo}`}
                        />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${styles.navCollapse}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fs-4 mx-4" href="/" style={{ fontFamily: 'Cascadia Code, monospace' }}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-4 mx-4" href="/people">
                                    People
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-4 mx-4" href="/events">
                                    Events
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-4 mx-4" href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {showPopup && (
                <Popup message={popupMessage} onClose={handleClosePopup} />
            )}
            {alertMessage && (
                <div className="alert alert-info">
                    {alertMessage}
                </div>
            )}
        </div>
    );
};

export default Navbar;