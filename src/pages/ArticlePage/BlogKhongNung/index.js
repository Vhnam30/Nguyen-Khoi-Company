import { Link } from "react-router-dom";
import styles from "./BlogKhongNung.module.scss";
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
} from "@fortawesome/free-solid-svg-icons";

function BlogKhongNung() {
  return (
    <>
      {/* Banner Bài Viết */}
      <section className={styles.banner}>
        <img
          src={productBanner}
          alt="Gạch Không Nung Kon Tum - Công Ty Nguyên Khôi"
          className={styles.bannerImage}
          loading="eager"
          fetchPriority="high"
        />
        <div className={styles.bannerOverlay}></div>
        <div className={styles.bannerContent}>
          <h1>Gạch Không Nung Kon Tum</h1>
          <p>
            Báo Giá & Địa Chỉ Mua Gạch Xi Măng Cốt Liệu Uy Tín, Giá Xưởng Chất Lượng Cao
          </p>
        </div>
      </section>

      {/* Nội dung bài viết */}
      <div className={styles.container}>
        <article className={styles.article}>
          {/* Lời Mở Đầu */}
          <p className={styles.lead}>
            Bạn đang tìm kiếm giải pháp vật liệu xây dựng bền vững, chịu lực tốt và
            tiết kiệm chi phí cho công trình tại Kon Tum? <strong>Gạch không nung (gạch xi măng cốt liệu)</strong>{" "}
            chính là xu hướng thay thế hoàn hảo cho gạch đất nung truyền thống, đáp ứng đầy đủ tiêu chuẩn kỹ thuật khắt khe của Bộ Xây dựng.
          </p>

          {/* Hộp Báo Giá Nhanh (CTA Box) */}
          <div className={styles.ctaBox}>
            <div className={styles.ctaInfo}>
              <h3><FontAwesomeIcon icon={faBuilding} /> Nhà Máy Gạch Không Nung Nguyên Khôi Kon Tum</h3>
              <p>Chuyên cung cấp gạch 6 lỗ, gạch đặc xi măng cốt liệu giá tận xưởng, hỗ trợ vận chuyển tận nơi.</p>
            </div>
            <a href="tel:0941770995" className={styles.ctaBtn}>
              <FontAwesomeIcon icon={faPhone} /> Nhận Báo Giá: 0941.770.995
            </a>
          </div>

          {/* Mục 1 */}
          <h2>1. Gạch Không Nung Là Gì? Vì Sao NÊN Dùng Cho Công Trình Tại Kon Tum?</h2>
          <p>
            Gạch không nung (đặc biệt là gạch xi măng cốt liệu - XMCL) được sản xuất từ các nguyên liệu như mạt đá, cát, xi măng và các phụ gia. Sản phẩm được định hình và tăng cường độ chịu lực thông qua công nghệ rung ép va đập mạ xoay hiện đại mà không cần qua quá trình nung nhiệt.
          </p>
          <ul className={styles.checkList}>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.iconCheck} />
              <strong>Cường độ chịu lực cao:</strong> Mác gạch đạt từ M7.5 đến M15, chịu tải trọng lớn, chống nứt tường vượt trội.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.iconCheck} />
              <strong>Cách âm, cách nhiệt hoàn hảo:</strong> Phù hợp với điều kiện thời tiết nắng nóng gay gắt và khí hậu Tây Nguyên.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.iconCheck} />
              <strong>Kích thước chuẩn xác:</strong> Giúp tiết kiệm đáng kể vữa xây trát và rút ngắn 20-30% thời gian thi công.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.iconCheck} />
              <strong>Bảo vệ môi trường:</strong> Không sử dụng đất nông nghiệp, không xả khí thải độc hại.
            </li>
          </ul>

          {/* Mục 2 */}
          <h2>2. Các Loại Gạch Không Nung Phổ Biến Tại Nguyên Khôi Kon Tum</h2>
          <p>
            Để đáp ứng nhu cầu đa dạng từ nhà dân dụng, biệt thự đến các dự án hạ tầng lớn tại Kon Tum, Công ty Nguyên Khôi sản xuất và phân phối các chủng loại gạch đạt chuẩn:
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>Tên Sản Phẩm</th>
                  <th>Kích Thước (D×R×C)</th>
                  <th>Loại/Đặc Tính</th>
                  <th>Ứng Dụng Chính</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Gạch XMCL 6 lỗ</strong></td>
                  <td>200 × 130 × 85 mm</td>
                  <td>6 lỗ rỗng</td>
                  <td>Xây tường bao, tường ngăn cách âm, chống nóng tốt</td>
                </tr>
                <tr>
                  <td><strong>Gạch XMCL đặc nhỏ</strong></td>
                  <td>200 × 100 × 50 mm</td>
                  <td>Đặc toàn phần</td>
                  <td>Ốp tường, lát nền, chân móng, chèn khuôn cửa</td>
                </tr>
                <tr>
                  <td><strong>Gạch XMCL đặc lớn</strong></td>
                  <td>260 × 170 × 120 mm</td>
                  <td>Chịu lực cao</td>
                  <td>Tường chịu lực, móng công trình, tường rào cao cấp</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mục 3 */}
          <h2>3. Báo Giá Gạch Không Nung Tại Kon Tum Mới Nhất</h2>
          <p>
            Giá gạch không nung tại Kon Tum biến động tùy thuộc vào số lượng đặt hàng, loại gạch và khoảng cách vận chuyển đến chân công trình (TP. Kon Tum, Đăk Hà, Đăk Tô, Ngọc Hồi,...).
          </p>
          
          <div className={styles.highlightNote}>
            <h4><FontAwesomeIcon icon={faShieldAlt} /> Cam Kết Về Giá Từ Nguyên Khôi:</h4>
            <p>
              ✔ Giá xuất xưởng trực tiếp, không qua trung gian. <br/>
              ✔ Chiết khấu cao cho các đại lý, nhà thầu và công trình lớn. <br/>
              ✔ Hỗ trợ xe cẩu giao hàng tận nơi nhanh chóng trong ngày.
            </p>
          </div>

          {/* Mục 4 */}
          <h2>4. Mua Gạch Không Nung Uy Tín Ở Đâu Tại Kon Tum?</h2>
          <p>
            <strong>Công Ty TNHH MTV Nguyên Khôi</strong> là đơn vị hàng đầu tại Kon Tum trong lĩnh vực sản xuất bê tông thương phẩm, gạch không nung và vật liệu xây dựng. Chúng tôi tự hào mang đến cho khách hàng các sản phẩm đạt tiêu chuẩn chất lượng cao nhất với mức giá cạnh tranh nhất trên thị trường.
          </p>

          <div className={styles.contactCard}>
            <h3>CÔNG TY TNHH MTV NGUYÊN KHÔI</h3>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Địa chỉ:</strong> Tỉnh Kon Tum (Hỗ trợ giao hàng toàn tỉnh & khu vực lân cận)</p>
            <p><FontAwesomeIcon icon={faPhone} /> <strong>Hotline tư vấn & Báo giá:</strong> <a href="tel:0941770995">0941.770.995</a></p>
            <p><FontAwesomeIcon icon={faLayerGroup} /> <strong>Sản phẩm cung cấp:</strong> Bê tông tươi, Gạch không nung, Gạch Terrazzo, Đá xây dựng.</p>
            
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

export default BlogKhongNung;