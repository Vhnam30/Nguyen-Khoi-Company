

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "../../../config/routes";
import styles from "./Header.module.scss";
import { logo } from "../../../assets/img/logo/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Trang chủ", path: routes.home },
    { title: "Sản phẩm", path: routes.product },
    { title: "Dịch vụ", path: routes.services },
    { title: "Hình ảnh nhà máy", path: routes.mediaGallery },
    {
    title: "Kiến thức",
    path: routes.blogKhongNung, // Hoặc đường dẫn trang danh sách bài viết nếu có
    children: [
      {
        title: "Gạch Không Nung Kon Tum",
        path: routes.blogKhongNung,
      },
      {
        title: "Gạch Terazo Kon Tum",
        path: routes.blogTerazo,
      },
    ],
  },
    { title: "Về chúng tôi", path: routes.aboutus },
    { title: "Liên hệ", path: routes.contact },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.header__container}>
        {/* Logo */}
        <div className={styles.header__logo}>
          <Link to={routes.home}>
            <img
              src={logo}
              alt="Nguyễn Khôi Company"
              className={styles.header__logoImg}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.header__nav}>
          <ul className={styles.header__navList}>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`${styles.header__navItem} ${
                  item.children ? styles.hasDropdown : ""
                }`}
              >
                <Link to={item.path} className={styles.header__navLink}>
                  {item.title}
                  {item.children && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={styles.header__dropdownIcon}
                    />
                  )}
                </Link>

                {/* Submenu Dropdown cho Desktop */}
                {item.children && (
                  <ul className={styles.header__dropdown}>
                    {item.children.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.path}
                          className={styles.header__dropdownLink}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Hotline Button */}
        <div className={styles.header__action}>
          <a href="tel:0941770995" className={styles.header__btn}>
            <FontAwesomeIcon icon={faPhone} /> 0941.770.995
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`${styles.header__hamburger} ${
            isMenuOpen ? styles.active : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.header__mobileMenu} ${
          isMenuOpen ? styles.active : ""
        }`}
      >
        <ul className={styles.header__mobileList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.header__mobileItem}>
              {item.children ? (
                <div className={styles.header__mobileSubmenuWrapper}>
                  <div className={styles.header__mobileSubmenuHeader}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={styles.header__mobileLink}
                    >
                      {item.title}
                    </Link>
                    <button
                      className={styles.header__mobileToggleBtn}
                      onClick={() => setOpenMobileSubmenu(!openMobileSubmenu)}
                    >
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`${styles.header__mobileChevron} ${
                          openMobileSubmenu ? styles.rotated : ""
                        }`}
                      />
                    </button>
                  </div>
                  {openMobileSubmenu && (
                    <ul className={styles.header__mobileSubList}>
                      {item.children.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={styles.header__mobileSubLink}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={styles.header__mobileLink}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
          <li>
            <a
              href="tel:0941770995"
              onClick={() => setIsMenuOpen(false)}
              className={styles.header__mobileBtn}
            >
              <FontAwesomeIcon icon={faPhone} /> Gọi ngay: 0941.770.995
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;