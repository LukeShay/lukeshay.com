import { component$ } from '@builder.io/qwik';

type MaverickSoftwareConsultingIconProps = {
  imageClassName?: string;
  className?: string;
  width?: number;
  height?: number;
};

const MaverickSoftwareConsultingIcon = component$<MaverickSoftwareConsultingIconProps>(
  ({ className, imageClassName, ...props }) => (
    <div className={className}>
      <img
        {...props}
        alt="Maverick Software Consulting"
        className={imageClassName}
        src="/images/logos/maverick-software-consulting-icon.png"
      />
    </div>
  ),
);

export type { MaverickSoftwareConsultingIconProps };
export { MaverickSoftwareConsultingIcon };
