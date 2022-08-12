import { component$ } from '@builder.io/qwik';

type VertexSoftwareIconProps = {
  imageClassName?: string;
  className?: string;
  width?: number;
  height?: number;
};

const VertexSoftwareIcon = component$<VertexSoftwareIconProps>(({ className, imageClassName, ...props }) => (
  <div className={className}>
    <img {...props} alt="Vertex Software" className={imageClassName} src="/images/logos/vertex-software-icon.png" />
  </div>
));

export type { VertexSoftwareIconProps };
export { VertexSoftwareIcon };
