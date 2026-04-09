"use client";

const links = ["about", "projects", "experience", "contact"];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-semibold tracking-wide">Karan Kumar</h1>
        <div className="hidden md:flex gap-8 text-sm text-neutral-400">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-white transition capitalize"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}