import React from "react";
import { ExternalLink } from "lucide-react";

export const Chip = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) =>
  href ? (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition border border-neutral-300 dark:border-neutral-800"
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ExternalLink size={14} className="opacity-60" />
    </a>
  ) : (
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 text-sm border border-neutral-300 dark:border-neutral-800">
      {children}
    </div>
  );
