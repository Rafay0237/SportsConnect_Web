import { FaInstagram, FaTwitter, FaFacebookF, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Footer() {
  const quickLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Events", path: "/events" },
    { title: "Contact", path: "/contact" },
  ]

  const sports = [
    { title: "Football", path: "/sports/football" },
    { title: "Cricket", path: "/sports/basketball" },
    { title: "Fifa", path: "/sports/tennis" },
    { title: "More Sports", path: "/sports/more" },
  ]

  const socialLinks = [
    { icon: FaInstagram, url: "https://instagram.com" },
    { icon: FaTwitter, url: "https://twitter.com" },
    { icon: FaFacebookF, url: "https://facebook.com" },
    { icon: FaWhatsapp, url: "https://whatsapp.com" },
  ]

  return (
    <footer className="bg-gradient-to-b from-[#0E1C37] to-[#292929] text-white p-5 lg:p-8 xl:p-10 pb-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sports Connect</h3>
            <p className="text-sm text-gray-300">
              Connecting athletes and sports enthusiasts worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="relative group w-fit">
                  <Link to={link.path} >
                    {link.title}
                  </Link>
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Sports</h4>
            <ul className="space-y-2">
              {sports.map((sport, index) => (
                <li key={index} className="relative group w-fit">
                  <Link to={sport.path} >
                    {sport.title}
                  </Link>
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sports Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}