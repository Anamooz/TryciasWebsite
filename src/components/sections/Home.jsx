import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl leading-normal md:text-7xl font-bold mb-6 text-pink-300 leading-right">
            Hi, I'm Trycia Vong!
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I was born and raised in California. I went to California
            Polytechnic, San luis Obispo and graduated with a B.S in Software
            Engineering. I love to create and design web applications. My goal
            is to become a full-stack developer and work on accessible projects
            that make a difference in people's lives.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-pink-300 text-white py-3 px-6 rounded font-medium transition realtive overflow-hidden hover:-translate-y-0.5 hover:scale-105 hover:bg-pink-400/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-pink-300/50 text-pink-300 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-pink-400/30"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
