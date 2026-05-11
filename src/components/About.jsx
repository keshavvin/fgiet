import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'

export default function About() {
  const features = [
    'Spectacular 22.5 acre eco-friendly campus',
    'Approved by AICTE & affiliated to AKTU',
    'Experienced & dedicated faculty members',
    'Modern infrastructure and well-equipped labs',
    'Excellent placement record with top recruiters',
    'Vibrant student life with clubs & activities'
  ]

  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image side */}
        <div className="relative reveal-left">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
            <img
              src="/about-fgiet.jpg"
              alt="Feroze Gandhi Institute of Engineering and Technology, RaeBareli — Main institute building"
              className="w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.src = '/slides/01-institute-building.jpg'
              }}
            />
          </div>

          {/* Floating badge — 22.5 acres */}
          <div className="absolute -bottom-5 left-2 sm:left-4 md:-left-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 max-w-[200px] sm:max-w-[240px] md:max-w-[260px] border-l-4 border-amber-500 animate-float">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900">22.5</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-700">Acres of Green Campus</p>
          </div>

          {/* Floating badge — Est. 1995 */}
          <div className="absolute -top-4 right-2 sm:right-4 md:-right-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-xl p-3 sm:p-4 md:p-5 text-white max-w-[160px] sm:max-w-[180px] md:max-w-[200px]">
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold">Est. 1995</p>
            <p className="text-[10px] sm:text-xs md:text-sm">Years of Excellence</p>
          </div>
        </div>

        {/* Content side */}
        <div className="reveal-right" data-delay="150">
          <span className="inline-block text-amber-600 text-sm font-bold uppercase tracking-widest mb-3">
            About FGIET
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 leading-tight mb-5" style={{ fontFamily: '"Poppins", "Inter", sans-serif', fontWeight: 600, letterSpacing: '-0.02em' }}>
            Welcome to Feroze Gandhi Institute of Engineering & Technology
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Feroze Gandhi Institute of Engineering & Technology is a premier institute,
            established with a vision to develop world class technical professionals.
            FGIET has a spectacular campus of <strong>22.5 acres</strong> with several
            conspicuous features.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            It offers an amiable, verdant and eco-friendly atmosphere to the students
            and fosters them to be more meditative, veracious and focused on their academic
            and personal growth.
          </p>

          <ul className="grid sm:grid-cols-2 gap-2.5 mb-8">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full transition shadow-lg hover:shadow-xl group"
          >
            Read More <FaArrowRight className="group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </section>
  )
}
