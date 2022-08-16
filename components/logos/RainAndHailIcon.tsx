/** @jsx h */
import { h } from "preact";
import Image from "~/components/Image.tsx";
import type { ImageProps } from "~/components/Image.tsx";

type RainAndHailIconProps = Omit<ImageProps, "alt" | "src"> & {
  imageClassName?: string;
};

const RainAndHailIcon = (
  { className, imageClassName, ...props }: RainAndHailIconProps,
) => (
  <div className={className}>
    <Image
      {...props}
      alt="Vertex Software"
      className={imageClassName}
      src="/images/logos/rain-and-hail-icon.ico"
    />
  </div>
);

export type { RainAndHailIconProps };
export { RainAndHailIcon };
