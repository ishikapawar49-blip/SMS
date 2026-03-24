import React from "react";
import "./GalleryGrid.css";

import img1 from "../../assets/gallery-1.jpg";
import img2 from "../../assets/gallery-2.jpg";
import img3 from "../../assets/gallery-3.jpg";
import img4 from "../../assets/gallery-4.jpg";
import img5 from "../../assets/gallery-5.jpg";
import img6 from "../../assets/gallery-6.jpg";
import img7 from "../../assets/gallery-7.jpg";
import img8 from "../../assets/gallery-8.jpg";
import img9 from "../../assets/gallery-9.jpg";

const data = [
  { img: img1, tag: "Event", title: "Diwali Celebration 2023" },
  { img: img2, tag: "Facility", title: "Community Hall" },
  { img: img3, tag: "Facility", title: "Swimming Pool" },
  { img: img4, tag: "Event", title: "Republic Day" },
  { img: img5, tag: "Facility", title: "Garden Area" },
  { img: img6, tag: "Event", title: "Holi Festival" },
  { img: img7, tag: "Facility", title: "Children's Play Area" },
  { img: img8, tag: "Facility", title: "Society Entrance" },
  { img: img9, tag: "Event", title: "Annual Sports Day" },
];

const GalleryGrid = () => {
  return (
    <section className="galleryGrid-section">
      <div className="galleryGrid-container">

        <div className="galleryGrid-grid">
          {data.map((item, index) => (
            <div className="galleryGrid-card" key={index}>
              
              {/* IMAGE */}
              <div className="galleryGrid-imgWrap">
                <img src={item.img} alt={item.title} />
              </div>

              {/* CONTENT */}
              <div className="galleryGrid-content">
                <span className={`galleryGrid-tag ${item.tag.toLowerCase()}`}>
                  {item.tag}
                </span>
                <h3>{item.title}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryGrid;