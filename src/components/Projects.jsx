import { motion } from "framer-motion";
import moodverseImg from "../assets/projects/moodverse.png";
import readingImg from "../assets/projects/reading.png";
import neobankImg from "../assets/projects/neobank.png";


const projects = [
  {
    name: "Moodverse AI",
    desc: "Mood-based recommendation engine that suggests movies, books, and music using API integrations and dynamic filtering.",
    tech: ["React", "Tailwind", "API", "AI Logic"],
    image: moodverseImg,
    live: "https://moodverseai.netlify.app/",
    code: "https://github.com/Y8724/moodverse.git",
  },
  {
    name: "AI Reading Companion",
    desc: "Application for managing books and generating AI-powered summaries to enhance reading productivity.",
    tech: ["React", "API", "AI"],
    image: readingImg,
    live: "https://ai-reading-companion.netlify.app/",
    code: "https://github.com/Y8724/ai-reading-companion.git",
  },
  {
    name: "Neobank UI",
    desc: "Modern fintech landing page focused on responsive design, UI composition, and clean user experience.",
    tech: ["React", "Tailwind"],
    image: neobankImg,
    live: "https://neobankinc.netlify.app/",
    code: "https://github.com/Y8724/neobank.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">

      <h2 className="text-3xl text-gray-700 font-bold mb-12 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            
            {/* IMAGE */}
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-56 object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
              
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm mt-1 opacity-90">{p.desc}</p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t, index) => (
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
                  href={p.live}
                  target="_blank"
                  className="underline"
                >
                  Live
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  className="underline"
                >
                  Code
                </a>
              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}