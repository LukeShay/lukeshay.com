import Container from '@/components/Container';

function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Hey, I'm Luke Shay
        </h1>
        <h2 className="mb-16 prose text-gray-600 dark:text-gray-400">
          I'm a developer that focuses on full stack development. I work at Rain & Hail Insurance as
          a Programmer on the Web Services team. I am currently working on rewriting this website so
          most pages are incomplete.
        </h2>
      </div>
    </Container>
  );
}

export default Home;
