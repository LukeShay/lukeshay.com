import { component$ } from '@builder.io/qwik';

type MaverickSoftwareConsultingIconProps = Partial<Omit<HTMLImageElement, 'alt' | 'src'>> & {
  imageClassName?: string;
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
