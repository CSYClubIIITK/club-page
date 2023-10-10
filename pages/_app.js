// pages/_app.js
import '../app/globals.css';
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import "firebase/compat/auth";

function MyApp({ Component, pageProps }) {
    return (<>
        <Component {...pageProps} />
        <Analytics />
    </>

    )
}

export default MyApp;
