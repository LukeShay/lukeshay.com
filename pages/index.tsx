import {AcademicCapIcon, BriefcaseIcon, CakeIcon} from '@heroicons/react/outline';
import type {NextPage} from 'next';
import type {FC, ReactNode} from 'react';

type TimeLineItemProps = {
    title: string;
    description: string;
    date: string;
    icon: ReactNode;
};

const TimeLineItem: FC<TimeLineItemProps> = ({title, description, date, icon}) => (
    <div className="flex items-center">
        <div className="pr-4">{icon}</div>
        <div className="flex w-full items-center justify-between border-b border-slate-200 py-5">
            <div>
                <h3>{title}</h3>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
            <p className="text-sm text-slate-500">{date}</p>
        </div>
    </div>
);

const HomePage: NextPage = () => (
    <>
        <div className="flex items-center justify-between pb-12">
            <div className="pr-12">
                <h1 className="pb-2 text-4xl font-bold">{'Luke Shay'}</h1>
                <h2 className="pb-4">
                    {'Software Engineer II at '}
                    <strong>{'Hy-Vee'}</strong>
                </h2>
                <p className="text-slate-600">
                    {
                        'Building a scalable e-commerce platform for a large grocery store chain using GraphQL, React, and Kubernetes.'
                    }
                </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                alt="Luke Shay"
                className="h-32 w-32 rounded-full"
                src="https://www.gravatar.com/avatar/c57099d7997c3af5a04728e920d8e243.png?s=2048"
            />
        </div>
        <div>
            <TimeLineItem
                date="Dec 2021"
                description="A short description"
                icon={<BriefcaseIcon className="h-6 w-6 text-slate-700" />}
                title="Started Job at Hy-Vee"
            />
            <TimeLineItem
                date="May 2021"
                description="A short description"
                icon={<BriefcaseIcon className="h-6 w-6 text-slate-700" />}
                title="Started Full Time at Rain and Hail Insurance"
            />
            <TimeLineItem
                date="May 2021"
                description="A short description"
                icon={<AcademicCapIcon className="h-6 w-6 text-slate-700" />}
                title="Graduated from Iowa State University"
            />
            <TimeLineItem
                date="Apr 2021"
                description="A short description"
                icon={<CakeIcon className="h-6 w-6 text-slate-700" />}
                title="Got Engaged"
            />
            <TimeLineItem
                date="Nov 2020"
                description="A short description"
                icon={<BriefcaseIcon className="h-6 w-6 text-slate-700" />}
                title="Started Internship at Rain and Hail Insurance"
            />
            <TimeLineItem
                date="May 2020"
                description="A short description"
                icon={<BriefcaseIcon className="h-6 w-6 text-slate-700" />}
                title="Started Internship at Source Allies"
            />
            <TimeLineItem
                date="Oct 2019"
                description="A short description"
                icon={<BriefcaseIcon className="h-6 w-6 text-slate-700" />}
                title="Started Internship at Vertex Software"
            />
            <TimeLineItem
                date="Apr 2019"
                description="A short description"
                icon={<BriefcaseIcon className="h-6 w-6 text-slate-700" />}
                title="Started Internship at Maverick Software Consulting"
            />
            <TimeLineItem
                date="August 2017"
                description="A short description"
                icon={<AcademicCapIcon className="h-6 w-6 text-slate-700" />}
                title="Started College at Iowa State University"
            />
        </div>
    </>
);

export default HomePage;
