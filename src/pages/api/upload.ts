import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "@/utils/config";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Método no disponible" });

  try {
    const { image } = req.body;

    const imageUpload = await cloudinary.uploader.upload(image, {
      folder: "histories",
    });

    res.status(200).json({
      publicId: imageUpload.public_id,
      url: imageUpload.secure_url,
    });
  } catch (error) {
    res.status(413).json({ message: "Error al subir la imagen", error });
  }
}
