"use client";

import {
  CodeIcon,
  DeviceMobileIcon,
  MegaphoneIcon,
  PaletteIcon,
} from "@phosphor-icons/react";

import type { ReactNode } from "react";

interface Props {
  icon: string;
  color?: string;
}

export default function ServiceIcon({ icon, color = "text-white" }: Props) {
  let servIcon: ReactNode;
  switch (icon) {
    case "CodeIcon":
      servIcon = <CodeIcon className={`w-8 h-8 ${color}`} />;
      break;
    case "PaletteIcon":
      servIcon = <PaletteIcon className={`w-8 h-8 ${color}`} />;
      break;
    case "MegaphoneIcon":
      servIcon = <MegaphoneIcon className={`w-8 h-8 ${color}`} />;
      break;
    case "DeviceMobileIcon":
      servIcon = <DeviceMobileIcon className={`w-8 h-8 ${color}`} />;
      break;
    default:
      servIcon = <CodeIcon className={`w-8 h-8 ${color}`} />;
      break;
  }

  return servIcon;
}
