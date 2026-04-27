"use client";

import { ArrowLeftIcon } from "@phosphor-icons/react";
import Link from "next/link";

interface Props {
  text: string;
  link: string;
}

export default function BackLink({ link, text }: Props) {
  return (
    <div className="mb-8">
      <Link
        href={link}
        className="inline-flex items-center gap-2 text-lg font-bold hover:text-purple-600 transition-colors"
      >
        <ArrowLeftIcon className="w-5 h-5" />
        {text}
      </Link>
    </div>
  );
}
