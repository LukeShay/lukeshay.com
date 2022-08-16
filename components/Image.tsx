/** @jsx h */
import { h } from "preact";

export type ImageProps = h.JSX.IntrinsicElements["img"];

export function Image(props: ImageProps) {
  return <img {...props} />;
}

export default Image;
