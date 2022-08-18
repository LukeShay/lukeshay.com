/** @jsx h */
import { h } from "preact";
import Image from "~/components/Image.tsx";
import type { ImageProps } from "~/components/Image.tsx";

type MaverickSoftwareConsultingIconProps = Omit<ImageProps, "alt" | "src"> & {
  imageClassName?: string;
};

const MaverickSoftwareConsultingIcon = ({
  className,
  imageClassName,
  ...props
}: MaverickSoftwareConsultingIconProps) => (
  <div className={className}>
    <Image
      {...props}
      alt="Maverick Software Consulting"
      className={imageClassName}
      src="/images/logos/maverick-software-consulting-icon.png"
    />
  </div>
);

export type { MaverickSoftwareConsultingIconProps };
export { MaverickSoftwareConsultingIcon };
