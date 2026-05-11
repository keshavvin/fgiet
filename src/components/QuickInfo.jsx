import { FaUserGraduate, FaFileAlt, FaUniversity, FaPhoneAlt } from 'react-icons/fa'

const items = [
  {
    icon: <FaUserGraduate />,
    title: 'Admission Open',
    desc: 'Apply for B.Tech, M.Tech & MBA',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    icon: <FaFileAlt />,
    title: 'Online Application',
    desc: 'Fill admission form online',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: <FaUniversity />,
    title: 'Online Fee Payment',
    desc: 'Pay your fees securely',
    color: 'from-emerald-600 to-teal-700'
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Helpline 24x7',
    desc: '8175002187 / 7054020187',
    color: 'from-rose-600 to-pink-700'
  }
]

export default function QuickInfo() {
  return (
    <section className="-mt-16 md:-mt-20 relative z-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {items.map((it, i) => (
          <a
            key={i}
            href="#"
            className={`group bg-gradient-to-br ${it.color} text-white rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-xl md:text-2xl mb-3 group-hover:scale-110 transition">
              {it.icon}
            </div>
            <h3 className="font-semibold text-base md:text-lg mb-1">{it.title}</h3>
            <p className="text-xs md:text-sm text-white/85 leading-snug">{it.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
