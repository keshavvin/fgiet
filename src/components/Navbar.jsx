import { useState } from 'react'
import { FaBars, FaTimes, FaChevronDown, FaChevronRight, FaHome } from 'react-icons/fa'

const menu = [
  { name: 'Home', icon: <FaHome />, link: '#home' },
  {
    name: 'About Us',
    items: ['About FGIET', 'Our Inspiration', 'Vision & Mission']
  },
  {
    name: 'Governance',
    items: ['Vice Chancellor Message', 'Governing Council', 'Secretary, RPA', 'Examinations Committee', 'University Act']
  },
  {
    name: 'Academics',
    items: [
      "Director's Desk",
      'Academic Programmes',
      {
        name: 'Admission',
        items: ['Admission Procedure', 'Eligibility Criteria', 'How to Apply', 'Fee Details']
      },
      'Departments',
      'Syllabus',
      'Academic Calendar',
      'Ordinances'
    ]
  },
  {
    name: 'Training & Placement',
    items: ['Department', 'Companies Visited', 'Placement']
  },
  {
    name: 'Fee Structure',
    items: ['Bachelors Programmes', 'Masters Programmes']
  },
  {
    name: 'Students',
    items: ['Anti Ragging']
  },
  {
    name: 'Facilities',
    items: ['Computer Lab', 'Library', 'Hostel', 'Others']
  },
  {
    name: 'Examinations',
    items: ['Result', 'Exam Schedule']
  },
  { name: 'Online Fee', link: '#payfee' },
  {
    name: 'Convocations',
    items: ['University Convocation']
  },
  {
    name: 'Gallery',
    items: ['Photo Gallery', 'Video Gallery', 'Media Gallery']
  },
  {
    name: 'Contacts',
    items: ['Directory', 'How To Reach']
  }
]

const isString = (v) => typeof v === 'string'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)
  const [activeSub, setActiveSub] = useState(null)

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative z-30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile / Tablet toggle (visible below xl) */}
        <div className="flex justify-between items-center py-2 xl:hidden">
          <span className="font-semibold text-sm">Menu</span>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="p-2 rounded hover:bg-white/10 transition"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Desktop menu (xl and up) */}
        <ul className="hidden xl:flex items-center justify-center flex-nowrap">
          {menu.map((item, i) => (
            <li
              key={i}
              className="relative group"
              onMouseEnter={() => { setActive(i); setActiveSub(null) }}
              onMouseLeave={() => { setActive(null); setActiveSub(null) }}
            >
              <a
                href={item.link || '#'}
                className="flex items-center gap-1 px-2 2xl:px-3 py-3.5 text-[13px] 2xl:text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {item.icon && <span className="text-amber-400">{item.icon}</span>}
                {item.name}
                {item.items && <FaChevronDown size={8} className="opacity-70" />}
              </a>

              {/* First-level dropdown */}
              {item.items && active === i && (
                <ul className="absolute top-full left-0 bg-slate-800 text-white shadow-2xl ring-1 ring-white/5 rounded-b-xl overflow-hidden min-w-[230px] py-1 border-t-4 border-red-600 fade-in">
                  {item.items.map((s, j) => {
                    if (isString(s)) {
                      return (
                        <li key={j}>
                          <a
                            href="#"
                            className="submenu-link"
                          >
                            <span className="submenu-bar" aria-hidden="true" />
                            <span className="relative z-10">{s}</span>
                          </a>
                        </li>
                      )
                    }
                    // Nested submenu
                    return (
                      <li
                        key={j}
                        className="relative"
                        onMouseEnter={() => setActiveSub(j)}
                        onMouseLeave={() => setActiveSub(null)}
                      >
                        <a
                          href="#"
                          className="submenu-link flex items-center justify-between gap-2"
                        >
                          <span className="submenu-bar" aria-hidden="true" />
                          <span className="relative z-10">{s.name}</span>
                          <FaChevronRight size={9} className="relative z-10 opacity-80" />
                        </a>
                        {activeSub === j && (
                          <ul className="absolute top-0 left-full bg-slate-800 text-white shadow-2xl ring-1 ring-white/5 rounded-r-xl overflow-hidden min-w-[220px] py-1 border-l-4 border-red-600 fade-in">
                            {s.items.map((t, k) => (
                              <li key={k}>
                                <a
                                  href="#"
                                  className="submenu-link"
                                >
                                  <span className="submenu-bar" aria-hidden="true" />
                                  <span className="relative z-10">{t}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile / Tablet dropdown */}
        {open && (
          <ul className="xl:hidden pb-3 max-h-[75vh] overflow-y-auto">
            {menu.map((item, i) => (
              <li key={i} className="border-b border-white/10">
                <details className="group">
                  <summary className="flex items-center justify-between px-2 py-3 cursor-pointer hover:bg-white/10 transition list-none">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      {item.icon && <span className="text-amber-400">{item.icon}</span>}
                      {item.name}
                    </span>
                    {item.items && <FaChevronDown size={11} className="group-open:rotate-180 transition-transform" />}
                  </summary>
                  {item.items && (
                    <ul className="bg-blue-950/40 py-1">
                      {item.items.map((s, j) => {
                        if (isString(s)) {
                          return (
                            <li key={j}>
                              <a
                                href="#"
                                onClick={() => setOpen(false)}
                                className="block pl-8 pr-4 py-2 text-sm hover:bg-white/10 transition"
                              >
                                {s}
                              </a>
                            </li>
                          )
                        }
                        // Nested submenu (mobile)
                        return (
                          <li key={j}>
                            <details className="group/sub">
                              <summary className="flex items-center justify-between pl-8 pr-4 py-2 text-sm cursor-pointer hover:bg-white/10 transition list-none">
                                {s.name}
                                <FaChevronDown size={10} className="opacity-70 group-open/sub:rotate-180 transition-transform" />
                              </summary>
                              <ul className="bg-blue-950/60">
                                {s.items.map((t, k) => (
                                  <li key={k}>
                                    <a
                                      href="#"
                                      onClick={() => setOpen(false)}
                                      className="block pl-12 pr-4 py-2 text-sm hover:bg-white/10 transition"
                                    >
                                      {t}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </details>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </details>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
