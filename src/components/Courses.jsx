import { FaLaptopCode, FaCogs, FaBolt, FaIndustry, FaBuilding, FaChartLine, FaArrowRight } from 'react-icons/fa'

const courses = [
  { icon: <FaLaptopCode />, name: 'Computer Science & Engineering', seats: 120, color: 'from-blue-500 to-indigo-600' },
  { icon: <FaBolt />, name: 'Electronics & Communication', seats: 60, color: 'from-amber-500 to-orange-600' },
  { icon: <FaIndustry />, name: 'Electrical Engineering', seats: 60, color: 'from-rose-500 to-pink-600' },
  { icon: <FaCogs />, name: 'Mechanical Engineering', seats: 90, color: 'from-emerald-500 to-teal-600' },
  { icon: <FaBuilding />, name: 'Civil Engineering', seats: 60, color: 'from-purple-500 to-fuchsia-600' },
  { icon: <FaChartLine />, name: 'MBA - Master of Business Administration', seats: 60, color: 'from-cyan-500 to-blue-600' }
]

export default function Courses() {
  return (
    <section id="courses" className="py-14 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14 reveal-up">
          <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Academics</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mt-2" style={{ fontFamily: '"Poppins", "Inter", sans-serif', fontWeight: 600, letterSpacing: '-0.02em' }}>
            Courses We Offer
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3">
            Explore our diverse range of engineering and management programs designed to shape future leaders.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {courses.map((c, i) => (
            <div
              key={i}
              data-delay={i * 100}
              className="reveal-up bg-white rounded-2xl p-6 md:p-7 shadow-md hover:shadow-2xl border border-slate-100 hover:border-transparent transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br ${c.color} opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500`} />
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${c.color} text-white flex items-center justify-center text-2xl md:text-3xl mb-5 shadow-md group-hover:scale-110 transition`}>
                {c.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-blue-950 mb-2 leading-snug">{c.name}</h3>
              <p className="text-sm text-slate-500 mb-4">
                4 Years B.Tech Program • <strong className="text-slate-700">{c.seats} Seats</strong>
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:gap-3 transition-all">
                Learn More <FaArrowRight className="text-xs" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
