import { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaPlay, FaArrowRight } from 'react-icons/fa'

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

const AUTO_MS = 6000

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)
  const touchX = useRef(null)

  // Preload all slide images so transitions stay smooth
  useEffect(() => {
    slides.forEach((s) => {
      const i = new Image()
      i.src = s.img
    })
  }, [])

  // Autoplay (pausable)
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length)
    }, AUTO_MS)
    return () => clearInterval(timerRef.current)
  }, [paused])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const next = () => setIdx((i) => (i + 1) % slides.length)
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length)

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)()
    touchX.current = null
  }

  const s = slides[idx]

  return (
    <section
      id="home"
      className="relative h-[380px] sm:h-[460px] md:h-[540px] lg:h-[620px] xl:h-[680px] overflow-hidden bg-slate-900 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="FGIET campus highlights"
    >
      {/* SVG filter (unsharp-mask) — boosts perceived sharpness on low-res JPEGs */}
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

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1100ms] ease-in-out ${i === idx ? 'opacity-100' : 'opacity-0'}`}
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
          {/* Layered overlays — strong dark gradient guarantees text contrast on any slide */}
          <div className="absolute inset-0 bg-black/35" />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)'
          }} />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 w-full">
          <div
            className="max-w-[88%] sm:max-w-md md:max-w-xl lg:max-w-2xl text-white fade-in"
            key={idx}
            style={{ hyphens: 'manual', WebkitHyphens: 'manual' }}
          >
            <span className="inline-block bg-amber-500 text-white text-[10px] sm:text-xs md:text-sm font-bold px-2.5 sm:px-3 py-1 rounded-full mb-2.5 sm:mb-3 md:mb-4 uppercase tracking-wider shadow-md">
              {s.subtitle}
            </span>
            <h2
              className="hero-text-shadow text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2.5 sm:mb-3 md:mb-4 break-words"
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
            </h2>
            <p className="hero-text-shadow text-[13px] sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 text-white/95 leading-relaxed line-clamp-3 sm:line-clamp-none">
              {s.desc}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a
                href="#about"
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full shadow-xl transition transform hover:scale-105 text-xs sm:text-sm md:text-base"
              >
                Explore More <FaArrowRight className="text-xs" />
              </a>
              <a
                href="#video"
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border-2 border-white/40 hover:bg-white/20 text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full transition text-xs sm:text-sm md:text-base"
              >
                <FaPlay className="text-amber-400 text-[10px] sm:text-xs" /> Virtual Tour
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows — hidden on smallest screens (swipe instead) */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full items-center justify-center transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full items-center justify-center transition"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === idx}
            className={`h-2 rounded-full transition-all ${i === idx ? 'bg-amber-400 w-8 sm:w-10' : 'bg-white/60 w-2 hover:bg-white'}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div
          key={idx + (paused ? 'p' : 'r')}
          className="h-full bg-amber-400"
          style={{
            width: paused ? '0%' : '100%',
            transition: paused ? 'none' : `width ${AUTO_MS}ms linear`
          }}
        />
      </div>
    </section>
  )
}
