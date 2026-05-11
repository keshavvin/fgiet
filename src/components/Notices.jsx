import { useEffect, useState } from 'react'
import {
  FaBullhorn, FaRegFileAlt, FaCalendarAlt, FaTimes,
  FaDownload, FaExternalLinkAlt, FaShareAlt, FaArrowRight
} from 'react-icons/fa'

const notices = [
  {
    id: 'n1',
    date: '12 Sep',
    fullDate: '12 September 2025',
    tag: 'Event',
    title: 'Feroze Gandhi Jayanti Celebration',
    text: 'Feroze Gandhi Jayanti Celebration - September 12, 1912',
    body: 'The institute proudly celebrates the birth anniversary of Feroze Gandhi on September 12. The day commemorates his vision and contribution to Indian society. All faculty, staff and students are cordially invited to attend the ceremony at the main auditorium starting 10:00 AM. The programme will include a tribute, speeches, cultural performances and refreshments.',
    venue: 'Main Auditorium, FGIET Campus',
    time: '10:00 AM onwards',
    link: '#'
  },
  {
    id: 'n2',
    date: '05 Aug',
    fullDate: '05 August 2025',
    tag: 'Notice',
    title: 'Odd Semester Classes & Induction Program 2025-26',
    text: 'Notice regarding Odd Semester Classes and Induction Program for newly admitted students (2025-26)',
    body: 'Odd semester classes for the academic year 2025-26 will commence from the date notified. All newly admitted students are required to attend the Induction Programme without fail. The programme will introduce students to the institute, its rules, facilities, and academic expectations. Detailed schedules will be available on the student portal and notice boards.',
    venue: 'Departmental Halls',
    pdf: '#'
  },
  {
    id: 'n3',
    date: '28 Jul',
    fullDate: '28 July 2025',
    tag: 'Admission',
    title: 'Format of Certificate Required During Admission',
    text: 'Format of certificate required during admission - download here',
    body: 'Candidates appearing for admission are required to submit certain certificates in the specified format. The official template includes Migration Certificate, Character Certificate, Category Certificate (where applicable) and Income Certificate. Please download the format, get it duly signed and stamped by the competent authority, and bring the original along with photocopies at the time of admission.',
    pdf: '#'
  },
  {
    id: 'n4',
    date: '20 Jul',
    fullDate: '20 July 2025',
    tag: 'News',
    title: 'Top Engineering Colleges of CS — Placement Highlights',
    text: 'Top engineering colleges of Computer Science with average placement details',
    body: 'FGIET has been recognised among the top engineering colleges for Computer Science in the Kanpur, Prayagraj, Lucknow and Banaras region. The institute reported strong placement statistics this year with an average package growing year over year and top recruiters from product, services and core industries visiting campus.',
    link: '#'
  },
  {
    id: 'n5',
    date: '15 Jul',
    fullDate: '15 July 2025',
    tag: 'Important',
    title: 'Anti-Ragging Policy — Mandatory for All Students',
    text: 'Anti-Ragging Committee constituted - All students must read the policy',
    body: 'In strict compliance with the UGC Regulations on curbing the menace of ragging, FGIET has constituted an Anti-Ragging Committee and an Anti-Ragging Squad. Ragging in any form is strictly prohibited within and outside the institute premises. Violators will face severe disciplinary action including suspension/expulsion and FIR with local police. All students must read and acknowledge the policy.',
    pdf: '#'
  },
  {
    id: 'n6',
    date: '10 Jul',
    fullDate: '10 July 2025',
    tag: 'Fee',
    title: 'Online Fee Submission Portal — Now Live',
    text: 'Online Fee Submission portal is now live - Pay your fees seamlessly',
    body: 'Students can now pay their semester fees online through the new fee submission portal. Net Banking, UPI, Debit/Credit Cards and Wallets are supported. A digital receipt is generated instantly. For any issues, contact the Accounts Section between 10:00 AM and 4:00 PM on working days.',
    link: '#'
  }
]

const events = [
  {
    id: 'e1',
    d: '15', m: 'May', t: 'Tech Fest 2026',
    desc: 'Annual technical festival featuring competitions and workshops',
    body: 'TechFest 2026 is our flagship annual technical festival — three days of coding contests, robotics competitions, hackathons, guest lectures from industry leaders, and a startup expo. Open to all FGIET students and visiting teams from nearby colleges. Register on the student portal.',
    venue: 'Main Quadrangle & Departmental Labs',
    fullDate: '15 - 17 May 2026'
  },
  {
    id: 'e2',
    d: '22', m: 'May', t: 'Career Counseling',
    desc: 'Industry experts to guide on career opportunities',
    body: 'An interactive career counseling session with leading industry experts and FGIET alumni working at top global companies. Topics include resume building, interview preparation, choosing between higher studies and industry, and emerging career paths in AI/ML, full-stack, and core engineering.',
    venue: 'Seminar Hall',
    fullDate: '22 May 2026 • 11:00 AM'
  },
  {
    id: 'e3',
    d: '01', m: 'Jun', t: 'Convocation 2026',
    desc: 'Annual graduation ceremony for outgoing batch',
    body: 'The 2026 convocation ceremony for the outgoing batch will be held on 1 June. Degrees will be conferred upon graduating students by the Honourable Vice Chancellor. Parents, family and well-wishers are invited. Robes will be distributed one day prior. Photography permitted in designated areas.',
    venue: 'Main Auditorium',
    fullDate: '01 June 2026 • 10:30 AM'
  }
]

const tagColors = {
  Event: 'bg-purple-100 text-purple-700 ring-purple-200',
  Notice: 'bg-blue-100 text-blue-700 ring-blue-200',
  Admission: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
  News: 'bg-amber-100 text-amber-700 ring-amber-200',
  Important: 'bg-rose-100 text-rose-700 ring-rose-200',
  Fee: 'bg-indigo-100 text-indigo-700 ring-indigo-200'
}

function NoticeModal({ item, onClose }) {
  // ESC to close + lock body scroll — only while a modal is actually open
  useEffect(() => {
    if (!item) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [item, onClose])

  if (!item) return null

  const isNotice = !!item.tag

  const share = async () => {
    const url = window.location.href
    const text = (item.title || item.t) + ' — FGIET'
    if (navigator.share) {
      try { await navigator.share({ title: text, url }) } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(url)
        alert('Link copied to clipboard')
      } catch {
        alert(url)
      }
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="notice-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-5 sm:px-7 py-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            {isNotice ? (
              <span className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded ring-1 ${tagColors[item.tag]} text-blue-900 bg-white mb-2`}>
                {item.tag}
              </span>
            ) : (
              <span className="inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-500 text-white mb-2">
                EVENT
              </span>
            )}
            <h3 id="notice-title" className="text-lg sm:text-xl font-semibold leading-snug">
              {item.title || item.t}
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              {item.fullDate || `${item.d} ${item.m}`} {item.time && `• ${item.time}`}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-5 sm:p-7 overflow-y-auto text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>{item.body || item.desc || item.text}</p>
          {item.venue && (
            <p className="mt-4 text-sm">
              <strong className="text-slate-900">Venue:</strong> {item.venue}
            </p>
          )}
        </div>

        <div className="px-5 sm:px-7 py-4 border-t border-slate-100 bg-slate-50 flex flex-wrap gap-2 sm:gap-3 justify-end">
          <button
            onClick={share}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold px-4 py-2 rounded-full text-sm transition"
          >
            <FaShareAlt /> Share
          </button>
          {item.pdf && (
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition"
            >
              <FaDownload /> Download PDF
            </a>
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-full text-sm transition"
            >
              <FaExternalLinkAlt /> Read More
            </a>
          )}
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold px-4 py-2 rounded-full text-sm transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Notices() {
  const [selected, setSelected] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const visibleNotices = showAll ? notices : notices.slice(0, 4)

  return (
    <section className="py-14 md:py-20 px-4 bg-slate-100" id="notices">
      {/* Marquee */}
      <div className="max-w-7xl mx-auto mb-10 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-full shadow-lg overflow-hidden flex items-stretch">
        <div className="bg-amber-500 text-white px-4 md:px-6 py-3 flex items-center gap-2 font-bold text-sm whitespace-nowrap">
          <FaBullhorn className="animate-pulse" /> LATEST NEWS
        </div>
        <div className="flex-1 overflow-hidden relative flex items-center">
          <div className="animate-marquee whitespace-nowrap text-white text-sm py-3 px-4">
            🎓 Admissions Open for 2026-27 Academic Year &nbsp; • &nbsp; 📢 Induction Program for newly admitted students starts soon &nbsp; • &nbsp; 🏆 FGIET ranked among top engineering colleges in UP &nbsp; • &nbsp; 💼 Campus Placement Drive 2026 - Multiple companies visiting &nbsp; • &nbsp; 📚 Online Fee Submission now available
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Notices column */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 py-4 flex items-center justify-between">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <FaRegFileAlt /> Notices & Announcements
            </h3>
            <button
              onClick={() => setShowAll((v) => !v)}
              className="text-xs bg-amber-500 hover:bg-amber-600 px-3 py-1.5 rounded-full font-semibold transition inline-flex items-center gap-1.5"
            >
              {showAll ? 'Show Less' : 'View All'} <FaArrowRight className="text-[10px]" />
            </button>
          </div>
          <ul className={`divide-y divide-slate-100 transition-all ${showAll ? 'max-h-[640px]' : 'max-h-[420px]'} overflow-y-auto`}>
            {visibleNotices.map((n) => (
              <li key={n.id}>
                <button
                  type="button"
                  onClick={() => setSelected(n)}
                  className="w-full text-left px-4 md:px-6 py-4 hover:bg-blue-50/70 active:bg-blue-100 transition-colors group focus:outline-none focus-visible:bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-inset"
                  aria-label={`Open notice: ${n.title}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-blue-700 to-indigo-800 text-white rounded-xl flex flex-col items-center justify-center font-bold leading-tight shadow-md group-hover:scale-105 group-hover:shadow-lg transition">
                      <span className="text-base">{n.date.split(' ')[0]}</span>
                      <span className="text-[10px] uppercase">{n.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded ring-1 ${tagColors[n.tag]} mb-1`}>
                        {n.tag}
                      </span>
                      <p className="text-sm md:text-base text-slate-700 group-hover:text-blue-700 transition leading-snug">
                        {n.title}
                      </p>
                      <p className="text-xs text-slate-400 mt-1 group-hover:text-blue-500 transition flex items-center gap-1">
                        Read details <FaArrowRight className="text-[9px]" />
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming events */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-4 flex items-center justify-between">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <FaCalendarAlt /> Upcoming Events
            </h3>
          </div>
          <div className="p-4 md:p-6 space-y-3">
            {events.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => setSelected(e)}
                className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 active:bg-blue-100 transition focus:outline-none focus-visible:bg-blue-50 focus-visible:ring-2 focus-visible:ring-amber-400 group"
                aria-label={`Open event: ${e.t}`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300 flex flex-col items-center justify-center font-bold shadow-sm group-hover:scale-105 transition">
                  <span className="text-lg text-orange-700 leading-none">{e.d}</span>
                  <span className="text-[10px] uppercase text-amber-700">{e.m}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-sm text-slate-800 group-hover:text-blue-700 transition">{e.t}</h4>
                  <p className="text-xs text-slate-500 leading-snug mt-0.5">{e.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <NoticeModal item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
