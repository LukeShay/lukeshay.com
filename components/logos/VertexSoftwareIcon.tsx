/** @jsx h */
import { h } from "preact";
import Image from "~/components/Image.tsx";
import type { ImageProps } from "~/components/Image.tsx";

type VertexSoftwareIconProps = Omit<ImageProps, "alt" | "src"> & {
  imageClassName?: string;
};

const VertexSoftwareIcon = (
  { className, imageClassName, ...props }: VertexSoftwareIconProps,
) => (
  <div className={className}>
    <Image
      {...props}
      alt="Vertex Software"
      className={imageClassName}
      src="/images/logos/vertex-software-icon.png"
    />
  </div>
);

export type { VertexSoftwareIconProps };
export { VertexSoftwareIcon };
