import React from "react";
import { Grid2X2 } from "lucide-react";

export const Section = ({
  title,
  children,
  sectionId,
}: {
  title?: string;
  sectionId: string;
  children: React.ReactNode;
}) => (
  <section id={sectionId} className="mt-12">
    {title && (
      <div className="inline-flex items-center gap-2 mb-5 text-neutral-600 dark:text-neutral-400 text-sm">
        <Grid2X2 size={16} />
        <span>{title}</span>
      </div>
    )}
    <div>{children}</div>
  </section>
);
