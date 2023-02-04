import React from "react";
import "./image.css";

const Image = ({ photos }:any) => {
  return (
    <div className="gallery">
      {photos.map((photo:any) => (
        <img
          className="singleImage"
          key={photo.id}
          src={photo.urls.regular}
          alt={photo.alt_description}
        />
      ))}
    </div>
  );
};

export default Image;
