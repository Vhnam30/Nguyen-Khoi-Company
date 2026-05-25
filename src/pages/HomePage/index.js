import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import bannerImg from "../../assets/img/banner/index.js";
import productImg from "../../assets/img/product/index.js";
import projectImg from "../../assets/img/project/index.js";
const bannerSlides = [
  {
    id: 1,
    image: bannerImg[0],
    title: "Vật Liệu Xây Dựng Chất Lượng Cao",
    subtitle: "Đồng hành cùng mọi công trình bền vững",
  },
  {
    id: 2,
    image: bannerImg[1],
    title: "Giải Pháp Vật Liệu Toàn Diện",
    subtitle: "Từ nền móng vững chắc đến mái nhà hoàn hảo",
  },
  {
    id: 3,
    image: bannerImg[2],
    title: "Uy Tín - Chất Lượng - Tiết Kiệm",
    subtitle: "Hơn 10 năm kinh nghiệm phục vụ khách hàng",
  },
  {
    id: 4,
    image: bannerImg[3],
    title: "Xây Dựng Tương Lai Cùng Nguyên Khôi",
    subtitle: "Sản phẩm chất lượng - Giá cả cạnh tranh nhất",
  },
];

const productName = [
  "Bê tông thương phẩm",
  "Đá xây dựng",
  "Gạch các loại",
  "Đổ bê tông",
];

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* BANNER SLIDER */}
      <section className={styles.banner}>
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.overlay}></div>
            <div className={styles.bannerContent}>
              <h1 className={styles.bannerTitle}>{slide.title}</h1>
              <p className={styles.bannerSubtitle}>{slide.subtitle}</p>
              <Link to="/san-pham" className={styles.bannerBtn}>
                Khám phá ngay
              </Link>
            </div>
          </div>
        ))}

        <div className={styles.dots}>
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* GIỚI THIỆU CÔNG TY */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>Về Nguyên Khôi Company</h2>
              <p>
                Thành lập từ năm 2016, <strong>Nguyên Khôi Company</strong> tự
                hào là một trong những nhà cung cấp vật liệu xây dựng hàng đầu
                tại Tây Nguyên. Chúng tôi chuyên cung cấp đầy đủ các loại vật
                liệu từ thô đến tinh, phục vụ cho mọi loại công trình từ dân
                dụng đến công nghiệp.
              </p>
              <p>
                Với phương châm{" "}
                <strong>“Chất lượng là nền tảng - Uy tín là sức mạnh”</strong>,
                chúng tôi luôn cam kết mang đến cho khách hàng những sản phẩm
                chất lượng, giá cả cạnh tranh và dịch vụ hậu mãi tốt nhất.
              </p>
              <Link to="/ve-chung-toi" className={styles.aboutBtn}>
                Tìm hiểu thêm về chúng tôi →
              </Link>
            </div>
            <div className={styles.aboutImage}>
              <img
                src={bannerImg[3]}
                alt="Về Nguyên Khôi"
                className={styles.aboutImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SẢN PHẨM NỔI BẬT */}
      <section className={styles.products}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sản Phẩm Nổi Bật</h2>
          <div className={styles.productGrid}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.productCard}>
                <div className={styles.productImg}>
                  <img
                    src={productImg[i - 1]}
                    alt="Sản phẩm"
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.productInfo}>
                  <h3>{productName[i - 1]}</h3>
                  <p>Chất lượng cao, giá tốt nhất thị trường</p>
                  <Link to="/san-pham" className={styles.productLink}>
                    Xem chi tiết →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link to="/san-pham">Xem tất cả sản phẩm</Link>
          </div>
        </div>
      </section>

      {/* DỊCH VỤ */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Dịch Vụ Của Chúng Tôi</h2>
          <div className={styles.serviceGrid}>
            {["Tư vấn & Thiết kế", "Cung cấp vật liệu", "Vận chuyển"].map(
              (service, i) => (
                <div key={i} className={styles.serviceCard}>
                  <h3>{service}</h3>
                  <p>
                    Chúng tôi cung cấp dịch vụ chuyên nghiệp, nhanh chóng và
                    đáng tin cậy.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

    <section className={styles.projects}>
  <div className={styles.container}>
    <h2 className={styles.sectionTitle}>Dự Án Nổi Bật</h2>
    <div className={styles.projectGrid}>
      {[1, 2, 3].map((i) => (
        <div key={i} className={styles.projectCard}>
          <img 
            src={projectImg[i - 1]} 
            alt={`Dự án ${i}`} 
            className={styles.projectImage}
          />
          <div className={styles.projectOverlay}>
            <h4>Dự án {i}</h4>
            <p>Khách sạn / Chung cư / Nhà máy</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* LÝ DO CHỌN CHÚNG TÔI */}
      <section className={styles.whyUs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Tại Sao Nên Chọn Nguyên Khôi?</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>✅ Sản phẩm chất lượng 100%</div>
            <div className={styles.whyItem}>✅ Giá cả cạnh tranh</div>
            <div className={styles.whyItem}>✅ Giao hàng nhanh</div>
            <div className={styles.whyItem}>✅ Bảo hành dài hạn</div>
            <div className={styles.whyItem}>✅ Đội ngũ tư vấn chuyên sâu</div>
            <div className={styles.whyItem}>
              ✅ Hàng ngàn khách hàng hài lòng
            </div>
          </div>
        </div>
      </section>

      {/* CTA CUỐI TRANG */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Sẵn sàng cho công trình hoàn hảo của bạn?</h2>
          <p>
            Liên hệ ngay hôm nay để nhận tư vấn miễn phí và báo giá tốt nhất
          </p>
          <Link to="/lien-he" className={styles.ctaBtn}>
            Liên Hệ Ngay
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
