import React from "react";
import "./content.css";
import rasm13 from "./img2/rasm13.svg";
import rasm15 from "./img2/rasm15.svg";
import rasm17 from "./img2/rasm17.svg";
import rasm22 from "./img2/rasm22.svg";
import rasm23 from "./img2/rasm23.svg";
import rasm24 from "./img2/rasm24.svg";
import img1 from "./img2/img1.svg";
import img2 from "./img2/img2.svg";

const contentImages = [rasm13, rasm15, rasm17, rasm22, rasm23, rasm24, img1, img2];

const Content = () => {
  return (
    <div className="content">
      {contentImages.map((img, index) => (
        <div className="card" key={index}>
          <img src={img} alt={`rasm-${index}`} className="card-image" />
          <div className="card-text">
            <h3>Lorem Ipsum is simply dummy text of the printing</h3>
            <p>LOREM IPSUM · 156 Görüntüleme · 4 Dakika önce</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
