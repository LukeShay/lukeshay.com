/** @jsx h */
import { h } from "preact";
import Image from "~/components/Image.tsx";
import type { ImageProps } from "~/components/Image.tsx";

type HyVeeIconProps = Omit<ImageProps, "alt" | "src"> & {
  imageClassName?: string;
};

const HyVeeIcon = ({ className, imageClassName, ...props }: HyVeeIconProps) => (
  <div className={className}>
    <Image
      {...props}
      alt="Hy-Vee"
      className={imageClassName}
      src="/images/logos/hy-vee-icon.svg"
    />
  </div>
);

export type { HyVeeIconProps };
export { HyVeeIcon };
