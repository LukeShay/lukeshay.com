/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Navigation } from "./navigation/navigation.tsx";

export type PageContainerProps = {
  children: h.JSX.Element;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className={tw`h-screen w-full bg-slate-200 p-2 pb-12 md:pb-0`}>
      <div className={tw`max-w[1600px] mx-auto h-full`}>
        <div className={tw`flex h-full w-full flex-row`}>
          <Navigation />
          <div className={tw`w-full overflow-y-scroll rounded-md bg-slate-100`}>
            <div
              className={tw`mx-auto mt-6 w-full max-w-2xl px-2 md:mt-12 lg:mt-24`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
