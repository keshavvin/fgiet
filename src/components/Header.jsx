import { FaSearch, FaGraduationCap } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 py-3 md:py-4">
          {/* Logo */}
          <a
            href="#home"
            aria-label="FGIET Home"
            className="flex items-center shrink min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <img
              src="/logo.png"
              alt="Feroze Gandhi Institute of Engineering and Technology, RaeBareli — Approved by AICTE & Affiliated to Dr. A.P.J. Abdul Kalam Technical University"
              className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-[72px] w-auto max-w-full object-contain block"
              loading="eager"
              decoding="async"
              draggable={false}
            />
          </a>

          {/* Right cluster — search (lg+) + Apply Now (always) + Apply icon (mobile) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search — desktop only */}
            <div className="relative hidden lg:block">
              <input
                type="search"
                placeholder="Search..."
                aria-label="Search the website"
                className="pl-9 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm w-44 xl:w-56 transition"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none" />
            </div>

            {/* Search icon trigger — tablet only */}
            <button
              type="button"
              aria-label="Search"
              className="lg:hidden hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 transition"
            >
              <FaSearch />
            </button>

            {/* Apply Now — full label on sm+, icon-only on xs */}
            <a
              href="#admission"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all transform hover:scale-[1.03] whitespace-nowrap"
              style={{ fontWeight: 600 }}
            >
              Apply Now
            </a>
            <a
              href="#admission"
              aria-label="Apply Now"
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md hover:shadow-lg transition-transform active:scale-95"
            >
              <FaGraduationCap />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
