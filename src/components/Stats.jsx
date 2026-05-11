import { useEffect, useRef, useState } from 'react'
import { FaUsers, FaChalkboardTeacher, FaBriefcase, FaAward } from 'react-icons/fa'

const stats = [
  { icon: <FaUsers />, value: 2500, label: 'Students Enrolled', suffix: '+' },
  { icon: <FaChalkboardTeacher />, value: 150, label: 'Expert Faculty', suffix: '+' },
  { icon: <FaBriefcase />, value: 95, label: 'Placement Rate', suffix: '%' },
  { icon: <FaAward />, value: 30, label: 'Years of Legacy', suffix: '+' }
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
          setN(Math.floor(p * value))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value])

  return <span ref={ref}>{n}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-14 md:py-20 px-4 bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(251,191,36,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(99,102,241,0.4) 0%, transparent 50%)'
      }} />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">Our Achievements</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2" style={{ fontFamily: '"Poppins", "Inter", sans-serif', fontWeight: 600, letterSpacing: '-0.02em' }}>
            Numbers That Speak
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-8 text-center hover:bg-white/10 transition-all hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl shadow-lg mb-3 group-hover:scale-110 transition">
                {s.icon}
              </div>
              <p className="text-3xl md:text-5xl font-extrabold text-white">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-blue-100/80 text-sm md:text-base font-medium mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
