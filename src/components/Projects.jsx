import { useRef, useState } from "react";
import { motion } from "framer-motion";
import moodverseImg from "../assets/projects/moodverse.png";
import readingImg from "../assets/projects/reading.png";
import neobankImg from "../assets/projects/neobank.png";


const projects = [
  {
    name: "Moodverse AI",
    desc: "Mood-based recommendation app — a real GPT-4o-mini call interprets any free-text mood (not a fixed list) into movie, book, and music picks pulled live from TMDB, Google Books, and Deezer.",
    tech: ["React", "Node.js", "Express", "OpenAI API", "TMDB API"],
    image: moodverseImg,
    live: "https://moodverseai.netlify.app/",
    code: "https://github.com/Y8724/moodverse.git",
  },
  {
    name: "AI Reading Companion",
    desc: "Full-stack reading tracker with JWT authentication, per-user private libraries, an admin-curated public collection, and OpenAI-generated book summaries.",
    tech: ["React", "FastAPI", "PostgreSQL", "JWT Auth", "OpenAI"],
    image: readingImg,
    live: "https://ai-reading-companion.netlify.app/",
    code: "https://github.com/Y8724/ai-reading-companion.git",
  },
  {
    name: "NeoBank",
    desc: "Full-stack banking app — JWT-authenticated accounts, transfers and deposits backed by PostgreSQL via Prisma, and an on-demand AI spending-insights panel powered by OpenAI.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "OpenAI"],
    image: neobankImg,
    live: "https://neobankinc.netlify.app/",
    code: "https://github.com/Y8724/neobank.git",
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: (0.5 - py) * 12,
      ry: (px - 0.5) * 12,
      mx: px * 100,
      my: py * 100,
    });
  };

  const reset = () => setTilt({ rx: 0, ry: 0, mx: 50, my: 50 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group [perspective:1000px]"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300"
      >
        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-56 object-cover"
        />

        {/* CURSOR SPOTLIGHT */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(220px circle at ${tilt.mx}% ${tilt.my}%, rgba(255,255,255,0.25), transparent 70%)`,
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">

          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-sm mt-1 opacity-90">{project.desc}</p>

          {/* TECH */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((t, index) => (
              <span
                key={index}
                className="text-xs bg-white/20 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          {/* LINKS */}
          <div className="flex gap-4 mt-4 text-sm">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Live
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Code
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">

      <h2 className="text-3xl text-gray-700 font-bold mb-12 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
