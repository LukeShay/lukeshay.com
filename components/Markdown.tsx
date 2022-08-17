// Copyright 2022 the Deno authors. All rights reserved. MIT license.

/** @jsx h */
import { h } from "preact";
import { render } from "gfm";
import { tw } from "@twind";

export type MarkdownProps = {
  source: string;
  baseUrl?: string;
};

export function Markdown({ source, baseUrl }: MarkdownProps) {
  const html = render(source, { allowIframes: false, baseUrl });

  return (
    <div
      className={`markdown-body ${tw("px-4 py-4 lg:px-12 lg:py-10 rounded-md mb-0 md:mb-8")}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
