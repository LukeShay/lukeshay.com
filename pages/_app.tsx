import type {FC} from 'react';
import type {AppProps} from 'next/app';

import '../styles/globals.css';
import {Navigation} from '../components/navigation';

const MyApp: FC<AppProps> = ({Component, pageProps}) => (
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

export default MyApp;
