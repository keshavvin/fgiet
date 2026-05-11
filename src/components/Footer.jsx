import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe,
  FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn,
  FaGraduationCap, FaPaperPlane
} from 'react-icons/fa'

const quickLinks = ['About Us', 'Governance', 'Academics', 'Admissions', 'Facilities', 'Contact Us']
const importantLinks = ['ERP Login', 'NIRF', 'Online Grievance', 'Mandatory Disclosure', 'Feedback', 'Sitemap']
const policyLinks = ['Privacy Policy', 'Disclaimer', 'Webmail', 'Anti-Ragging', 'RTI']

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-slate-200">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-white">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Ready to Join FGIET?</h3>
            <p className="text-sm md:text-base text-white/90">Apply for admission 2026-27 - Limited seats available!</p>
          </div>
          <a href="#" className="bg-white text-orange-600 font-bold px-7 py-3 rounded-full shadow-lg hover:bg-blue-50 transition transform hover:scale-105 inline-flex items-center gap-2">
            <FaPaperPlane /> Apply Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
              <FaGraduationCap className="text-white text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg leading-tight">FGIET</h3>
              <p className="text-xs text-blue-200">RaeBareli, U.P.</p>
            </div>
          </div>
          <p className="text-sm text-blue-100/80 leading-relaxed mb-5">
            Feroze Gandhi Institute of Engineering & Technology — a premier institute developing world-class technical professionals since inception.
          </p>
          <div className="flex gap-2">
            {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors hover:scale-110 transform"
                aria-label="Social"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white text-lg mb-5 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-amber-500">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l, i) => (
              <li key={i}>
                <a href="#" className="text-sm text-blue-100/80 hover:text-amber-400 hover:pl-1.5 transition-all inline-block">
                  › {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="font-bold text-white text-lg mb-5 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-amber-500">
            Important Links
          </h4>
          <ul className="space-y-2.5">
            {importantLinks.map((l, i) => (
              <li key={i}>
                <a href="#" className="text-sm text-blue-100/80 hover:text-amber-400 hover:pl-1.5 transition-all inline-block">
                  › {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-white text-lg mb-5 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-amber-500">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-amber-400 mt-1 shrink-0" />
              <span className="text-blue-100/85">Lucknow Road, Near Ratapur Chauraha, RaeBareli (U.P.) - 229316</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-400 shrink-0" />
              <a href="tel:8175002187" className="text-blue-100/85 hover:text-amber-400 transition">
                8175002187, 7054020187
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-amber-400 shrink-0" />
              <a href="mailto:info@fgiet.ac.in" className="text-blue-100/85 hover:text-amber-400 transition break-all">
                info@fgiet.ac.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaGlobe className="text-amber-400 shrink-0" />
              <a href="#" className="text-blue-100/85 hover:text-amber-400 transition">www.fgiet.ac.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-5 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm">
          <p className="text-blue-200/70 text-center md:text-left">
            © {new Date().getFullYear()} Feroze Gandhi Institute of Engineering & Technology. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
            {policyLinks.map((p, i) => (
              <a key={i} href="#" className="text-blue-200/70 hover:text-amber-400 transition">
                {p}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
