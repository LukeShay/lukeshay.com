import type {FC} from 'react';
import type {AppProps} from 'next/app';

import '../styles/globals.css';
import {Navigation} from '../components/navigation';

const MyApp: FC<AppProps> = ({Component, pageProps}) => (
    <div className="w-full h-screen bg-slate-200 p-2">
        <div className="max-w-screen-2xl h-full mx-auto">
            <div className="w-full h-full flex flex-row">
                <div className="w-72">
                    <Navigation />
                </div>
                <div className="col-span-9 w-full rounded-md bg-slate-100 overflow-y-scroll">
                    <div className="max-w-2xl w-full mx-auto px-2 mt-24">
                        <Component {...pageProps} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default MyApp;
