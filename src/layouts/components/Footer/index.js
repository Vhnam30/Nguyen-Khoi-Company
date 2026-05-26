import { Link } from "react-router-dom";
import routes from "../../../config/routes.js";
import styles from "./Footer.module.scss";
import { logo } from "../../../assets/img/logo/index.js";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Cột 1: Logo & Giới thiệu */}
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              <img src={logo} alt="Nguyễn Khôi Company" />
            </div>
            <p className={styles.footerDesc}>
              Nhà cung cấp vật liệu xây dựng uy tín hàng đầu. Chúng tôi cam kết
              mang đến chất lượng tốt nhất cho mọi công trình.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>Liên kết nhanh</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link to={routes.home}>Trang chủ</Link>
              </li>
              <li>
                <Link to={routes.product}>Sản phẩm</Link>
              </li>
              <li>
                <Link to={routes.services}>Dịch vụ</Link>
              </li>

              <li>
                <Link to={routes.aboutus}>Về chúng tôi</Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Sản phẩm */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>Sản phẩm chính</h3>
            <ul className={styles.footerLinks}>
              <li>Gạch các loại</li>
              <li>Bê tông thương phẩm</li>
              <li>Đá xây dựng</li>
            </ul>
          </div>

          {/* Cột 4: Liên hệ */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>Liên hệ với chúng tôi</h3>
            <div className={styles.contactInfo}>
              <p>
                <strong>Địa chỉ:</strong> Lô C20A KCN Hòa Bình, phường Đăk Bla,
                tỉnh Quảng Ngãi
              </p>
              <p>
                <strong>Hotline:</strong>{" "}
                <a href="tel:0941770995">0941.770.995</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@nguyenkhoico.com">info@nguyenkhoico.com</a>
              </p>
              <p>
                <strong>Giờ làm việc:</strong> 7:30 - 17:30 (Thứ 2 - Thứ 7)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p>© 2026 Nguyễn Khôi Company. All Rights Reserved.</p>
          <p>
            Thiết kế website bởi{" "}
            <span className={styles.highlight}>Nam Dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
