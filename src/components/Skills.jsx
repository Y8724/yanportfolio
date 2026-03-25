import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "REST APIs"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "Vite", "Netlify", "Render"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl text-gray-700 font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-black">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm bg-white border px-3 py-1 rounded-full hover:bg-black hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}