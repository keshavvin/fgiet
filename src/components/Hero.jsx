import { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaPlay, FaArrowRight, FaPause } from 'react-icons/fa'

const slides = [
  {
    title: 'Welcome to FGIET',
    subtitle: 'A Premier Institute of Engineering & Technology',
    desc: 'Established with a vision to develop world class technical professionals. Approved by AICTE & Affiliated to Dr. A.P.J. Abdul Kalam Technical University.',
    img: '/slides/01-institute-building.jpg',
    pos: 'center 40%',
    accent: 'from-blue-950/85 via-blue-900/55 to-indigo-900/35'
  },
  {
    title: 'A Spectacular 22.5 Acre Campus',
    subtitle: 'Green • Eco-friendly • Inspiring',
    desc: 'Set in a verdant 22.5-acre campus with sprawling lawns, sports facilities and modern infrastructure that fosters all-round student development.',
    img: '/slides/02-campus-aerial.jpg',
    pos: 'center 55%',
    accent: 'from-emerald-950/80 via-teal-900/55 to-blue-900/35'
  },
  {
    title: 'Knowledge at Your Fingertips',
    subtitle: 'Well-equipped Central Library',
    desc: 'A vibrant central library with an extensive collection of books, journals, e-resources and quiet study spaces — the heart of academic life at FGIET.',
    img: '/slides/03-library.jpg',
    pos: 'center 50%',
    accent: 'from-amber-950/80 via-orange-900/55 to-rose-900/35'
  },
  {
    title: 'Comfortable On-Campus Living',
    subtitle: 'Separate Hostels for Boys & Girls',
    desc: 'Hygienic, secure and hospitable hostels surrounded by greenery — a true home away from home for our students.',
    img: '/slides/04-hostel.jpg',
    pos: 'center 45%',
    accent: 'from-slate-950/85 via-blue-900/55 to-indigo-900/35'
  },
  {
    title: 'Modern Computer Labs',
    subtitle: 'Equipped for Tomorrow',
    desc: 'State-of-the-art computer centres with high-speed connectivity and the latest software — designed for long, fatigue-free learning sessions.',
    img: '/slides/05-computer-lab.jpg',
    pos: 'center 50%',
    accent: 'from-indigo-950/85 via-purple-900/55 to-blue-900/35'
  },
  {
    title: 'Celebrating Achievement',
    subtitle: 'Convocation & Awards',
    desc: 'Recognising the hard work, dedication and bright futures of our graduates — proud alumni continuing the FGIET legacy worldwide.',
    img: '/slides/06-convocation.jpg',
    pos: 'center 35%',
    accent: 'from-rose-950/85 via-pink-900/55 to-fuchsia-900/35'
  }
]

const AUTO_MS = 6500

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const [manualPause, setManualPause] = useState(false)
  const timerRef = useRef(null)
  const touchX = useRef(null)

  useEffect(() => {
    slides.forEach((s) => {
      const i = new Image()
      i.src = s.img
    })
  }, [])

  useEffect(() => {
    if (paused || manualPause) return
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length)
    }, AUTO_MS)
    return () => clearInterval(timerRef.current)
  }, [paused, manualPause])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === ' ' || e.key === 'Spacebar') {
        // Don't hijack space if user is in a form field
        const tag = (e.target?.tagName || '').toLowerCase()
        if (tag === 'input' || tag === 'textarea') return
        e.preventDefault()
        setManualPause((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const next = () => setIdx((i) => (i + 1) % slides.length)
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length)
  const goTo = (i) => setIdx(i)

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)()
    touchX.current = null
  }

  const s = slides[idx]
  const isPaused = paused || manualPause

  return (
    <section
      id="home"
      className="relative h-[400px] sm:h-[480px] md:h-[560px] lg:h-[640px] xl:h-[720px] overflow-hidden bg-slate-900 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="FGIET campus highlights"
    >
      {/* SVG sharpen filter — boosts perceived sharpness on low-res JPEGs */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="hero-sharpen">
            <feConvolveMatrix
              order="3"
              preserveAlpha="true"
              kernelMatrix="0 -0.6 0  -0.6 3.4 -0.6  0 -0.6 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Decorative dotted half-circle on the right edge (md+) */}
      <svg
        className="hidden md:block absolute -right-24 lg:-right-20 top-1/2 -translate-y-1/2 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] opacity-40 z-[5] pointer-events-none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" strokeDasharray="1 4" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(251,191,36,0.55)" strokeWidth="0.6" strokeDasharray="1 4" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="0.6" strokeDasharray="1 4" />
      </svg>

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${i === idx ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== idx}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className={`hero-img w-full h-full object-cover ${i === idx ? 'hero-img-active' : ''}`}
            style={{ objectPosition: slide.pos }}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)'
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 w-full">
          <div
            className="max-w-[88%] sm:max-w-md md:max-w-xl lg:max-w-2xl text-white"
            key={idx}
            style={{ hyphens: 'manual', WebkitHyphens: 'manual' }}
          >
            {/* Slide number indicator */}
            <div className="hero-stagger-1 mb-3 sm:mb-4 flex items-center gap-3 text-amber-400 font-semibold tracking-[0.2em] text-[10px] sm:text-xs">
              <span className="text-white/95 text-xs sm:text-sm font-bold">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="w-8 sm:w-10 h-px bg-amber-400/70" />
              <span>{String(slides.length).padStart(2, '0')}</span>
            </div>

            {/* Subtitle pill */}
            <span className="hero-stagger-2 inline-block bg-amber-500 text-white text-[10px] sm:text-xs md:text-sm font-bold px-2.5 sm:px-3 py-1 rounded-full mb-2.5 sm:mb-3 md:mb-4 uppercase tracking-wider shadow-lg ring-1 ring-amber-300/40">
              {s.subtitle}
            </span>

            {/* Title with gold underline accent */}
            <h2
              className="hero-stagger-3 hero-text-shadow text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 md:mb-5 break-words relative"
              style={{
                fontFamily: '"Poppins", "Inter", sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                hyphens: 'none',
                WebkitHyphens: 'none',
                color: '#ffffff'
              }}
            >
              {s.title}
              <span className="block mt-2 sm:mt-3 h-1 w-12 sm:w-16 md:w-20 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
            </h2>

            <p className="hero-stagger-4 hero-text-shadow text-[13px] sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-7 text-white/95 leading-relaxed line-clamp-3 sm:line-clamp-none">
              {s.desc}
            </p>

            <div className="hero-stagger-5 flex flex-wrap gap-2 sm:gap-3">
              <a
                href="#about"
                className="group inline-flex items-center gap-1.5 sm:gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full shadow-xl transition-all duration-300 hover:shadow-amber-500/40 hover:shadow-2xl text-xs sm:text-sm md:text-base"
              >
                Explore More
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#video"
                className="group inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border-2 border-white/40 hover:bg-white/20 hover:border-white/70 text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm md:text-base"
              >
                <FaPlay className="text-amber-400 text-[10px] sm:text-xs transition-transform duration-300 group-hover:scale-125" />
                Virtual Tour
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-13 md:h-13 lg:w-14 lg:h-14 bg-white/10 hover:bg-amber-500 backdrop-blur-md text-white rounded-full items-center justify-center transition-all duration-300 ring-1 ring-white/20 hover:ring-amber-400 hover:scale-110 group"
      >
        <FaChevronLeft className="transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-13 md:h-13 lg:w-14 lg:h-14 bg-white/10 hover:bg-amber-500 backdrop-blur-md text-white rounded-full items-center justify-center transition-all duration-300 ring-1 ring-white/20 hover:ring-amber-400 hover:scale-110 group"
      >
        <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>

      {/* Bottom control bar */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md ring-1 ring-white/10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === idx}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                  i === idx
                    ? 'bg-amber-400 w-7 sm:w-10'
                    : 'bg-white/50 hover:bg-white w-1.5 sm:w-2'
                }`}
              />
            ))}
          </div>

          {/* Play/pause toggle */}
          <button
            onClick={() => setManualPause((v) => !v)}
            aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
            className="hidden sm:flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-amber-500 backdrop-blur-md text-white ring-1 ring-white/10 transition-all duration-300 hover:scale-110"
          >
            {isPaused ? <FaPlay className="text-[11px] ml-0.5" /> : <FaPause className="text-[11px]" />}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div
          key={idx + (isPaused ? 'p' : 'r')}
          className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
          style={{
            width: isPaused ? '0%' : '100%',
            transition: isPaused ? 'none' : `width ${AUTO_MS}ms linear`
          }}
        />
      </div>
    </section>
  )
}
