import { Link } from "react-router-dom";
import styles from "./AboutPage.module.scss";
import { aboutBanner } from "../../assets/img/pageBanner/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function AboutPage() {
  return (
    <>
      {/* Banner About */}
      <section className={styles.aboutBanner}>
        <img
          src={aboutBanner}
          alt="Về Nguyên Khôi Company"
          className={styles.bannerImage}
        />

        <div className={styles.bannerOverlay}></div>

        <div className={styles.bannerContent}>
          <h1>Về Nguyên Khôi Company</h1>
          <p>Uy tín - Chất lượng - Đồng hành cùng công trình</p>
        </div>
      </section>

      <div className={styles.container}>
        {/* Giới thiệu */}
        <section className={styles.intro}>
          <h2 className={styles.sectionTitle}>Chúng Tôi Là Ai?</h2>
          <p>
            Thành lập từ năm 2016 tại Kon Tum,{" "}
            <strong>Nguyên Khôi Company</strong>
            tự hào là một trong những nhà cung cấp vật liệu xây dựng uy tín hàng
            đầu tại khu vực Tây Nguyên.
          </p>
          <p>
            Với hơn 9 năm kinh nghiệm trong ngành, chúng tôi chuyên cung cấp các
            sản phẩm bê tông thương phẩm, gạch không nung, đá xây dựng và dịch
            vụ bơm bê tông chuyên nghiệp. Chúng tôi cam kết mang đến cho khách
            hàng những sản phẩm chất lượng cao với giá cả cạnh tranh nhất.
          </p>
        </section>

        {/* Sứ mệnh & Tầm nhìn */}
        <section className={styles.mission}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3>Sứ Mệnh</h3>
              <p>
                Cung cấp vật liệu xây dựng chất lượng cao, góp phần tạo nên
                những công trình bền vững, an toàn và hiện đại cho cộng đồng.
              </p>
            </div>
            <div className={styles.missionCard}>
              <h3>Tầm Nhìn</h3>
              <p>
                Trở thành doanh nghiệp hàng đầu về vật liệu xây dựng tại Tây
                Nguyên.
              </p>
            </div>
          </div>
        </section>

        {/* Giá trị cốt lõi */}
        <section className={styles.values}>
          <h2 className={styles.sectionTitle}>Giá Trị Cốt Lõi</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
                <FontAwesomeIcon icon={faCheck} /> <strong>Chất Lượng</strong> - Sản phẩm chất lượng, đạt tiêu
              chuẩn
            </div>
            <div className={styles.valueItem}>
              <FontAwesomeIcon icon={faCheck} /> <strong>Uy Tín</strong> - Minh bạch, đúng cam kết
            </div>
            <div className={styles.valueItem}>
              <FontAwesomeIcon icon={faCheck} /> <strong>Tiết Kiệm</strong> - Giá cả cạnh tranh, tối ưu chi phí
            </div>
            <div className={styles.valueItem}>
              <FontAwesomeIcon icon={faCheck} /> <strong>Chuyên Nghiệp</strong> - Dịch vụ nhanh chóng, tận tâm
            </div>
          </div>
        </section>

        {/* Lý do chọn chúng tôi */}
        <section className={styles.whyChoose}>
          <h2 className={styles.sectionTitle}>Tại Sao Nên Chọn Nguyên Khôi?</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <h4>Kho Vật Liệu Đa Dạng</h4>
              <p>Bê tông, gạch không nung, đá xây dựng đầy đủ chủng loại</p>
            </div>
            <div className={styles.whyCard}>
              <h4>Dịch Vụ Bơm Bê Tông</h4>
              <p>Xe bơm cần 50m - 56m - 59m hiện đại</p>
            </div>
            <div className={styles.whyCard}>
              <h4>Giao Hàng Nhanh</h4>
              <p>Toàn tỉnh Kon Tum và các tỉnh lân cận</p>
            </div>
            <div className={styles.whyCard}>
              <h4>Hỗ Trợ Tận Tình</h4>
              <p>Tư vấn kỹ thuật miễn phí 24/7</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <h2>Bạn đang có dự án cần vật liệu xây dựng?</h2>
          <p>Hãy liên hệ ngay với chúng tôi để nhận báo giá tốt nhất</p>
          <Link to="/lien-he" className={styles.ctaBtn}>
            Liên Hệ Ngay
          </Link>
        </section>
      </div>
    </>
  );
}

export default AboutPage;
