import type { CSSProperties } from "react";

/**
 * Style for painting a flat color through an image's transparency.
 * The image supplies only the SHAPE; the color comes from the element's
 * background (a theme token like bg-cream, or bg-current for text color).
 */
export function maskStyle(
  src: string,
  size: string = "contain",
  position: string = "center",
): CSSProperties {
  const url = `url(${src})`;
  return {
    WebkitMaskImage: url,
    maskImage: url,
    WebkitMaskSize: size,
    maskSize: size,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: position,
    maskPosition: position,
  };
}
