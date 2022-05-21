import type {FC} from 'react';
import {useEffect} from 'react';
import type {AppProps} from 'next/app';
import * as Fathom from 'fathom-client';
import router from 'next/router';

import '../styles/globals.css';
import {Navigation} from '../components/navigation';

// Record a pageview when route changes
router.events.on('routeChangeComplete', () => {
    Fathom.trackPageview();
});

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
    useEffect(() => {
        Fathom.load('ZHFMSQAA', {
            includedDomains: ['lukeshay.com', 'www.lukeshay.com'],
        });
    }, []);

    return (
        <div className="h-screen w-full bg-slate-200 p-2 pb-12 md:pb-0">
            <div className="max-w[1600px] mx-auto h-full">
                <div className="flex h-full w-full flex-row">
                    <Navigation />
                    <div className="w-full overflow-y-scroll rounded-md bg-slate-100">
                        <div className="mx-auto mt-6 w-full max-w-2xl px-2 md:mt-12 lg:mt-24">
                            <Component {...pageProps} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyApp;
