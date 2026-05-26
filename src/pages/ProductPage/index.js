import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import productImg from "../../assets/img/product/index.js";
import { productBanner } from "../../assets/img/pageBanner/index.js";

const products = [
  // BÊ TÔNG THƯƠNG PHẨM
  { id: 1, category: "betong", name: "Bê tông M100", spec: "Đá 1×2, độ sụt 12±2", type: "R8", desc: "Dùng cho nền đường, lót móng" },
  { id: 2, category: "betong", name: "Bê tông M150", spec: "Đá 1×2, độ sụt 12±2", type: "R7 & R8", desc: "Dùng cho sàn, dầm, cột" },
  { id: 3, category: "betong", name: "Bê tông M200", spec: "Đá 1×2, độ sụt 12±2", type: "R7 & R8", desc: "Phổ biến cho nhà dân dụng" },
  { id: 4, category: "betong", name: "Bê tông M250", spec: "Đá 1×2, độ sụt 12±2", type: "R7 & R8", desc: "Công trình yêu cầu cường độ cao" },
  { id: 5, category: "betong", name: "Bê tông M300", spec: "Đá 1×2, độ sụt 12±2", type: "R7 & R8", desc: "Dùng cho sàn chịu lực lớn" },
  { id: 6, category: "betong", name: "Bê tông M350", spec: "Đá 1×2, độ sụt 12±2", type: "R7 & R8", desc: "Công trình cao tầng, cầu đường" },
  { id: 7, category: "betong", name: "Bê tông M400", spec: "Đá 1×2, độ sụt 12±2", type: "R7 & R8", desc: "Công trình đặc biệt cao cấp" },

  // GẠCH KHÔNG NUNG
  { id: 8, category: "gach", name: "Gạch XMCL 6 lỗ", spec: "200×130×85 mm", type: "Không nung", desc: "Cách nhiệt, cách âm tốt" },
  { id: 9, category: "gach", name: "Gạch XMCL đặc", spec: "200×100×50 mm", type: "Không nung", desc: "Ốp tường, lát nền" },
  { id: 10, category: "gach", name: "Gạch XMCL đặc", spec: "260×170×120 mm", type: "Không nung", desc: "Tường chịu lực" },

  // ĐÁ XÂY DỰNG
  { id: 11, category: "da", name: "Đá 1×2 sàng 25", spec: "Đá sạch", type: "Đá dăm", desc: "Bê tông, nền đường" },
  { id: 12, category: "da", name: "Đá 1×2 sàng 27", spec: "Đá sạch", type: "Đá dăm", desc: "Bê tông chất lượng cao" },
  { id: 13, category: "da", name: "Đá 2×4", spec: "", type: "Đá dăm", desc: "Nền móng, thoát nước" },
  { id: 14, category: "da", name: "Đá 0.5", spec: "", type: "Đá mạt", desc: "Lót nền, san lấp" },
  { id: 15, category: "da", name: "Đá 4×6", spec: "", type: "Đá lớn", desc: "Móng nhà, kè sông" },
  { id: 16, category: "da", name: "Đá Cấp phối Dmax 25", spec: "", type: "Cấp phối", desc: "Nền đường, sân" },
  { id: 17, category: "da", name: "Đá Cấp phối Dmax 37", spec: "", type: "Cấp phối", desc: "Nền đường giao thông" },
  { id: 18, category: "da", name: "Đá Loka đập", spec: "", type: "Đá loka", desc: "Móng nhà, công trình" },
  { id: 19, category: "da", name: "Đá Loka sau nổ mìn", spec: "", type: "Đá loka", desc: "Công trình lớn" },
];

function ProductPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Banner Trang Sản Phẩm */}
      <section className={styles.productBanner}>
        <img 
          src={productBanner} 
          alt="Banner Sản phẩm Nguyên Khôi" 
          className={styles.bannerImage}
        />
        
        <div className={styles.bannerOverlay}></div>

        <div className={styles.bannerContent}>
          <h1>Sản Phẩm</h1>
          <p>Chất lượng cao - Giá cả cạnh tranh - Giao hàng nhanh chóng</p>
        </div>
      </section>

      <div className={styles.container}>
        {/* Filter Category */}
        <div className={styles.filterBar}>
          <button 
            className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.active : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            Tất cả sản phẩm
          </button>
          <button 
            className={`${styles.filterBtn} ${activeCategory === 'betong' ? styles.active : ''}`}
            onClick={() => setActiveCategory('betong')}
          >
            Bê tông thương phẩm
          </button>
          <button 
            className={`${styles.filterBtn} ${activeCategory === 'gach' ? styles.active : ''}`}
            onClick={() => setActiveCategory('gach')}
          >
            Gạch không nung
          </button>
          <button 
            className={`${styles.filterBtn} ${activeCategory === 'da' ? styles.active : ''}`}
            onClick={() => setActiveCategory('da')}
          >
            Đá xây dựng
          </button>
        </div>

        {/* Product Grid */}
        <div className={styles.productGrid}>
          {filteredProducts.map((product, index) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <img 
                  src={productImg[index]} 
                  alt={product.name} 
                />
              </div>
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p className={styles.spec}>{product.spec}</p>
                <p className={styles.type}>{product.type}</p>
                <p className={styles.desc}>{product.desc}</p>
                
                <Link to="/lien-he" className={styles.contactBtn}>
                  Liên hệ báo giá
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductPage;