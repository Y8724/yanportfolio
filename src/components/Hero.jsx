import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative text-center py-24 px-4 overflow-hidden">

      {/* animated gradient blobs, layered so the outer transform (mouse parallax)
          and inner animation (idle drift) don't fight each other */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mouse.x * 18}px, ${mouse.y * 14}px)`,
          transition: "transform 0.4s ease-out",
        }}
      >
        <div className="absolute -top-16 left-[8%] w-80 h-80 bg-gradient-to-br from-fuchsia-400/40 to-purple-500/30 blur-3xl animate-blob" />
        <div className="absolute top-10 right-[10%] w-72 h-72 bg-gradient-to-br from-indigo-400/40 to-blue-400/30 blur-3xl animate-float-delayed" />
        <div className="absolute bottom-[-4rem] left-[35%] w-64 h-64 bg-gradient-to-br from-amber-300/30 to-pink-400/30 blur-3xl animate-float-slow" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mouse.x * -12}px, ${mouse.y * -10}px)`,
          transition: "transform 0.4s ease-out",
        }}
      >
        <div className="absolute top-24 right-[20%] w-3 h-3 rounded-full bg-fuchsia-400/60 animate-float" />
        <div className="absolute bottom-20 left-[15%] w-2 h-2 rounded-full bg-indigo-400/60 animate-float-delayed" />
        <div className="absolute top-1/2 right-[8%] w-4 h-4 rounded-full border-2 border-purple-400/40 animate-float-slow" />
      </div>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-5xl md:text-6xl font-bold tracking-tight text-gray-900"
      >
        Hi, I’m Yanay! I build real web apps
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative text-gray-700 mt-6 max-w-2xl mx-auto text-lg"
      >
        Full-stack developer focused on building clean, functional applications
        using React, Node.js/Python backends, and{" "}
        <span className="gradient-text animate-gradient-x bg-200% font-semibold">
          real AI-powered features
        </span>
        .
      </motion.p>

      {/* MINI ABOUT */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="relative text-gray-500 mt-4 max-w-xl mx-auto text-sm"
      >
        I enjoy turning ideas into real products and continuously improving my
        skills by building projects that solve real problems.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative flex gap-4 justify-center mt-10 flex-wrap"
      >
        <a
          href="#projects"
          className="px-6 py-3 min-w-[160px] text-center bg-black text-white rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all"
        >
          View Projects
        </a>

        <a
          href="/cv.pdf"
          target="_blank"
          className="px-6 py-3 min-w-[160px] text-center bg-black text-white rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all"
        >
          View CV
        </a>

        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 min-w-[160px] text-center border border-black rounded-lg hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all"
        >
          Download CV
        </a>
      </motion.div>

    </section>
  );
}
