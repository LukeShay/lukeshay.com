import { component$ } from '@builder.io/qwik';

type SourceAlliesIconProps = Partial<Omit<HTMLImageElement, 'alt' | 'src'>> & {
  imageClassName?: string;
};

const SourceAlliesIcon = component$<SourceAlliesIconProps>(({ className, imageClassName, ...props }) => (
  <div className={className}>
    <img {...props} alt="Source Allies" className={imageClassName} src="/images/logos/source-allies-icon.png" />
  </div>
));

export type { SourceAlliesIconProps };
export { SourceAlliesIcon };
