import { FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "/src/assets/raviKumarLogo.webp";
import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label='Home'>
            <img src={logo} className="mx-2" width={50} height={50} alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/praniitmiisal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinekdIn"
              className="text-gray-800 hover:text-black transition-colors duration-300">
                <FaLinkedin/>
              </a>
              <a href="https://www.instagram.com/praniitmiisal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinekdIn"
              className="text-gray-800 hover:text-black transition-colors duration-300">
                <FaInstagram/>
              </a>
              <a href="https://www.linkedin.com/praniitmiisal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinekdIn"
              className="text-gray-800 hover:text-black transition-colors duration-300">
                <FaGithub/>
              </a>
        </div>

    </nav>
  )
}

export default Navbar
