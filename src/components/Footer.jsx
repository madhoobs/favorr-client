import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <div className="logo-wrapper" alt="logo">
          <img className="logo" src="/logo.png" alt="Favorr Logo" />
        </div>
        <slogan>Freelance Services Marketplace</slogan>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Categories</h2>

          <ul className="nav__ul">
            <li>
              <Link to="/category/UX Design">UX Design</Link>
            </li>
            <li>
              <Link to="/category/Software Engineering">
                Software Engineering
              </Link>
            </li>
            <li>
              <Link to="/category/Graphic Design">Graphic Design</Link>
            </li>
            <li>
              <Link to="/category/Data Analytics">Data Analytics</Link>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <h2 className="nav__title">Quick Links</h2>

          <ul className="nav__ul">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>
          Copyleft<span className="copyleft">&copy;</span> 2023. All rights
          reversed from Fiverr.
        </p>

        <div className="legal__links">
          <span>
            Developed with <span className="heart">♥</span> by{' '}
            <Link to="https://github.com/madhoobs/favorr-client">Favorr</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
