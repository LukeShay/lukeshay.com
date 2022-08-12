import { component$ } from '@builder.io/qwik';

import { ExternalLinkIcon } from '~/components/heroicons/outline';
import { List, ListItem } from '~/components/list';
import { Link } from '~/components/link';

const repos = [
  {
    description: 'My wedding website',
    id: 'lukeshay/lukeandjadi.com',
    nameWithOwner: 'lukeshay/lukeandjadi.com',
  },
  {
    description: 'My personal website',
    id: 'lukeshay/lukeshay.com',
    nameWithOwner: 'lukeshay/lukeshay.com',
  },
  {
    description: 'A CLI to help simplify my workflows',
    id: 'lukeshay/lsctl',
    nameWithOwner: 'lukeshay/lsctl',
  },
  {
    description: 'Packages for speeding up Node.js API development',
    id: 'lapidev/lapi',
    nameWithOwner: 'lapidev/lapi',
  },
  {
    description: 'Repo containing my NPM packages',
    id: 'lukeshay/npm',
    nameWithOwner: 'lukeshay/npm',
  },
  {
    description: 'A basic home inventory management tool',
    id: 'lukeshay/home-inventory',
    nameWithOwner: 'lukeshay/home-inventory',
  },
];

const ProjectsPage = component$(() => {
  return (
    <div className="mb-28">
      <div className="pb-12">
        <h1 className="pb-6 text-4xl font-bold">{'My Projects'}</h1>
        <p className="text-slate-600">
          {
            'The following is a list of open source projects I have worked on that showcase my skills and experience. The source code for the projects can be found by clicking on the link.'
          }
        </p>
      </div>
      <List>
        {repos.map(({ id, nameWithOwner, description }) => (
          <Link href={`https://github.com/${nameWithOwner}`} key={id}>
            <ListItem
              className="-mx-2 rounded-md px-2 hover:bg-slate-200"
              contentClassName="flex justify-between"
              description={description}
              title={nameWithOwner}
              titleAs="h2"
            >
              <span q:slot="icon">
                <ExternalLinkIcon className="h4 w-4 text-slate-500" />
              </span>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
});

// ProjectsPage.title = 'Luke Shay | Projects';
// ProjectsPage.description =
//   'Software Engineer II at Hy-Vee. Built using Next.js and TailwindCSS. Contains list of my pinned projects.';

export { repos };
export default ProjectsPage;
