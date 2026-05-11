import {
  FaUserGraduate, FaFileAlt, FaUniversity, FaPhoneAlt, FaArrowRight
} from 'react-icons/fa'

const items = [
  {
    icon: <FaUserGraduate />,
    title: 'Admission Open',
    desc: 'Now accepting applications for B.Tech, M.Tech & MBA programmes for the 2026-27 academic session.',
    link: '#admission',
    accent: false
  },
  {
    icon: <FaFileAlt />,
    title: 'Online Application',
    desc: 'Fill the admission form online quickly and securely from any device — anytime, anywhere.',
    link: '#apply',
    accent: true
  },
  {
    icon: <FaUniversity />,
    title: 'Online Fee Payment',
    desc: 'Pay your tuition and hostel fees seamlessly through our secure online payment portal.',
    link: '#fee',
    accent: false
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Helpline 24×7',
    desc: 'Round-the-clock support — reach us on 8175002187 / 7054020187 for any admission queries.',
    link: '#contact',
    accent: false
  }
]

export default function QuickInfo() {
  return (
    <section className="relative -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 z-20 px-4 pb-10 sm:pb-14 md:pb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {items.map((it, i) => {
          const isAccent = it.accent
          return (
            <a
              key={i}
              href={it.link}
              data-delay={i * 110}
              className={`reveal-up group relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 shadow-2xl ring-1 transition-all duration-500 hover:-translate-y-2 ${
                isAccent
                  ? 'bg-gradient-to-br from-orange-500 to-rose-500 ring-orange-300/40 hover:from-orange-600 hover:to-rose-600'
                  : 'bg-gradient-to-br from-slate-800/95 to-blue-950/95 backdrop-blur-md ring-white/10 hover:from-slate-800 hover:to-blue-950'
              }`}
            >
              {/* Decorative bg blob — appears on hover */}
              <span
                aria-hidden="true"
                className={`absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${
                  isAccent ? 'bg-white' : 'bg-amber-400'
                }`}
              />

              {/* Icon */}
              <div className="relative mb-4 sm:mb-5">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl text-2xl sm:text-3xl text-white ${
                    isAccent ? 'bg-white/20' : 'bg-white/10'
                  } ring-1 ring-white/15 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500`}
                >
                  {it.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative text-lg sm:text-xl md:text-2xl text-white mb-2 sm:mb-3 leading-tight"
                style={{ fontFamily: '"Poppins", "Inter", sans-serif', fontWeight: 600 }}
              >
                {it.title}
              </h3>

              {/* Description */}
              <p
                className={`relative text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 ${
                  isAccent ? 'text-white/95' : 'text-white/75'
                }`}
              >
                {it.desc}
              </p>

              {/* Read More */}
              <span className="relative inline-flex items-center gap-2 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Read More
                <span
                  className={`inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-all duration-300 group-hover:translate-x-1 ${
                    isAccent ? 'bg-white text-orange-600' : 'bg-amber-500 text-white'
                  }`}
                >
                  <FaArrowRight className="text-[10px] sm:text-xs" />
                </span>
              </span>

              {/* Subtle inner border highlight */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none"
              />
            </a>
          )
        })}
      </div>
    </section>
  )
}
