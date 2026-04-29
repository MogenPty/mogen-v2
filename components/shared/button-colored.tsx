"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface Props {
  children: React.ReactNode;
  foreColor?: string;
  backgroundColor?: string;
  className?: string;
}

export default function ButtonColored(props: Props) {
  const foreColor = props.foreColor ?? "text-white";
  const backgroundColor = props.backgroundColor ?? "bg-blue-300";
  return (
    <Button
      className={cn(
        "font-black py-4 neo-brutalist-border neo-brutalist-shadow hover:opacity-90 transform hover:scale-105 transition-all duration-200 hover:cursor-pointer",
        backgroundColor,
        foreColor,
        props.className,
      )}
    >
      {props.children}
    </Button>
  );
}
