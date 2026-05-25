import { Link } from "react-router-dom";
import styles from "./ServicesPage.module.scss";


const services = [
  {
    id: 1,
    title: "Bơm Cần 50m",
    range: "Phạm vi bơm: 50 mét",
    desc: "Phù hợp cho các công trình nhà dân dụng, nhà phố, biệt thự và công trình quy mô vừa.",
    capacity: "Lưu lượng lớn, ổn định",
    icon: "🏗️"
  },
  {
    id: 2,
    title: "Bơm Cần 56m",
    range: "Phạm vi bơm: 56 mét",
    desc: "Dùng cho các công trình cao tầng, chung cư thấp tầng, trường học, bệnh viện.",
    capacity: "Hiệu suất cao, linh hoạt",
    icon: "🏗️"
  },
  {
    id: 3,
    title: "Bơm Cần 59m",
    range: "Phạm vi bơm: 59 mét",
    desc: "Dịch vụ cao cấp cho các công trình lớn, nhà máy, chung cư cao tầng.",
    capacity: "Công suất mạnh nhất",
    icon: "🏗️"
  }
];

function ServicesPage() {
  return (
    <>
 

      {/* Banner Dịch Vụ */}
      <section className={styles.serviceBanner}>
        <div className={styles.bannerContent}>
          <h1>Dịch Vụ Bơm Bê Tông</h1>
          <p>Chuyên nghiệp - Nhanh chóng - An toàn - Giá cả cạnh tranh</p>
        </div>
      </section>

      <div className={styles.container}>
        {/* Giới thiệu dịch vụ */}
        <section className={styles.intro}>
          <h2 className={styles.sectionTitle}>Dịch Vụ Bơm Bê Tông Chuyên Nghiệp</h2>
          <p>
            Chúng tôi cung cấp dịch vụ bơm bê tông bằng xe bơm cần với nhiều tầm vươn khác nhau, 
            đáp ứng mọi nhu cầu từ công trình nhỏ đến lớn. Thiết bị hiện đại, đội ngũ kỹ thuật giàu kinh nghiệm.
          </p>
        </section>

        {/* Danh sách dịch vụ */}
        <div className={styles.servicesGrid}>
          {services.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p className={styles.range}>{service.range}</p>
              <p className={styles.desc}>{service.desc}</p>
              <p className={styles.capacity}>{service.capacity}</p>

              <Link to="/lien-he" className={styles.contactBtn}>
                Liên hệ báo giá
              </Link>
            </div>
          ))}
        </div>

        {/* Phần lợi ích */}
        <section className={styles.benefits}>
          <h2 className={styles.sectionTitle}>Tại sao nên chọn dịch vụ bơm bê tông của chúng tôi?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>✅ Thiết bị hiện đại, bảo dưỡng định kỳ</div>
            <div className={styles.benefitItem}>✅ Đội ngũ vận hành giàu kinh nghiệm</div>
            <div className={styles.benefitItem}>✅ Bơm chính xác, ít hao hụt</div>
            <div className={styles.benefitItem}>✅ Giá cả minh bạch, cạnh tranh</div>
            <div className={styles.benefitItem}>✅ Hỗ trợ 24/7 khi cần</div>
            <div className={styles.benefitItem}>✅ Cam kết tiến độ công trình</div>
          </div>
        </section>
      </div>


    </>
  );
}

export default ServicesPage;