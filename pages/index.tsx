import type {NextPage} from 'next';

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
            <p>{'Timeline item 1'}</p>
            <p>{'Timeline item 2'}</p>
            <p>{'Timeline item 3'}</p>
        </div>
    </>
);

export default HomePage;
