import { useEffect, useRef, useState } from 'react'
import { FaUsers, FaChalkboardTeacher, FaBriefcase, FaAward, FaArrowUp } from 'react-icons/fa'

const stats = [
  {
    icon: <FaUsers />,
    value: 2500,
    label: 'Students Enrolled',
    suffix: '+',
    progress: 92,
    trend: '+12% YoY',
    color: 'from-blue-500 to-indigo-600',
    ringColor: '#60a5fa'
  },
  {
    icon: <FaChalkboardTeacher />,
    value: 150,
    label: 'Expert Faculty',
    suffix: '+',
    progress: 75,
    trend: 'PhD-qualified',
    color: 'from-emerald-500 to-teal-600',
    ringColor: '#34d399'
  },
  {
    icon: <FaBriefcase />,
    value: 95,
    label: 'Placement Rate',
    suffix: '%',
    progress: 95,
    trend: 'Top recruiters',
    color: 'from-amber-500 to-orange-600',
    ringColor: '#fbbf24'
  },
  {
    icon: <FaAward />,
    value: 30,
    label: 'Years of Legacy',
    suffix: '+',
    progress: 88,
    trend: 'Est. 1995',
    color: 'from-rose-500 to-pink-600',
    ringColor: '#fb7185'
  }
]

function Counter({ value, suffix }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const dur = 1800
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1)
          // Ease-out cubic for a more natural feel
          const eased = 1 - Math.pow(1 - p, 3)
          setN(Math.floor(eased * value))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value])

  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>
}

function ProgressRing({ progress, color }) {
  const radius = 26
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <svg className="absolute inset-0 -rotate-90" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
      <circle
        cx="32"
        cy="32"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1.6s cubic-bezier(0.22, 1, 0.36, 1)' }}
      />
    </svg>
  )
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950"
    >
      {/* Decorative glow blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 30%, rgba(251,191,36,0.25) 0%, transparent 45%), radial-gradient(circle at 85% 70%, rgba(99,102,241,0.45) 0%, transparent 50%)'
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* Floating animated dots */}
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-amber-400/40 animate-float" style={{ animationDelay: '0s' }} aria-hidden="true" />
      <div className="absolute bottom-32 right-16 w-2 h-2 rounded-full bg-blue-400/50 animate-float" style={{ animationDelay: '1s' }} aria-hidden="true" />
      <div className="absolute top-40 right-1/4 w-2 h-2 rounded-full bg-emerald-400/50 animate-float" style={{ animationDelay: '2s' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-16 reveal-up">
          <span className="inline-flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            <span className="w-8 h-px bg-amber-400/60" />
            Our Achievements
            <span className="w-8 h-px bg-amber-400/60" />
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-white mt-3 mb-4"
            style={{ fontFamily: '"Poppins", "Inter", sans-serif', fontWeight: 600, letterSpacing: '-0.02em' }}
          >
            Numbers That <span className="text-amber-400">Speak</span>
          </h2>
          <p className="text-blue-100/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Three decades of excellence, thousands of bright minds, and a legacy that continues to grow.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              data-delay={i * 120}
              className="reveal-up group relative"
            >
              {/* Gradient border wrapper */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} aria-hidden="true" />

              <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden group-hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                {/* Decorative corner accent */}
                <span
                  aria-hidden="true"
                  className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${s.color} opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-700 blur-xl`}
                />

                {/* Icon with progress ring */}
                <div className="relative w-16 h-16 mb-5 mx-auto sm:mx-0">
                  <ProgressRing progress={s.progress} color={s.ringColor} />
                  <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {s.icon}
                  </div>
                </div>

                {/* Number */}
                <p className="text-4xl sm:text-5xl text-white tracking-tight text-center sm:text-left"
                  style={{ fontFamily: '"Poppins", "Inter", sans-serif', fontWeight: 800 }}
                >
                  <Counter value={s.value} suffix={s.suffix} />
                </p>

                {/* Label */}
                <p className="text-blue-100/85 text-sm sm:text-base font-medium mt-2 text-center sm:text-left">
                  {s.label}
                </p>

                {/* Trend / supporting fact */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400">
                    <FaArrowUp className="text-[9px]" />
                  </span>
                  <span className="text-blue-100/70 font-medium">{s.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat ribbon */}
        <div
          className="reveal-up mt-10 md:mt-14 bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 backdrop-blur-md border border-amber-400/20 rounded-2xl p-5 sm:p-6 md:p-7 text-center"
          data-delay="500"
        >
          <p className="text-blue-100/85 text-sm sm:text-base">
            <span className="text-white font-semibold">Approved by AICTE</span> &nbsp;•&nbsp;
            <span className="text-white font-semibold">Affiliated to AKTU</span> &nbsp;•&nbsp;
            <span className="text-amber-400 font-semibold">NBA Accredited Programmes</span>
          </p>
        </div>
      </div>
    </section>
  )
}
