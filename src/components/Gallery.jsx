import React from "react";

const Gallery = () => {
  const gallery = [
    "/img1.png",
    "/img2.avif",
    "/img3.webp",
    "/img4.webp",
    "/img7.webp",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.avif",
    "/img9.webp",
    "/img6.avif",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
