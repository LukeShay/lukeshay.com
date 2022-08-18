/** @jsx h */
import { h } from "preact";
import { UnknownPageProps } from "fresh/server.ts";
import { PageContainer } from "~/components/PageContainer.tsx";
import { tw } from "@twind";

export default function NotFoundPage(props: UnknownPageProps) {
  return (
    <PageContainer pageProps={props}>
      <div className={tw`flex flex-col items-center`}>
        <h1 className={tw`pb-6 text-4xl font-bold`}>{"404 Page not found"}</h1>
        <h2 className={tw`text-xl`}>
          {"The page your are looking for does not exist."}
        </h2>
      </div>
    </PageContainer>
  );
}
