import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactPage.module.scss";
import {contactBanner} from "../../assets/img/pageBanner/index.js";
function ContactPage() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_hfqklec",      
        "template_hnwazhk",     
        form.current,
        "nkBGhwWozcQd9kbub"       
      )
      .then(
        () => {
          setStatus({ type: "success", message: "✅ Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm nhất." });
          form.current.reset();
        },
        (error) => {
          setStatus({ type: "error", message: "❌ Gửi thất bại. Vui lòng thử lại sau." });
          console.error(error);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <>
      {/* Banner Liên Hệ */}
      <section className={styles.contactBanner}>
        <img 
          src={contactBanner} 
          alt="Liên hệ Nguyên Khôi Company" 
          className={styles.bannerImage}
        />
        
        <div className={styles.bannerOverlay}></div>

        <div className={styles.bannerContent}>
          <h1>Liên Hệ Với Chúng Tôi</h1>
          <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7</p>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.contactContent}>
          
          {/* Thông tin liên hệ */}
          <div className={styles.contactInfo}>
            <h2>Thông Tin Liên Hệ</h2>
            
            <div className={styles.infoItem}>
              <strong>Địa chỉ:</strong>
              <p>Lô C20A KCN Hòa Bình, phường Đăk Bla, tỉnh Quảng Ngãi</p>
            </div>

            <div className={styles.infoItem}>
              <strong>Hotline / Zalo:</strong>
              <p><a href="tel:0941770995">0941.770.995</a></p>
            </div>

            <div className={styles.infoItem}>
              <strong>Email:</strong>
              <p><a href="mailto:info@nguyenkhoico.com">info@nguyenkhoico.com</a></p>
            </div>

            <div className={styles.infoItem}>
              <strong>Giờ làm việc:</strong>
              <p>7:30 - 17:30 (Thứ 2 đến Thứ 7)</p>
            </div>
          </div>

          {/* Form Liên Hệ */}
          <div className={styles.contactForm}>
            <h2>Gửi Thông Tin Liên Hệ</h2>
            
            {status.message && (
              <div className={`${styles.status} ${status.type === "success" ? styles.success : styles.error}`}>
                {status.message}
              </div>
            )}

            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.formGroup}>
                <input type="text" name="user_name" placeholder="Họ và tên *" required />
              </div>

              <div className={styles.formGroup}>
                <input type="tel" name="user_phone" placeholder="Số điện thoại *" required />
              </div>

              <div className={styles.formGroup}>
                <input type="email" name="user_email" placeholder="Email *" required />
              </div>

              <div className={styles.formGroup}>
                <input type="text" name="subject" placeholder="Tiêu đề *" required />
              </div>

              <div className={styles.formGroup}>
                <textarea 
                  name="message" 
                  rows="6" 
                  placeholder="Nội dung cần tư vấn..." 
                  required
                />
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSending}
              >
                {isSending ? "Đang gửi..." : "Gửi Thông Tin"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;