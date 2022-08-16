/** @jsx h */
import { h } from "preact";
import Image from "~/components/Image.tsx";
import type { ImageProps } from "~/components/Image.tsx";

type IowaStateIconProps = Omit<ImageProps, "alt" | "src"> & {
  imageClassName?: string;
};

const IowaStateIcon = (
  { className, imageClassName, ...props }: IowaStateIconProps,
) => (
  <div className={className}>
    <Image
      {...props}
      alt="Iowa State"
      className={imageClassName}
      src="/images/logos/iowa-state-icon.svg"
    />
  </div>
);

export type { IowaStateIconProps };
export { IowaStateIcon };
