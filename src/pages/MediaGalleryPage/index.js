import React, { useState } from "react";
import styles from "./MediaGalleryPage.module.scss";
import {
  hinhAnhNhaMay,
  hinhAnhBomBeTong,
  vanChuyenVatLieu,
  toanCanhNhaMay,
  quyTrinhEpGach,
  quyTrinhXepGach,
} from "../../assets/img/media/index.js";
const MediaGalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dữ liệu mẫu - Bạn thay src bằng link thực tế
  const mediaList = [
    {
      id: 1,
      type: "image",
      src: hinhAnhNhaMay,
      title: "Nhà máy sản xuất gạch",
    },
    {
      id: 2,
      type: "image",
      src: hinhAnhBomBeTong,
      title: "Quy trình bơm bê tông",
    },
    { id: 3, type: "image", src: vanChuyenVatLieu, title: "Vận chuyển gạch" },

    {
      id: 4,
      type: "video",
      src: toanCanhNhaMay,
      poster: hinhAnhNhaMay,
      title: "Toàn cảnh nhà máy",
    },
    {
      id: 5,
      type: "video",
      src: quyTrinhEpGach,
      poster: hinhAnhNhaMay,
      title: "Quy trình ép gạch",
    },
    {
      id: 6,
      type: "video",
      src: quyTrinhXepGach,
      poster: hinhAnhNhaMay,
      title: "Quy trình xếp gạch",
    },
  ];

  const filteredMedia = mediaList.filter((item) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  const openModal = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const goToPrev = () => {
    const newIndex =
      (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredMedia.length;
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  return (
    <div className={styles.companyMediaGallery}>
      <div className={styles.galleryHeader}>
        <h2>Hình Ảnh & Video Công Ty</h2>
        <p>Những hình ảnh nhà máy và quy trình làm việc</p>
      </div>

      {/* Filter */}
      <div className={styles.mediaFilter}>
        <button
          className={`${styles.filterBtn} ${activeFilter === "all" ? styles.active : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          Tất cả
        </button>
        <button
          className={`${styles.filterBtn} ${activeFilter === "image" ? styles.active : ""}`}
          onClick={() => setActiveFilter("image")}
        >
          Hình Ảnh
        </button>
        <button
          className={`${styles.filterBtn} ${activeFilter === "video" ? styles.active : ""}`}
          onClick={() => setActiveFilter("video")}
        >
          Video
        </button>
      </div>

      {/* Media Grid */}
      {/* <div className={styles.mediaGrid}>
        {filteredMedia.map((media, index) => (
          <div
            key={media.id}
            className={styles.mediaItem}
            onClick={() => openModal(media, index)}
          >
            <div className={styles.mediaContent}>
              {media.type === "image" ? (
                <img
                  src={
                    media.src ||
                    "https://via.placeholder.com/600x400?text=Image"
                  }
                  alt={media.title}
                />
              ) : (
                <div className={styles.videoThumbnail}>
                  <img
                    src={
                      media.src ||
                      "https://via.placeholder.com/600x400?text=Video"
                    }
                    alt={media.title}
                    poster={media.poster}
                  />
                  <div className={styles.playIcon}>▶</div>
                </div>
              )}
            </div>
            <div className={styles.mediaInfo}>
              <h3>{media.title}</h3>
            </div>
          </div>
        ))}
      </div> */}

      {/* Media Grid */}
      <div className={styles.mediaGrid}>
        {filteredMedia.map((media, index) => (
          <div
            key={media.id}
            className={styles.mediaItem}
            onClick={() => openModal(media, index)}
          >
            <div className={styles.mediaContent}>
              {media.type === "image" ? (
                <img
                  src={
                    media.src ||
                    "https://via.placeholder.com/600x400?text=Image"
                  }
                  alt={media.title}
                />
              ) : (
                <div className={styles.videoThumbnail}>
                  {/* Thumbnail dùng poster */}
                  <img
                    src={
                      media.poster ||
                      "https://via.placeholder.com/600x400?text=Video"
                    }
                    alt={media.title}
                  />
                  <div className={styles.playIcon}>▶</div>
                </div>
              )}
            </div>
            <div className={styles.mediaInfo}>
              <h3>{media.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedMedia && (
        <div className={styles.mediaModal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalClose} onClick={closeModal}>
              ✕
            </button>

            <div className={styles.modalMedia}>
              {selectedMedia.type === "image" ? (
                <img
                  src={
                    selectedMedia.src || "https://via.placeholder.com/1200x800"
                  }
                  alt={selectedMedia.title}
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className={styles.modalVideo}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div className={styles.modalInfo}>
              <h3>{selectedMedia.title}</h3>
            </div>

            {/* Navigation */}
            <button
              className={`${styles.navBtn} ${styles.prev}`}
              onClick={goToPrev}
            >
              ‹
            </button>
            <button
              className={`${styles.navBtn} ${styles.next}`}
              onClick={goToNext}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGalleryPage;
