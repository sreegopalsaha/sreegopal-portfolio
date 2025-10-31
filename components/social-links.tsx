import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import {
  Link000,
  Link001,
  Link002,
  Link003,
  Link004,
  Link005,
} from "./ui/skiper-ui/skiper40";
import { socialLinks as links } from "@/data/data";

export const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <Link001 href={links.github}>
        <div className="flex items-center gap-2">
          <Github size={18} /> GitHub
        </div>
      </Link001>
      <Link001 href={links.linkedin}>
        <div className="flex items-center gap-2">
          <Linkedin size={18} /> LinkedIn
        </div>
      </Link001>
      <Link005 className="md-blo" href={links.email}>
        <div className="flex items-center gap-2">
          <Mail size={18} />
          <span className="hidden sm:inline">sreegopal0101@gmail.com</span>
          <span className="inline sm:hidden">Email</span>
        </div>
      </Link005>
    </div>
  );
};
