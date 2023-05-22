"use client";
import React, { useEffect, useState } from "react";

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllImages = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/cloudinary", {
        method: "GET",
      });
      setLoading(true);
      if (response.ok) {
        const data = await response.json();
        const imagesData = data.resources;
        setImages(imagesData);
        setLoading(false);
      } else {
        console.error("Error fetching images:", response.status);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchAllImages();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        images.map((x) => (
          <div key={x.public_id}>
            <img src={x.secure_url} height={100} alt={x.public_id} />
          </div>
        ))
      )}
    </div>
  );
}

export default ImageGallery;
