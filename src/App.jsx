import { useEffect, useRef, useState } from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import QuickInfo from './components/QuickInfo'
import Notices from './components/Notices'
import CampusLife from './components/CampusLife'
import Stats from './components/Stats'
import Courses from './components/Courses'
import VideoSection from './components/VideoSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  // Measure the fixed header so we can reserve exactly the right amount of
  // space below it. ResizeObserver re-measures on viewport / breakpoint changes.
  useEffect(() => {
    if (!headerRef.current) return
    const update = () => {
      setHeaderHeight(headerRef.current?.offsetHeight ?? 0)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(headerRef.current)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  // Global scroll-triggered reveal animations.
  // Any element with class `reveal`, `reveal-up`, `reveal-left`, `reveal-right`,
  // or `reveal-scale` gets `is-visible` added when it scrolls into view.
  // Optional `data-delay` (ms) applies a stagger.
  useEffect(() => {
    const selector = '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale'
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay
            if (delay) entry.target.style.transitionDelay = `${delay}ms`
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    const observe = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains('is-visible')) observer.observe(el)
      })
    }
    observe()

    // Re-scan when new nodes mount (e.g. modal contents)
    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mo.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Fully-fixed top: TopBar + Header + Navbar always pinned to the top */}
      <div
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 shadow-lg"
      >
        <TopBar />
        <Header />
        <Navbar />
      </div>

      {/* Spacer that exactly matches the fixed header's height */}
      <div style={{ height: headerHeight }} aria-hidden="true" />

      {/* Anchor scrolling now accounts for the fixed header */}
      <style>{`html { scroll-padding-top: ${headerHeight}px; }`}</style>

      <Hero />
      <QuickInfo />
      <About />
      <Stats />
      <VideoSection />
      <Notices />
      <Courses />
      <CampusLife />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
