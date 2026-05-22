import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "../../../config/routes";
import styles from "./Header.module.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Xử lý scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Trang chủ", path: routes.home },
    { title: "Sản phẩm", path: routes.product },
    { title: "Dịch vụ", path: routes.services },
    { title: "Dự án nổi bật", path: routes.project },
    { title: "Về chúng tôi", path: routes.aboutus },
    { title: "Liên hệ", path: routes.contact },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.header__container}>
        {/* Logo */}
        <div className={styles.header__logo}>
          <Link to={routes.home}>
            <img 
              src="" 
              alt="Vật Liệu Xây Dựng Logo" 
              className={styles.header__logoImg}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.header__nav}>
          <ul className={styles.header__navList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.header__navItem}>
                <Link to={item.path} className={styles.header__navLink}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className={styles.header__action}>
          <Link to={routes.contact} className={styles.header__btn}>
            Liên hệ ngay
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button 
          className={`${styles.header__hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.header__mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <ul className={styles.header__mobileList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.header__mobileItem}>
              <Link 
                to={item.path} 
                onClick={() => setIsMenuOpen(false)}
                className={styles.header__mobileLink}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              to={routes.contact} 
              onClick={() => setIsMenuOpen(false)}
              className={styles.header__mobileBtn}
            >
              Liên hệ ngay
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;