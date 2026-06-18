export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Intro */}
      <div className="flex items-center gap-6 mb-12">
        <div
          className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center
                        justify-center text-2xl font-bold text-teal-400 shrink-0"
        >
          TC
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">About Me</h1>
          <p className="text-gray-400 mt-1">
            Builder, traveller, perpetual beginner
          </p>
        </div>
      </div>

      {/* Career pivot story */}
      <section className="space-y-5 text-gray-400 leading-relaxed animate-fade-in">
        <p>For most of my early twenties, I did the sensible thing.</p>
        <p>
          I studied Politics and International Relations at UCL, then moved into
          the kind of roles that look reassuring on paper. Research. Client
          relationships. Wealth management. Work that was steady and respectable
          and, if I'm honest, quietly not mine. I was good at the parts that
          involved understanding people and untangling problems. I was restless
          about everything else.
        </p>
        <p>
          The turning point wasn't loud. There was no single moment. Just a
          slow, stubborn realisation that I wanted to make things, not only
          manage them. I had spent years sitting beside technical people,
          admiring what they could build, quietly assuming that door was closed
          to someone with my background.
        </p>
        <p>So I decided to find out if it was.</p>
        <p>
          I gave myself a plan and an unreasonable amount of discipline.
          Mornings before work, evenings after. HTML, then JavaScript, then
          Python, then React, then AI. Each week a little less foreign than the
          last. There were blank screens that took me hours to fix and ideas
          that refused to click until, suddenly, they did. The thing I had
          assumed was locked turned out to be a door I could simply walk
          through.
        </p>
        <p>
          This site is what came out of that. The projects are real, built from
          scratch, mostly themed around the things I love: travel, the ocean,
          the feeling of landing somewhere new. I'm still early in this, and I
          like it that way. Choosing to be a beginner again has been one of the
          best decisions I've made.
        </p>
      </section>
    </div>
  );
}
