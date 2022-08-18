/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Image from "~/components/Image.tsx";
import type { ImageProps } from "~/components/Image.tsx";

export type GravatarProps = Omit<ImageProps, "src">;

export const Gravatar = ({
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
    src="/images/gravatar.png"
    width={width ?? 128}
    {...props}
  />
);
