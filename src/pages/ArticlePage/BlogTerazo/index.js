import { Link } from "react-router-dom";
import styles from "./BlogTerazo.module.scss";
import routes from "../../../config/routes";
import { productBanner } from "../../../assets/img/pageBanner/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPhone,
  faMapMarkerAlt,
  faBuilding,
  faShieldAlt,
  faLayerGroup,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

function BlogTerazo() {
  return (
    <>
      {/* Banner Bài Viết */}
      <section className={styles.banner}>
        <img
          src={productBanner}
          alt="Gạch Terrazzo Kon Tum - Công Ty Nguyên Khôi"
          className={styles.bannerImage}
          loading="eager"
          fetchPriority="high"
        />
        <div className={styles.bannerOverlay}></div>
        <div className={styles.bannerContent}>
          <h1>Gạch Terrazzo Kon Tum</h1>
          <p>
            Mẫu Mã Đẹp - Chịu Lực Cao - Báo Giá Gạch Lát Sân Vườn, Vỉa Hè Tận Xưởng
          </p>
        </div>
      </section>

      {/* Nội dung bài viết */}
      <div className={styles.container}>
        <article className={styles.article}>
          {/* Lời Mở Đầu */}
          <p className={styles.lead}>
            <strong>Gạch Terrazzo (Gạch Đá Mài)</strong> là giải pháp hàng đầu trong việc lát vỉa hè, sân trường, công viên, quảng trường và khu vực sân vườn biệt thự tại Kon Tum. Với tính thẩm mỹ cao, độ bền vượt trội và khả năng chống trơn trượt tuyệt vời, gạch Terrazzo Nguyên Khôi luôn là sự lựa chọn ưu tiên của các nhà thầu.
          </p>

          {/* Hộp Báo Giá Nhanh (CTA Box) */}
          <div className={styles.ctaBox}>
            <div className={styles.ctaInfo}>
              <h3><FontAwesomeIcon icon={faBuilding} /> Nhà Máy Sản Xuất Gạch Terrazzo Nguyên Khôi Kon Tum</h3>
              <p>Cung cấp gạch Terrazzo 400x400mm đa dạng hoa văn, màu sắc, giá xuất xưởng tốt nhất thị trường.</p>
            </div>
            <a href="tel:0941770995" className={styles.ctaBtn}>
              <FontAwesomeIcon icon={faPhone} /> Nhận Báo Giá: 0941.770.995
            </a>
          </div>

          {/* Mục 1 */}
          <h2>1. Gạch Terrazzo Là Gì? Tại Sao Nên Lát Gạch Terrazzo Tại Kon Tum?</h2>
          <p>
            Gạch Terrazzo là dòng gạch ép không nung cao cấp, được cấu tạo từ các nguyên liệu chính bao gồm: xi măng, cát, đá mi, bột đá, hạt đá màu (đá thạch anh/đá hoa cương) và chất tạo màu thẩm mỹ. Nhờ công nghệ ép thủy lực áp lực cao, gạch sở hữu nhiều ưu điểm vượt trội:
          </p>
          <ul className={styles.checkList}>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.iconCheck} />
              <strong>Khả năng chịu lực cực tốt:</strong> Cường độ nén cao, không lo nứt vỡ khi ô tô, xe tải nhỏ di chuyển trên bề mặt.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.iconCheck} />
              <strong>Chống trơn trượt & Rêu mốc:</strong> Bề mặt mài mờ tạo độ bám tốt, thoát nước nhanh, cực kỳ an toàn vào mùa mưa tại Tây Nguyên.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.iconCheck} />
              <strong>Tính thẩm mỹ vượt trội:</strong> Đa dạng màu sắc (xám, đỏ, vàng, xanh) và nhiều hoa văn như mắt phụng, mắt nai, rẻ quạt, sọc cheo...
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.iconCheck} />
              <strong>Dễ dàng thi công & Dọn dẹp:</strong> Kích thước chuẩn xác giúp việc lát gạch nhanh chóng, dễ lau chùi, tiết kiệm thời gian.
            </li>
          </ul>

          {/* Mục 2 */}
          <h2>2. Thông Số Kỹ Thuật & Mẫu Mã Gạch Terrazzo Phổ Biến</h2>
          <p>
            Tại thị trường Kon Tum, Nguyên Khôi cung cấp dòng gạch Terrazzo chuẩn kích thước thông dụng nhất, phù hợp cho mọi công trình công cộng và dân dụng:
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>Tiêu Chí</th>
                  <th>Thông Số Chi Tiết</th>
                  <th>Mô Tả / Ứng Dụng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Kích thước chuẩn</strong></td>
                  <td>400 × 400 × 30 mm</td>
                  <td>Được ứng dụng cho 90% các công trình lát sân & vỉa hè</td>
                </tr>
                <tr>
                  <td><strong>Định mức sử dụng</strong></td>
                  <td>6.25 viên / m²</td>
                  <td>Tính toán chi phí nguyên vật liệu cực kỳ dễ dàng</td>
                </tr>
                <tr>
                  <td><strong>Màu sắc phổ biến</strong></td>
                  <td>Xám, Đỏ, Vàng, Xanh Lá</td>
                  <td>Tạo điểm nhấn thẩm mỹ sống động cho cảnh quan</td>
                </tr>
                <tr>
                  <td><strong>Hoa văn mặt gạch</strong></td>
                  <td>Mắt phụng, Mắt nai, Rẻ quạt, Khía rãnh</td>
                  <td>Tăng khả năng ma sát, chống trượt tối đa</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mục 3 */}
          <h2>3. Báo Giá Gạch Terrazzo Lát Vỉa Hè Tại Kon Tum Mới Nhất</h2>
          <p>
            Giá gạch Terrazzo tại Kon Tum phụ thuộc vào màu sắc (gạch màu xanh/vàng thường có giá chênh lệch nhẹ so với gạch màu xám/đỏ), khối lượng đặt hàng và cước phí vận chuyển.
          </p>
          
          <div className={styles.highlightNote}>
            <h4><FontAwesomeIcon icon={faShieldAlt} /> Quyền Lợi Khi Mua Gạch Terrazzo Tại Nguyên Khôi:</h4>
            <p>
              ✔ Sản phẩm đạt tiêu chuẩn chất lượng ISO & Tiêu chuẩn Bộ Xây Dựng. <br/>
              ✔ Hàng có sẵn số lượng lớn tại kho, giao hàng đúng hẹn. <br/>
              ✔ Chiết khấu ưu đãi lớn cho dự án đô thị, trường học, công viên tại Kon Tum.
            </p>
          </div>

          {/* Mục 4 */}
          <h2>4. Địa Chỉ Cung Cấp Gạch Terrazzo Uy Tín Tại Kon Tum</h2>
          <p>
            <strong>Công Ty TNHH MTV Nguyên Khôi</strong> tự hào là đối tác tin cậy chuyên sản xuất và phân phối gạch Terrazzo chất lượng cao tại Kon Tum. Chúng tôi cam kết mang lại giải pháp lát sân vườn, vỉa hè hoàn hảo về cả độ bền lẫn tính thẩm mỹ.
          </p>

          <div className={styles.contactCard}>
            <h3>CÔNG TY TNHH MTV NGUYÊN KHÔI</h3>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Địa chỉ:</strong> Tỉnh Kon Tum (Hỗ trợ giao hàng toàn tỉnh & các huyện lân cận)</p>
            <p><FontAwesomeIcon icon={faPhone} /> <strong>Hotline tư vấn & Báo giá:</strong> <a href="tel:0941770995">0941.770.995</a></p>
            <p><FontAwesomeIcon icon={faPalette} /> <strong>Dịch vụ:</strong> Cung cấp mẫu thử tận nơi, tư vấn phối màu cảnh quan miễn phí.</p>
            
            <div className={styles.actionBtns}>
              <a href="tel:0941770995" className={styles.primaryBtn}>
                Gọi Báo Giá Ngay
              </a>
              <Link to={routes.product} className={styles.secondaryBtn}>
                Xem Các Sản Phẩm Khác
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default BlogTerazo;