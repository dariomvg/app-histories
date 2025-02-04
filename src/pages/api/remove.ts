import cloudinary from "@/utils/config";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Método no disponible" });
  }

  try {
    const { publicId } = req.body;
    await cloudinary.uploader.destroy(publicId);
    res
      .status(200)
      .json({ message: `Imagen ${publicId} se eliminó correctamente` });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar la imagen", error });
  }
}
