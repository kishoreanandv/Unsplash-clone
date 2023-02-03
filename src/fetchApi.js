import axios from "axios";
import { useState, useEffect } from "react";

const clientId = process.env.REACT_APP_CLIENT_ID;

const LoadImages = () => {
  const [initialImages, setinitialImages] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos?client_id=${clientId}&per_page=100`)
      .then((data) => setinitialImages(data.data));
  }, []);

  return initialImages;
};

export { LoadImages };
