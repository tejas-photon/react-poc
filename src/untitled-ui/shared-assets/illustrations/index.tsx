
"use client";

import React, { type HTMLAttributes } from "react";
import { BoxIllustration } from "./box";
import { CloudIllustration } from "./cloud";
import { CreditCardIllustration } from "./credit-card";
import { DocumentsIllustration } from "./documents";

/**
 * Public props for all illustrations.
 * Exported as a named type so the DTS emitter can reference it.
 */
export interface IllustrationProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  svgClassName?: string;
  childrenClassName?: string;
}

/**
 * A reusable component type that consumes IllustrationProps.
 * Using a named type keeps declaration emit happy.
 */
export type IllustrationComponent = React.ComponentType<IllustrationProps>;

/**
 * Registry of available illustrations.
 * Explicitly typed to avoid leaking per-file inferred prop types (TS4023).
 */
export const types: Record<
  "box" | "cloud" | "documents" | "credit-card",
  IllustrationComponent
> = {
  box: BoxIllustration,
  cloud: CloudIllustration,
  documents: DocumentsIllustration,
  "credit-card": CreditCardIllustration,
};

/**
 * Wrapper that picks an illustration by `type` and forwards IllustrationProps.
 */
export const Illustration: React.FC<
  IllustrationProps & { type: keyof typeof types }
> = (props) => {
  const { type, ...rest } = props;
  const Component = types[type];
  return <Component {...rest} />;
};
