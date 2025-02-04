import { UploadImage } from "@/types/types";

export const removeAll = async () => {
  await fetch("/api/removeAll", { method: "DELETE" });
};

export const removeImage = async (idImage: string) => {
  await fetch("/api/remove", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ publicId: idImage }),
  });
};

export const uploadImage = async (reader: FileReader): Promise<UploadImage> => {
  const response = await fetch("/api/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: reader.result }),
  });
  const result = await response.json();
  return result;
};
