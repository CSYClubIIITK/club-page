import React from "react";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import ContactMap from "../app/components/ContactMap";
const Contact = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleRadioChange = (event) => {
        setIsChecked(!isChecked);
    };

    return (
        <div class="custom-background" style={{ fontFamily: 'Cascadia Code, monospace' }}>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        }`}}
            />
            <ContactMap />
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                crossorigin="anonymous"
            />
        </div>
    );
};

export default Contact;
