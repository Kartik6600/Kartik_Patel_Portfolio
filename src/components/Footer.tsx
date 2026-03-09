import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import resumeData from "../data/resume.json";

export default function Footer() {
  const { name, email, phone, location, address, links } = resumeData.basics;

  return (
    <footer className="relative py-12 px-6 bg-zinc-950 text-zinc-400 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-2xl font-bold tracking-tighter text-zinc-100">{name}</h2>
          <div className="flex flex-col gap-2 text-sm">
            <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
              <Mail className="w-4 h-4" />
              {email}
            </a>
            <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
              <Phone className="w-4 h-4" />
              {phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900/50 border border-zinc-800/50 hover:bg-indigo-500/10 hover:text-indigo-400 hover:border-indigo-500/20 transition-all duration-300"
            >
              {link.name.toLowerCase() === "linkedin" ? (
                <Linkedin className="w-5 h-5" />
              ) : link.name.toLowerCase() === "github" ? (
                <Github className="w-5 h-5" />
              ) : (
                <span className="text-sm font-medium">{link.name}</span>
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-800/50 text-center text-sm text-zinc-500 flex flex-col gap-2">
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <p className="text-xs">Connect with me.</p>
      </div>
    </footer>
  );
}
