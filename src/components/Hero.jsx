import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-24 px-4">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900"
      >
        Hi, I’m Yanay — I build real web apps
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-700 mt-6 max-w-2xl mx-auto text-lg"
      >
        Full-stack developer focused on building clean, functional applications
        using React, APIs, and AI-powered solutions.
      </motion.p>

      {/* MINI ABOUT (THIS IS THE UPGRADE 🔥) */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="text-gray-500 mt-4 max-w-xl mx-auto text-sm"
      >
        I enjoy turning ideas into real products and continuously improving my
        skills by building projects that solve real problems.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex gap-4 justify-center mt-10 flex-wrap"
      >
        <a
          href="#projects"
          className="px-6 py-3 min-w-[160px] text-center bg-black text-white rounded-lg hover:opacity-90 transition"
        >
          View Projects
        </a>

        <a
          href="/cv.pdf"
          target="_blank"
          className="px-6 py-3 min-w-[160px] text-center bg-black text-white rounded-lg hover:opacity-90 transition"
        >
          View CV
        </a>

        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 min-w-[160px] text-center border border-black rounded-lg hover:bg-black hover:text-white transition"
        >
          Download CV
        </a>
      </motion.div>

    </section>
  );
}