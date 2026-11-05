import type { CSSProperties } from "react";

/* ---------- Types ---------- */

export type Position =
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top left"
  | "top right"
  | "bottom left"
  | "bottom right"
  | (string & {}); // allows "30% 20%" etc.

export type Direction =
  | "to top"
  | "to bottom"
  | "to left"
  | "to right"
  | "to top left"
  | "to top right"
  | "to bottom left"
  | "to bottom right"
  | `${number}deg`;

export type Stop = {
  /** 0 to 1 */
  alpha: number;
  /** 0 to 100 (percent) */
  at: number;
};

/* ---------- Core utilities ---------- */

const compact = (value: string) => value.replace(/\s+/g, " ").trim();

/** Works with hex, rgb, oklch, hsl, named colors and CSS variables */
export function withAlpha(color: string, alpha: number) {
  const percent = Math.round(Math.min(Math.max(alpha, 0), 1) * 100);
  return `color-mix(in srgb, ${color} ${percent}%, transparent)`;
}

function toStops(color: string, stops: Stop[]) {
  return stops
    .map(({ alpha, at }) => `${withAlpha(color, alpha)} ${at}%`)
    .join(", ");
}

/** Combine several gradients into one background-image value */
export function stackGradients(
  ...layers: Array<string | false | null | undefined>
) {
  return layers.filter(Boolean).join(", ");
}

/* ---------- Radial ---------- */

const DEFAULT_GLOW_STOPS: Stop[] = [
  { alpha: 0.67, at: 0 },
  { alpha: 0.27, at: 40 },
  { alpha: 0.06, at: 70 },
];

type RadialOptions = {
  position?: Position;
  shape?: "circle" | "ellipse";
  size?: string; // e.g. "closest-side", "600px"
  stops?: Stop[];
};

/** Your original helper, now with options (defaults match the old output) */
export function createGradient(
  base: string,
  {
    position = "top left",
    shape = "circle",
    size,
    stops = DEFAULT_GLOW_STOPS,
  }: RadialOptions = {},
) {
  return compact(`
    radial-gradient(
      ${shape}${size ? ` ${size}` : ""} at ${position},
      ${toStops(base, stops)},
      transparent 100%
    )
  `);
}

/** Soft glow that fades out. Good for hero backgrounds and card hovers */
export function radialGlow(
  color: string,
  position: Position = "center",
  size = "closest-side",
  intensity = 0.5,
) {
  return compact(`
    radial-gradient(
      circle ${size} at ${position},
      ${withAlpha(color, intensity)} 0%,
      transparent 100%
    )
  `);
}

/** Follows the cursor. Pass pixel coordinates from onPointerMove */
export function spotlight(
  color: string,
  x: number,
  y: number,
  radius = 320,
  intensity = 0.15,
) {
  return compact(`
    radial-gradient(
      ${radius}px circle at ${x}px ${y}px,
      ${withAlpha(color, intensity)},
      transparent 70%
    )
  `);
}

/* ---------- Linear ---------- */

/** Single color fading to transparent */
export function linearFade(
  color: string,
  direction: Direction = "to bottom",
  from = 0.6,
  to = 0,
) {
  return `linear-gradient(${direction}, ${withAlpha(color, from)}, ${withAlpha(color, to)})`;
}

/** Evenly spaced multi-color linear gradient */
export function linearGradient(
  colors: string[],
  direction: Direction = "to right",
) {
  return `linear-gradient(${direction}, ${colors.join(", ")})`;
}

/** Fade the edge of a section into the page background */
export function edgeFade(
  background: string,
  edge: "top" | "bottom" | "left" | "right" = "bottom",
) {
  const direction: Record<typeof edge, Direction> = {
    top: "to top",
    bottom: "to bottom",
    left: "to left",
    right: "to right",
  };
  return `linear-gradient(${direction[edge]}, ${background}, transparent)`;
}

/* ---------- Conic ---------- */

export function conicGradient(
  colors: string[],
  {
    from = 0,
    position = "center",
  }: { from?: number; position?: Position } = {},
) {
  return `conic-gradient(from ${from}deg at ${position}, ${colors.join(", ")})`;
}

/* ---------- Mesh (several blurred blobs layered together) ---------- */

export type MeshLayer = {
  color: string;
  position: Position;
  alpha?: number;
  size?: string;
};

export function meshGradient(layers: MeshLayer[]) {
  return layers
    .map(({ color, position, alpha = 0.35, size = "55% 55%" }) =>
      compact(`
        radial-gradient(
          ellipse ${size} at ${position},
          ${withAlpha(color, alpha)} 0%,
          transparent 100%
        )
      `),
    )
    .join(", ");
}

/* ---------- Patterns ---------- */

export function gridPattern(
  color: string,
  size = 32,
  alpha = 0.08,
): CSSProperties {
  const line = withAlpha(color, alpha);
  return {
    backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
    backgroundSize: `${size}px ${size}px`,
  };
}

export function dotPattern(
  color: string,
  size = 24,
  dot = 1.5,
  alpha = 0.25,
): CSSProperties {
  return {
    backgroundImage: `radial-gradient(${withAlpha(color, alpha)} ${dot}px, transparent ${dot}px)`,
    backgroundSize: `${size}px ${size}px`,
  };
}

/* ---------- Style-object helpers ---------- */

/** Gradient border that keeps a solid fill (and rounded corners) */
export function borderGradient(
  fill: string,
  colors: string[],
  { width = 1, angle = "135deg" }: { width?: number; angle?: string } = {},
): CSSProperties {
  return {
    border: `${width}px solid transparent`,
    background: `linear-gradient(${fill}, ${fill}) padding-box, linear-gradient(${angle}, ${colors.join(", ")}) border-box`,
  };
}

/** Gradient text */
export function textGradient(
  colors: string[],
  direction: Direction = "to right",
): CSSProperties {
  return {
    backgroundImage: linearGradient(colors, direction),
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };
}

/** Fades an element out at one edge. Use for scroll areas and image bottoms */
export function fadeMask(
  edge: "top" | "bottom" | "left" | "right" | "both-y" | "both-x" = "bottom",
  size = "20%",
): CSSProperties {
  const map: Record<typeof edge, string> = {
    top: `linear-gradient(to bottom, transparent, black ${size})`,
    bottom: `linear-gradient(to bottom, black calc(100% - ${size}), transparent)`,
    left: `linear-gradient(to right, transparent, black ${size})`,
    right: `linear-gradient(to right, black calc(100% - ${size}), transparent)`,
    "both-y": `linear-gradient(to bottom, transparent, black ${size}, black calc(100% - ${size}), transparent)`,
    "both-x": `linear-gradient(to right, transparent, black ${size}, black calc(100% - ${size}), transparent)`,
  };
  return { maskImage: map[edge], WebkitMaskImage: map[edge] };
}
