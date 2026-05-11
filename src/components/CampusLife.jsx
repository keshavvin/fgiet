import { FaDesktop, FaBookOpen, FaBed, FaShieldAlt, FaArrowRight } from 'react-icons/fa'

const items = [
  {
    icon: <FaDesktop />,
    title: 'Computer Lab',
    desc: 'The computer centre is designed, laid out and equipped so scientifically that the students can spend hours together at the terminals without fatigue.',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: <FaBookOpen />,
    title: 'Library',
    desc: 'A well equipped library is the heart of any academic institution and FGIET library has a very active learning ambience with a wide collection of books.',
    img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: <FaBed />,
    title: 'Hostel',
    desc: 'FGIET has separate hostels for boys and girls which have a hygienic and hospitable atmosphere with greenery all around to make them feel cozy.',
    img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Anti-Ragging',
    desc: '"Ragging" means asking a student to do any act or perform something, causing, inducing, compelling or forcing a student. We have a zero-tolerance policy.',
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
    color: 'from-rose-500 to-pink-600'
  }
]

export default function CampusLife() {
  return (
    <section id="campus" className="py-14 md:py-20 px-4 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Life At Campus</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mt-2" style={{ fontFamily: '"Poppins", "Inter", sans-serif', fontWeight: 600, letterSpacing: '-0.02em' }}>
            Campus Life
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3">
            Discover world-class facilities and a vibrant campus that nurtures growth, learning, and lifelong friendships.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((it, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${it.color} opacity-60 group-hover:opacity-40 transition-opacity`} />
                <div className="absolute bottom-3 left-3 w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-xl text-blue-900 shadow-lg">
                  {it.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-blue-950 mb-2">{it.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-4">
                  {it.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:gap-2.5 transition-all">
                  Read More <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
