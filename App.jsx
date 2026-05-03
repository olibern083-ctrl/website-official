import { Waves, Brain, Zap, Moon, Flame, Sparkles } from 'lucide-react'
export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <nav className="flex justify-between items-center px-8 py-4 bg-cream shadow-sm">
        <span className="text-3xl text-lavender font-script">Dear ADHD Me 💌</span>
        <div className="flex gap-6 text-sm font-medium text-bronze">
          <a href="#">Courses</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <button className="bg-rose text-white px-4 py-2 rounded-full">Get Started</button>
        </div>
      </nav>
      <section className="flex flex-col items-center justify-center text-center px-8 py-24 gap-6">
        <h1 className="text-5xl font-bold text-bronze leading-tight">
          You're not broken. <br />
          <span className="text-lavender">Your brain just works differently.</span>
        </h1>
        <p className="text-lg text-bronze max-w-xl">
          Practical, illustrated courses for adults with ADHD — built with compassion, not shame.
        </p>
        <button className="bg-rose text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md">
          Explore the Courses 💌
        </button>
      </section>
      <section className="bg-lavender py-16 px-8">
        <div className="flex flex-col md:flex-row justify-center gap-12 text-center text-white">
          <div>
            <p className="text-5xl font-bold">5%</p>
            <p className="text-sm mt-2 max-w-xs">of adults have ADHD — and most don't even know it yet.</p>
          </div>
          <div>
            <p className="text-5xl font-bold">80%</p>
            <p className="text-sm mt-2 max-w-xs">of adults with ADHD are undiagnosed or misdiagnosed.</p>
          </div>
          <div>
            <p className="text-5xl font-bold">You.</p>
            <p className="text-sm mt-2 max-w-xs">Finally have a place that gets it — and helps you thrive.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-8 bg-cream">
        <h2 className="text-3xl font-bold text-center text-bronze mb-12">
          What do you want to work on? 💌
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Emotional Dysregulation", icon: Waves, desc: "Understand and manage big feelings." },
            { title: "Executive Function", icon: Brain, desc: "Build systems that actually work for you." },
            { title: "Nervous System", icon: Zap, desc: "Regulate your body and calm the chaos." },
            { title: "Sleep", icon: Moon, desc: "Fix your sleep without the guilt." },
            { title: "Burnout", icon: Flame, desc: "Recover and protect your energy." },
            { title: "Identity", icon: Sparkles, desc: "Rediscover who you are beyond ADHD." },
          ].map((course) => (
            <div key={course.title} className="bg-white rounded-2xl p-6 shadow-sm border border-rose/20 hover:shadow-md transition">
              <course.icon size={32} color="#8E88A3" className="mb-3" />
              <h3 className="text-lg font-bold text-bronze">{course.title}</h3>
              <p className="text-sm text-bronze/70 mt-2">{course.desc}</p>
              <button className="mt-4 text-sm text-lavender font-semibold">Learn more →</button>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-bronze py-12 px-8 text-center text-cream">
        <p className="text-2xl font-bold mb-2">Dear ADHD Me 💌</p>
        <p className="text-sm opacity-75 mb-6">Practical courses for adults with ADHD — built with compassion, not shame.</p>
        <div className="flex justify-center gap-6 text-sm opacity-75">
          <a href="#">Courses</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <p className="text-xs opacity-50 mt-8">© 2025 Dear ADHD Me. All rights reserved.</p>
      </footer>
    </div>
  )
}