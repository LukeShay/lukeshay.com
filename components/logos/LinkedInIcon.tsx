/** @jsx h */
import { h } from "preact";
import Image from "~/components/Image.tsx";
import type { ImageProps } from "~/components/Image.tsx";

type LinkedInIconProps = Omit<ImageProps, "alt" | "src"> & {
  imageClassName?: string;
};

const LinkedInIcon = (
  { className, imageClassName, ...props }: LinkedInIconProps,
) => (
  <div className={className}>
    <Image
      {...props}
      alt="LinkedIn"
      className={imageClassName}
      src="/images/logos/linked-in-icon.svg"
    />
  </div>
);

export type { LinkedInIconProps };
export { LinkedInIcon };
