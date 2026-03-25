export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="font-bold text-black text-lg tracking-tight hover:opacity-70 transition">
          Yanay Garcia
        </h1>

        {/* LINKS */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#projects" className="hover:text-black transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-black transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}