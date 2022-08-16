/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { PageContainer } from "../components/PageContainer.tsx";

export default function ContactPage(props: PageProps) {
  return (
    <PageContainer
      pageProps={props}
      title="Contact"
      description="Contact Luke Shay."
    >
      <iframe
        frameBorder="0"
        height="844"
        marginHeight={0}
        marginWidth={0}
        src="https://docs.google.com/forms/d/e/1FAIpQLSes6N8luRo0m_Si2I8VEBDQkK_NylMT09z1rv4ttEqK2t2JdA/viewform?embedded=true"
        title="contact-form"
        width="640"
      >
        {"Loading…"}
      </iframe>
    </PageContainer>
  );
}
