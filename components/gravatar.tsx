/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Image from "~/components/Image.tsx";
import type { ImageProps } from "~/components/Image.tsx";

type GravatarProps = Omit<ImageProps, "src">;

const Gravatar = ({
  className,
  alt,
  height,
  width,
  ...props
}: GravatarProps) => (
  <Image
    alt={alt ?? "Luke Shay"}
    className={tw`${String(className)} h-32 w-32 rounded-full`}
    height={height ?? 128}
    src="https://www.gravatar.com/avatar/c57099d7997c3af5a04728e920d8e243.png?s=2048"
    width={width ?? 128}
    {...props}
  />
);

export type { GravatarProps };
export { Gravatar };
