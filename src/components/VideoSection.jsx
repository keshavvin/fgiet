import { useState } from 'react'
import { FaPlay, FaCheckCircle, FaYoutube } from 'react-icons/fa'

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

      <div className="max-w-7xl mx-auto relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Text column */}
        <div className="lg:col-span-5 text-white reveal-left">
          <span className="inline-flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            <FaYoutube className="text-red-500 text-lg" /> Watch Our Story
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
            style={{ fontFamily: '"Poppins", "Inter", sans-serif', fontWeight: 600, letterSpacing: '-0.02em' }}
          >
            Take a Virtual Tour of <span className="text-amber-400">FGIET</span>
          </h2>
          <p className="text-blue-100/80 leading-relaxed mb-6 text-sm md:text-base">
            Step inside Feroze Gandhi Institute of Engineering & Technology, RaeBareli — a
            premier institute set on a spectacular 22.5-acre eco-friendly campus, fostering
            world-class technical professionals since inception.
          </p>

          <ul className="space-y-3 mb-8">
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
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-full shadow-xl transition transform hover:scale-105 text-sm md:text-base"
            >
              <FaYoutube /> Watch on YouTube
            </a>
            <a
              href="#campus"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border-2 border-white/30 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition text-sm md:text-base"
            >
              Explore Campus
            </a>
          </div>
        </div>

        {/* Video column */}
        <div className="lg:col-span-7 reveal-right" data-delay="150">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
            {/* 16:9 aspect ratio */}
            <div className="relative w-full aspect-video bg-black">
              {!playing ? (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play FGIET video"
                  className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
                >
                  {/* Thumbnail */}
                  <img
                    src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                    alt="FGIET virtual tour video thumbnail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      // maxres may not exist; fall back to hq
                      if (!e.currentTarget.dataset.fallback) {
                        e.currentTarget.dataset.fallback = '1'
                        e.currentTarget.src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`
                      }
                    }}
                  />
                  {/* Dark gradient overlay */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  />
                  {/* Pulsing play button */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="relative inline-flex">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-60 animate-ping" />
                      <span className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-red-600 group-hover:bg-red-700 shadow-2xl ring-4 ring-white/30 transition">
                        <FaPlay className="text-white text-xl sm:text-2xl md:text-3xl ml-1" />
                      </span>
                    </span>
                  </span>
                  {/* Caption bar */}
                  <span className="absolute left-0 right-0 bottom-0 p-4 sm:p-5 text-left">
                    <span className="block text-white font-bold text-base sm:text-lg md:text-xl drop-shadow">
                      FGIET — Feroze Gandhi Institute of Engineering & Technology
                    </span>
                    <span className="block text-blue-100/80 text-xs sm:text-sm mt-1">
                      Click to play • Hosted on YouTube
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

            {/* Decorative frame badges */}
            <span
              aria-hidden="true"
              className="hidden md:flex absolute -top-4 -left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg items-center gap-1.5"
            >
              <FaPlay className="text-[10px]" /> CAMPUS TOUR
            </span>
            <span
              aria-hidden="true"
              className="hidden md:block absolute -bottom-4 -right-4 bg-white text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
            >
              HD VIDEO
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
