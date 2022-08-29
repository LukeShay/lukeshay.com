/** @jsx h */
import { h } from "preact";
import Image from "~/components/Image.tsx";
import type { ImageProps } from "~/components/Image.tsx";

type AwsIconProps = Omit<ImageProps, "alt" | "src"> & {
  imageClassName?: string;
};

const AwsIcon = ({ className, imageClassName, ...props }: AwsIconProps) => (
  <div className={className}>
    <Image
      {...props}
      alt="Amazon Web Services"
      className={imageClassName}
      src="/images/logos/aws-icon.svg"
    />
  </div>
);

export type { AwsIconProps };
export { AwsIcon };
