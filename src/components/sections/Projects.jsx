import { RevealOnScroll } from "../RevealOnScroll.jsx";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl whitespace-nowrap space-x-4 font-bold mb-15 bg-gradient-to-r from-pink-300 to-white bg-clip-text text-transparent text-center">
            <span>₊˚‧︵‿₊୨ᰔ୧₊‿︵‧˚₊⊹ </span> <span>Featured Projects</span>
            <span>⊹₊˚‧︵‿₊୨ᰔ୧₊‿︵‧˚₊ </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Snake Game </h3>
              <p className="text-gray-400 mb-4">
                {" "}
                A simple game where a player controls a snake to eat food to
                grow while avoiding walls and its own body.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "AWT", "Java Swing"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Anamooz/snakeGame"
                  className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                >
                  {" "}
                  Github Repository →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">
              <video width="100%" height="100%" controls>
                <source
                  src="src\assets\videos\snakeGame.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Brick Breaker Game </h3>
              <p className="text-gray-400 mb-4">
                {" "}
                A classic arcade game where the player controls a paddle to
                bounce a ball and break bricks.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "JFrame", "JPanel"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Anamooz/project"
                  className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                >
                  {" "}
                  Github Repository →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">
              <video width="100%" height="100%" controls>
                <source
                  src="src\assets\videos\brickBreaker.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Rizzlet </h3>
              <p className="text-gray-400 mb-4">
                A fun and competitive way to study that features randomized
                flashcards to enhance learning retention and includes a game
                mode similar to Kahoot. Users can quickly answer questions
                dealing damage to other players based on how quickly one
                answers, earning gold along the way in order to strategically
                buy offensive or defensive items, and climb leaderboards, making
                studying both engaging and effective.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "TypeScript",
                  "React",
                  "Tailwind CSS",
                  "Express",
                  "Swagger",
                  "Joi",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Rizzlet/rizzlet"
                  className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                >
                  {" "}
                  Github Repository →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">
              <video width="100%" height="100%" controls>
                <source src="src\assets\videos\rizzlet.mov" type="video/mp4" />
              </video>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Genshin Impact Build Guide{" "}
              </h3>
              <p className="text-gray-400 mb-4">
                A build guide for the game Genshin Impact show casing the best
                builds for each character including their best weapons,
                artifacts, talent level priority, and their required materials.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Anamooz/webDevPrototype"
                  className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                >
                  {" "}
                  Github Repository →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">
              <video width="100%" height="100%" controls>
                <source
                  src="src\assets\videos\genshinImpact.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Vet Scientia </h3>
              <p className="text-gray-400 mb-4">
                An anesthetic vet simulator for veterinarian students who don't
                have the resources or opportunities or work on live animals.
                It's an alternative learning resource tool that both clinics and
                studying veterinarians can utilize.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "MongoDB", "Unity 6"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <div className="flex justify-between items-center">
                <p> Repository Unavailable</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">
              <video width="100%" height="100%" controls>
                <source
                  src="src\assets\videos\vetScientia.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Dodge Game </h3>
              <p className="text-gray-400 mb-4">
                {" "}
                A 2D pixel-art game where the player must dodge incoming
                obstacles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C++", "SFML"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Anamooz/dodgeGame"
                  className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                >
                  {" "}
                  Github Repository →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">
              <img
                src="src\assets\photos\cat2.webp"
                alt="Dodge Game"
                className="w-full h-auto rounded-lg"
              />
              <h5 className="mt-3"> (Work in progress)</h5>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
