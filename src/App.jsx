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
