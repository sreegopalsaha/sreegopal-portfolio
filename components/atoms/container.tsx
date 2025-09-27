import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen transition-colors duration-300">
    <div className="max-w-2xl mx-auto px-6 py-12">{children}</div>
  </div>
);
