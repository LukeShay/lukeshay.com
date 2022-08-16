/** @jsx h */
import { h } from "preact";
import { UnknownPageProps } from "$fresh/server.ts";
import { PageContainer } from "../components/PageContainer.tsx";
import { tw } from "@twind";

export default function NotFoundPage(props: UnknownPageProps) {
  return (
    <PageContainer pageProps={props}>
      <div className={tw`flex flex-col items-center`}>
        <h1 className={tw`pb-6 text-4xl font-bold`}>
          {"An unknown error ocurred"}
        </h1>
        <h2 className={tw`text-xl`}>
          {"Please try again and if the problem persists, contact me."}
        </h2>
      </div>
    </PageContainer>
  );
}
