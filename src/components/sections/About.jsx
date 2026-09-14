import { RevealOnScroll } from "../RevealOnScroll.jsx";
import graduationPhoto from "../../assets/photos/graduation.JPEG";
import lazuliPhoto from "../../assets/photos/lazuli.JPG";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
  ];

  const backendSkills = ["Node.js", "Express", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 overflow-visible">
          <h2 className="text-3xl whitespace-nowrap space-x-4 font-bold mb-15 bg-gradient-to-r from-pink-300 to-white bg-clip-text text-transparent text-center">
            <span>₊˚‧︵‿₊୨ᰔ୧₊‿︵‧˚₊⊹ </span> <span>About Me</span>
            <span>⊹₊˚‧︵‿₊୨ᰔ୧₊‿︵‧˚₊ </span>
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              A passionate and dedicated recent graduate in software engineering
              with a strong foundation in web development and a keen eye for
              design. I am committed to creating user-friendly and visually
              appealing applications.
            </p>
            <p className="text-gray-300 mb-6"></p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <img
              src={graduationPhoto}
              alt="familyPhoto"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Software Engineering </strong> - California
                  Polytechnic State University, San Luis Obispo (2023-2025)
                </li>

                <li>
                  Relevant Coursework: Data Structures, Individual Software
                  Design and Development, Software Engineering I, Software
                  Engineering II, Design and Analysis of Algorithms, Systems
                  Programming, Software Construction, Software Deployment,
                  User-Centered Interface Design/Developement
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Student Ambassador at Berkeley City College (2021)
                  </h4>
                  <p>
                    Representing the college and assisting prospective students
                    and parents with information about programs, admissions, and
                    campus resources as a first point of contact.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold"> Waitress at Mikado (2023)</h4>
                </div>

                <div>
                  <h4 className="font-semibold">Hack4impact (2024)</h4>
                  <p>
                    Partners and advocacy committee at the national level of 15
                    chapters
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Waitress at Ichiban (2024-2026)
                  </h4>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Hobbies </h3>
              <ul className="list-['★_'] list-inside text-gray-300 space-y-3 marker:text-pink-300">
                <li>Tennis</li>
                <li>Exercising</li>
                <li>Reading</li>
                <li>Hiking</li>
                <li>Cooking</li>
                <li>Games</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <img
                src={lazuliPhoto}
                alt="lazuli"
                className="w-full h-auto rounded-lg"
              />
              <h5 className="mt-3">(My cute dog Lazuli)</h5>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
