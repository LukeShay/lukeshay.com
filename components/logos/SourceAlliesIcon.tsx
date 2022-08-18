/** @jsx h */
import { h } from "preact";
import Image from "~/components/Image.tsx";
import type { ImageProps } from "~/components/Image.tsx";

type SourceAlliesIconProps = Omit<ImageProps, "alt" | "src"> & {
  imageClassName?: string;
};

const SourceAlliesIcon = (
  { className, imageClassName, ...props }: SourceAlliesIconProps,
) => (
  <div className={className}>
    <Image
      {...props}
      alt="Source Allies"
      className={imageClassName}
      src="/images/logos/source-allies-icon.png"
    />
  </div>
);

export type { SourceAlliesIconProps };
export { SourceAlliesIcon };
