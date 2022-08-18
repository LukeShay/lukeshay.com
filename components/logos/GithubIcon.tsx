/** @jsx h */
import { h } from "preact";
import Image from "~/components/Image.tsx";
import type { ImageProps } from "~/components/Image.tsx";

type GithubIconProps = Omit<ImageProps, "alt" | "src"> & {
  imageClassName?: string;
};

const GithubIcon = (
  { className, imageClassName, ...props }: GithubIconProps,
) => (
  <div className={className}>
    <Image
      {...props}
      alt="GitHub"
      className={imageClassName}
      src="/images/logos/github-icon.svg"
    />
  </div>
);

export type { GithubIconProps };
export { GithubIcon };
