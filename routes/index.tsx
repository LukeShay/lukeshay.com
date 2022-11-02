/** @jsx h */
import { h, VNode } from "preact";
import { tw } from "@twind";
import { PageProps } from "fresh/server.ts";
import { CakeIcon } from "~/components/heroicons/outline.tsx";
import { PageContainer } from "~/components/PageContainer.tsx";
import { List } from "~/components/list/List.tsx";
import { ListItem } from "~/components/list/ListItem.tsx";
import { HyVeeIcon } from "~/components/logos/HyVeeIcon.tsx";
import { AwsIcon } from "~/components/logos/AwsIcon.tsx";
import { IowaStateIcon } from "~/components/logos/IowaStateIcon.tsx";
import { MaverickSoftwareConsultingIcon } from "~/components/logos/MaverickSoftwareConsultingIcon.tsx";
import { RainAndHailIcon } from "~/components/logos/RainAndHailIcon.tsx";
import { SourceAlliesIcon } from "~/components/logos/SourceAlliesIcon.tsx";
import { VertexSoftwareIcon } from "~/components/logos/VertexSoftwareIcon.tsx";
import { Gravatar } from "~/components/Gravatar.tsx";
import { Link } from "~/components/Link.tsx";

type TimeLineItemProps = {
  title: string;
  description: string;
  date: string;
  icon: VNode;
};

const TimeLineItem = ({
  title,
  description,
  date,
  icon,
}: TimeLineItemProps) => (
  <ListItem
    contentClassName={tw`flex justify-between`}
    description={description}
    icon={icon}
    title={title}
  >
    <p className={tw`w-32 text-right text-sm text-slate-700 md:w-24`}>{date}</p>
  </ListItem>
);

const timeLineItems = [
  {
    date: "Aug 2022",
    description: "Software Development Engineer doing fullstack development",
    icon: AwsIcon,
    title: "Started Job at Amazon Web Services",
  },
  {
    date: "Dec 2021",
    description:
      "Software Engineer II doing fullstack development on Aisles Online",
    icon: HyVeeIcon,
    title: "Started Job at Hy-Vee",
  },
  {
    date: "May 2021",
    description:
      "Programmer working on building web tools for agents, agencies, and customers",
    icon: RainAndHailIcon,
    title: "Started Full-Time at Rain and Hail",
  },
  {
    date: "May 2021",
    description:
      "Graduated from Iowa State University with a B.S. in Software Engineering",
    icon: IowaStateIcon,
    title: "Graduated from Iowa State University",
  },
  {
    date: "Apr 2021",
    description: "Asked my girlfriend to marry me at the ISU Campanile",
    icon: CakeIcon,
    title: "Got Engaged",
  },
  {
    date: "Nov 2020",
    description:
      "Programmer Intern working on building web tools for agents, agencies, and customers",
    icon: RainAndHailIcon,
    title: "Started Internship at Rain and Hail Insurance",
  },
  {
    date: "May 2020",
    description:
      "Apprentice Software Engineer working on building a payment platform",
    icon: SourceAlliesIcon,
    title: "Started Internship at Source Allies",
  },
  {
    date: "Oct 2019",
    description:
      "Quality Assurance Intern working on testing and releasing a 3D CAD rendering platform",
    icon: VertexSoftwareIcon,
    title: "Started Internship at Vertex Software",
  },
  {
    date: "Apr 2019",
    description:
      "Automation Engineer Intern working on creating and maintaining regression tests",
    icon: MaverickSoftwareConsultingIcon,
    title: "Started Internship at Maverick Software Consulting",
  },
  {
    date: "Aug 2017",
    description: "Started college pursuing a degree in Engineering",
    icon: IowaStateIcon,
    title: "Started College at Iowa State University",
  },
];

export default function Home(props: PageProps) {
  return (
    <PageContainer pageProps={props}>
      <div className={tw`mb-28`}>
        <div className={tw`pb-6 md:pb-12`}>
          <Gravatar className={tw`float-right`} />
          <h1 className={tw`pb-2 text-4xl font-bold`}>{"Luke Shay"}</h1>
          <h2 className={tw`pb-4`}>
            {"Software Development Engineer at "}
            <Link
              className={tw`font-bold underline`}
              href="https://aws.amazon.com/"
            >
              {"Amazon Web Services"}
            </Link>
          </h2>
          <p className={tw`text-slate-600`}>
            {"Building a platform for AWS Solution Architects collaborate."}
          </p>
        </div>
        <List>
          {timeLineItems.map(({ date, description, icon: Icon, title }) => (
            <TimeLineItem
              date={date}
              description={description}
              icon={<Icon className={tw`h-6 w-6`} height={24} width={24} />}
              key={title}
              title={title}
            />
          ))}
        </List>
      </div>
    </PageContainer>
  );
}
