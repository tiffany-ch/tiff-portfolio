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
        <p>
          I'm from Hong Kong. The expected move is law, medicine, finance,
          something with a clear ladder. I studied Politics and International
          Relations, and spent the rest of my twenties going off-script.
        </p>
        <p>
          My first job out of UCL was as a research analyst, and it taught me
          how to pick a messy problem apart and actually understand it.
          Alongside it, I spent two years doing digital marketing for a yoga
          teacher training, which is where I first got hooked on building things
          on the web. From there I kept following what looked interesting:
          managing projects for a clinic, handling client relationships at a
          wealth management firm. Each step taught me something I'm still glad I
          know, mostly about people, and about how businesses actually work up
          close. The throughline was always the same. I'm good with people, good
          at untangling things, and happiest when I'm learning something new.
        </p>
        <p>
          When my last role wrapped up, I had the space to think about what I
          wanted next. By then I was already living on the road, surrounded by
          people who worked from their laptops in whatever country they'd woken
          up in. They'd built the free, self-directed lives I'd always assumed
          were out of reach for someone like me. Seeing it up close made the
          whole thing feel possible.
        </p>
        <p>So I gave myself three months and a plan: learn to build with AI.</p>
        <p>
          I build with AI, mostly Claude, and learning to do that well, to turn
          a vague idea into something that actually works, has become the real
          skill. Everything on this site came out of that. Real projects, built
          from scratch, most of them themed around the things I love: travel,
          the ocean, the feeling of landing somewhere new.
        </p>
        <p>
          I'm still early in all of this, and I like it that way. Getting to be
          a beginner again has been one of the best parts.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Each category */}
          <div>
            <h3 className="text-sm font-medium text-teal-400 uppercase tracking-wider mb-2">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "JavaScript",
                "TypeScript",
                "HTML/CSS",
                "Tailwind",
              ].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          {/* Repeat for AI/ML, Tools, Soft Skills categories */}
        </div>
      </section>

      {/* What I'm Looking For */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">
          What I'm Looking For
        </h2>
        <p className="text-gray-400 leading-relaxed">
          I work in remote roles in AI automation, implementation consulting, or
          technical product management. Particularly interested in travel,
          wellness, and sustainability-focused companies.
        </p>
      </section>
    </div>
  );
}
