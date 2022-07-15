import { CakeIcon } from '@heroicons/react/outline';
import type { FC, ReactNode } from 'react';
import type { ImageProps } from 'next/future/image';

import { List, ListItem } from 'components/list';
import { HyVeeIcon } from 'components/logos/hy-vee-icon';
import { IowaStateIcon } from 'components/logos/iowa-state-icon';
import { MaverickSoftwareConsultingIcon } from 'components/logos/maverick-software-consulting-icon';
import { RainAndHailIcon } from 'components/logos/rain-and-hail-icon';
import { SourceAlliesIcon } from 'components/logos/source-allies-icon';
import { VertexSoftwareIcon } from 'components/logos/vertex-software-icon';
import { Gravatar } from 'components/gravatar';
import { Link } from 'components/link';
import type { Page } from 'lib/client/types/page';

type TimeLineItemProps = {
  title: string;
  description: string;
  date: string;
  icon: ReactNode;
};

const TimeLineItem: FC<TimeLineItemProps> = ({ title, description, date, icon }) => (
  <ListItem contentClassName="flex justify-between" description={description} icon={icon} title={title}>
    <p className="w-32 text-right text-sm text-slate-700 md:w-24">{date}</p>
  </ListItem>
);

type Icon = FC<
  Omit<ImageProps, 'alt' | 'src'> & {
    imageClassName?: string;
  }
>;

const timeLineItems: (Omit<TimeLineItemProps, 'icon'> & {
  icon: Icon;
})[] = [
  {
    date: 'Dec 2021',
    description: 'Software Engineer II doing fullstack development on Aisles Online',
    icon: HyVeeIcon,
    title: 'Started Job at Hy-Vee',
  },
  {
    date: 'May 2021',
    description: 'Programmer working on building web tools for agents, agencies, and customers',
    icon: RainAndHailIcon,
    title: 'Started Full-Time at Rain and Hail',
  },
  {
    date: 'May 2021',
    description: 'Graduated from Iowa State University with a B.S. in Software Engineering',
    icon: IowaStateIcon,
    title: 'Graduated from Iowa State University',
  },
  {
    date: 'Apr 2021',
    description: 'Asked my girlfriend to marry me at the ISU Campanile',
    icon: CakeIcon as Icon,
    title: 'Got Engaged',
  },
  {
    date: 'Nov 2020',
    description: 'Programmer Intern working on building web tools for agents, agencies, and customers',
    icon: RainAndHailIcon,
    title: 'Started Internship at Rain and Hail Insurance',
  },
  {
    date: 'May 2020',
    description: 'Apprentice Software Engineer working on building a payment platform',
    icon: SourceAlliesIcon,
    title: 'Started Internship at Source Allies',
  },
  {
    date: 'Oct 2019',
    description: 'Quality Assurance Intern working on testing and releasing a 3D CAD rendering platform',
    icon: VertexSoftwareIcon,
    title: 'Started Internship at Vertex Software',
  },
  {
    date: 'Apr 2019',
    description: 'Automation Engineer Intern working on creating and maintaining regression tests',
    icon: MaverickSoftwareConsultingIcon,
    title: 'Started Internship at Maverick Software Consulting',
  },
  {
    date: 'Aug 2017',
    description: 'Started college pursuing a degree in Engineering',
    icon: IowaStateIcon,
    title: 'Started College at Iowa State University',
  },
];

const HomePage: Page = () => (
  <div className="mb-28">
    <div className="pb-6 md:pb-12">
      <Gravatar className="float-right" />
      <h1 className="pb-2 text-4xl font-bold">{'Luke Shay'}</h1>
      <h2 className="pb-4">
        {'Software Engineer II at '}
        <Link className="font-bold underline" href="https://www.hy-vee.com/">
          {'Hy-Vee'}
        </Link>
      </h2>
      <p className="text-slate-600">
        {
          'Building a scalable e-commerce platform for a large grocery store chain using Node.js, GraphQL, React, and Kubernetes.'
        }
      </p>
    </div>
    <List>
      {timeLineItems.map(({ date, description, icon: Icon, title }) => (
        <TimeLineItem
          date={date}
          description={description}
          icon={<Icon className="h-6 w-6" height={24} width={24} />}
          key={title}
          title={title}
        />
      ))}
    </List>
  </div>
);

HomePage.title = 'Luke Shay';
HomePage.description =
  'Software Engineer II at Hy-Vee. Built using Next.js and TailwindCSS. Contains a timeline of my career.';

export default HomePage;
