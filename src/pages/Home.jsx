import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6
                        bg-gradient-to-br from-gray-900 via-gray-900 to-teal-950"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
          Hi, I'm Tiffany.
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.15s" }}
        >
          I like figuring things out. Lately that means building with AI and
          code. Always it means being somewhere new. This site is a bit of both.
        </p>
        <div
          className="mt-8 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            to="/projects"
            className="inline-block px-8 py-3 bg-teal-500 text-white rounded-lg
                       font-medium hover:bg-teal-400 transition-colors duration-200"
          >
            See what I've built
          </Link>
        </div>
      </div>
    </section>
  );
}
