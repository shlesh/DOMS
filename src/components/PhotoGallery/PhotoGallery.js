import React, { useState } from "react";
import * as styles from "./PhotoGallery.module.css";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    // Add your image paths here
    "/image_gallery/1-min.webp",
    "/image_gallery/2-min.webp",
    "/image_gallery/3-min.webp",
    "/image_gallery/4-min.webp",
    "/image_gallery/5-min.webp",
    "/image_gallery/6-min.webp",
    "/image_gallery/7-min.webp",
    "/image_gallery/8-min.webp",
    "/image_gallery/9-min.webp",
    "/image_gallery/10-min.webp",
    "/image_gallery/11-min.webp",
    "/image_gallery/12-min.webp",
    "/image_gallery/13-min.webp",
    "/image_gallery/14-min.webp",
    "/image_gallery/15-min.webp",
    "/image_gallery/16-min.webp",
    "/image_gallery/17-min.webp",
    "/image_gallery/18-min.webp",

  ];

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.photoGallery}>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleClick(image)}
            className={styles.thumbnail}
          />
        ))}
      </div>
      {selectedImage && (
        <div className={styles.lightbox} onClick={handleClose} >
          <img src={selectedImage} alt="Selected" className={styles.lightboxImage} />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
