import { useState } from 'react'
import {
  FaPlay, FaCheckCircle, FaYoutube, FaQuoteLeft, FaEye, FaClock, FaArrowRight
} from 'react-icons/fa'

const VIDEO_ID = 'GLpo7z4vnz8'

const highlights = [
  'Take a virtual walk-through of our 22.5-acre campus',
  'Glimpse of modern labs, library and hostels',
  'Vibrant student life and cultural moments',
  'Meet our dedicated faculty and alumni'
]

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section
      id="video"
      className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950"
    >
      {/* Decorative glow blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(251,191,36,0.35) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(99,102,241,0.45) 0%, transparent 50%)'
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      {/* Decorative dotted rings on the left */}
      <svg
        className="hidden lg:block absolute -left-32 top-1/3 w-[400px] h-[400px] opacity-25 pointer-events-none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(251,191,36,0.6)" strokeWidth="0.6" strokeDasharray="1 4" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="1 4" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(99,102,241,0.6)" strokeWidth="0.6" strokeDasharray="1 4" />
      </svg>

      <div className="max-w-7xl mx-auto relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Text column */}
        <div className="lg:col-span-5 text-white reveal-left">
          <span className="inline-flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            <FaYoutube className="text-red-500 text-base" />
            Watch Our Story
            <span className="w-8 h-px bg-amber-400/60" />
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-5"
            style={{ fontFamily: '"Poppins", "Inter", sans-serif', fontWeight: 600, letterSpacing: '-0.02em' }}
          >
            Take a Virtual Tour of <span className="text-amber-400">FGIET</span>
          </h2>
          <p className="text-blue-100/80 leading-relaxed mb-6 text-sm md:text-base">
            Step inside Feroze Gandhi Institute of Engineering & Technology, RaeBareli — a
            premier institute set on a spectacular 22.5-acre eco-friendly campus, fostering
            world-class technical professionals since inception.
          </p>

          {/* Quote card */}
          <div className="relative mb-6 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur">
            <FaQuoteLeft className="absolute top-3 right-4 text-amber-400/30 text-2xl" />
            <p className="text-blue-50/90 text-sm italic leading-relaxed">
              "FGIET shapes not just engineers, but thinkers, innovators and leaders ready
              to transform tomorrow."
            </p>
            <p className="text-amber-400 text-xs font-semibold mt-2 uppercase tracking-wider">
              — Director's Message
            </p>
          </div>

          <ul className="space-y-2.5 mb-7">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-base text-blue-50/90">
                <FaCheckCircle className="text-amber-400 mt-1 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://youtu.be/${VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-full shadow-xl transition-all transform hover:scale-105 hover:shadow-amber-500/40 text-sm md:text-base"
            >
              <FaYoutube /> Watch on YouTube
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#campus"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border-2 border-white/30 hover:bg-white/20 hover:border-white/60 text-white font-semibold px-6 py-3 rounded-full transition text-sm md:text-base"
            >
              Explore Campus
            </a>
          </div>
        </div>

        {/* Video column */}
        <div className="lg:col-span-7 reveal-right" data-delay="150">
          <div className="relative">
            {/* Decorative corner brackets */}
            <span aria-hidden="true" className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-amber-400 rounded-tl-xl" />
            <span aria-hidden="true" className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-amber-400 rounded-tr-xl" />
            <span aria-hidden="true" className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-amber-400 rounded-bl-xl" />
            <span aria-hidden="true" className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-amber-400 rounded-br-xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
              <div className="relative w-full aspect-video bg-black">
                {!playing ? (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label="Play FGIET video"
                    className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                      alt="FGIET virtual tour video thumbnail"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        if (!e.currentTarget.dataset.fallback) {
                          e.currentTarget.dataset.fallback = '1'
                          e.currentTarget.src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`
                        }
                      }}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
                    />

                    {/* Multi-ring pulsing play button */}
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="relative inline-flex items-center justify-center">
                        <span className="absolute w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-red-600/20 animate-ping" style={{ animationDuration: '2s' }} />
                        <span className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-red-600/30 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.4s' }} />
                        <span className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-red-600 group-hover:bg-red-700 shadow-2xl ring-4 ring-white/40 transition-all duration-300 group-hover:scale-110">
                          <FaPlay className="text-white text-xl sm:text-2xl md:text-3xl ml-1" />
                        </span>
                      </span>
                    </span>

                    {/* Bottom caption strip */}
                    <span className="absolute left-0 right-0 bottom-0 p-4 sm:p-5 md:p-6 text-left">
                      <span className="block text-white text-base sm:text-lg md:text-xl drop-shadow"
                        style={{ fontFamily: '"Poppins", "Inter", sans-serif', fontWeight: 600 }}
                      >
                        FGIET — Feroze Gandhi Institute of Engineering & Technology
                      </span>
                      <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-blue-100/80 text-xs sm:text-sm mt-2">
                        <span className="inline-flex items-center gap-1.5">
                          <FaPlay className="text-amber-400 text-[10px]" /> Click to play
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <FaEye className="text-amber-400 text-[10px]" /> Hosted on YouTube
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <FaClock className="text-amber-400 text-[10px]" /> HD Quality
                        </span>
                      </span>
                    </span>
                  </button>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    title="FGIET — Feroze Gandhi Institute of Engineering & Technology"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Floating badges */}
              <span
                aria-hidden="true"
                className="hidden md:flex absolute -top-4 -left-4 bg-gradient-to-br from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl items-center gap-1.5 ring-2 ring-white/20"
              >
                <FaPlay className="text-[10px]" /> CAMPUS TOUR
              </span>
              <span
                aria-hidden="true"
                className="hidden md:flex absolute -bottom-4 -right-4 bg-white text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-xl items-center gap-1.5 ring-2 ring-amber-400/40"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                4K HD
              </span>
            </div>

            {/* Below-video stat strip */}
            <div className="hidden sm:grid mt-6 grid-cols-3 gap-3">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-4 py-3 text-center">
                <p className="text-amber-400 text-lg md:text-xl font-bold">22.5</p>
                <p className="text-blue-100/70 text-[10px] md:text-xs uppercase tracking-wider mt-0.5">Acre Campus</p>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-4 py-3 text-center">
                <p className="text-amber-400 text-lg md:text-xl font-bold">2500+</p>
                <p className="text-blue-100/70 text-[10px] md:text-xs uppercase tracking-wider mt-0.5">Students</p>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-4 py-3 text-center">
                <p className="text-amber-400 text-lg md:text-xl font-bold">30+</p>
                <p className="text-blue-100/70 text-[10px] md:text-xs uppercase tracking-wider mt-0.5">Years Legacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
