import { Slot, component$ } from '@builder.io/qwik';

import { CakeIcon } from '~/components/heroicons/outline';
import { List, ListItem } from '~/components/list';
import { HyVeeIcon } from '~/components/logos/hy-vee-icon';
import { IowaStateIcon } from '~/components/logos/iowa-state-icon';
import { MaverickSoftwareConsultingIcon } from '~/components/logos/maverick-software-consulting-icon';
import { RainAndHailIcon } from '~/components/logos/rain-and-hail-icon';
import { SourceAlliesIcon } from '~/components/logos/source-allies-icon';
import { VertexSoftwareIcon } from '~/components/logos/vertex-software-icon';
import { Gravatar } from '~/components/gravatar';
import { Link } from '~/components/link';

type TimeLineItemProps = {
  title: string;
  description: string;
  date: string;
};

const TimeLineItem = component$<TimeLineItemProps>(({ title, description, date }) => (
  <ListItem contentClassName="flex justify-between" description={description} title={title}>
    <span q:slot="icon">
      <Slot name="icon" />
    </span>
    <p className="w-32 text-right text-sm text-slate-700 md:w-24">{date}</p>
  </ListItem>
));

const HomePage = component$(() => (
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
      <TimeLineItem
        date="Dec 2021"
        description="Software Engineer II doing fullstack development on Aisles Online"
        title="Started Job at Hy-Vee"
      >
        <slot q:slot="icon">
          <HyVeeIcon className="h-6 w-6" height={24} width={24} />
        </slot>
      </TimeLineItem>
      <TimeLineItem
        date="May 2021"
        description="Programmer working on building web tools for agents, agencies, and customers"
        title="Started Full-Time at Rain and Hail"
      >
        <slot q:slot="icon">
          <RainAndHailIcon className="h-6 w-6" height={24} width={24} />
        </slot>
      </TimeLineItem>
      <TimeLineItem
        date="May 2021"
        description="Graduated from Iowa State University with a B.S. in Software Engineering"
        title="Graduated from Iowa State University"
      >
        <slot q:slot="icon">
          <IowaStateIcon className="h-6 w-6" height={24} width={24} />
        </slot>
      </TimeLineItem>
      <TimeLineItem
        date="Apr 2021"
        description="Asked my girlfriend to marry me at the ISU Campanile"
        title="Got Engaged"
      >
        <slot q:slot="icon">
          <CakeIcon className="h-6 w-6" height={24} width={24} />
        </slot>
      </TimeLineItem>
      <TimeLineItem
        date="Nov 2020"
        description="Programmer Intern working on building web tools for agents, agencies, and customers"
        title="Started Internship at Rain and Hail Insurance"
      >
        <slot q:slot="icon">
          <RainAndHailIcon className="h-6 w-6" height={24} width={24} />
        </slot>
      </TimeLineItem>
      <TimeLineItem
        date="May 2020"
        description="Apprentice Software Engineer working on building a payment platform"
        title="Started Internship at Source Allies"
      >
        <slot q:slot="icon">
          <SourceAlliesIcon className="h-6 w-6" height={24} width={24} />
        </slot>
      </TimeLineItem>
      <TimeLineItem
        date="Oct 2019"
        description="Quality Assurance Intern working on testing and releasing a 3D CAD rendering platform"
        title="Started Internship at Vertex Software"
      >
        <slot q:slot="icon">
          <VertexSoftwareIcon className="h-6 w-6" height={24} width={24} />
        </slot>
      </TimeLineItem>
      <TimeLineItem
        date="Apr 2019"
        description="Automation Engineer Intern working on creating and maintaining regression tests"
        title="Started Internship at Maverick Software Consulting"
      >
        <slot q:slot="icon">
          <MaverickSoftwareConsultingIcon className="h-6 w-6" height={24} width={24} />
        </slot>
      </TimeLineItem>
      <TimeLineItem
        date="Aug 2017"
        description="Started college pursuing a degree in Engineering"
        title="Started College at Iowa State University"
      >
        <slot q:slot="icon">
          <IowaStateIcon className="h-6 w-6" height={24} width={24} />
        </slot>
      </TimeLineItem>
    </List>
  </div>
));

// HomePage.title = 'Luke Shay';
// HomePage.description =
//   'Software Engineer II at Hy-Vee. Built using Next.js and TailwindCSS. Contains a timeline of my career.';

export { TimeLineItem };
export default HomePage;
