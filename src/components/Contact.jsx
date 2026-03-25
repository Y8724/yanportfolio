import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    console.log(import.meta.env);
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_KEY
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        form.current.reset();
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 text-center">

        <h2 className="text-3xl text-gray-700 font-bold mb-6">Contact</h2>

        <p className="text-gray-600 mb-10">
          Have a project or opportunity? Let’s connect.
        </p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-xl shadow-sm space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full border rounded-lg px-4 py-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            name="reply_to"
            placeholder="Your email"
            required
            className="w-full border rounded-lg px-4 py-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="4"
            required
            className="w-full border rounded-lg px-4 py-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {success && (
          <p className="text-green-600 mt-4">
            Message sent successfully ✅
          </p>
        )}

        {error && (
          <p className="text-red-500 mt-4">
            Something went wrong. Try again.
          </p>
        )}

      </div>
    </section>
  );
}