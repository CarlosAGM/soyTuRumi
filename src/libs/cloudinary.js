import { v2 as cloudinary } from "cloudinary";
import { API_KEY, API_SECRET, CLOUD_NAME } from "../config.js";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

export const subirImagen = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "imagenes",
  });
};

export const eleminarImagen = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
