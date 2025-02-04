import cloudinary from "@/utils/config";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if(req.method !== "DELETE"){
    return res.status(400).json({message: "Método no disponible"}); 
  }

  try {
    const result = await cloudinary.api.delete_resources_by_prefix(
      "histories" + "/"
    );

    return res.status(200).json({ message: "Imágenes eliminadas", result });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al eliminar todas las imagenes", error });
  }
}
