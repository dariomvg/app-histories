"use client";
import { removeAll, removeImage, uploadImage } from "@/libs/requests";
import { UseHistory, User } from "@/types/types";
import { objUser } from "@/utils/object_user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const saveLocalStorage = (updateUser: User): void => {
  localStorage.setItem("user-history", JSON.stringify(updateUser));
};

const handleUpdateUser = (
  prevUser: User,
  publicId: string,
  url: string
): User => {
  return {
    ...prevUser,
    histories: [...prevUser.histories, { id: publicId, url }],
  };
};

const handleRemoveHistory = (prevUser: User, id: string): User => {
  return {
    ...prevUser,
    histories: prevUser.histories.filter((history) => history.id !== id),
  };
};

export const useHistory = (): UseHistory => {
  const [user, setUser] = useState<User>(objUser);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const addNewHistory = (image: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      setLoading(true);
      const { publicId, url } = await uploadImage(reader);
      setUser((prevUser) => {
        const updateUser = handleUpdateUser(prevUser, publicId, url);
        saveLocalStorage(updateUser);
        return updateUser;
      });
      setLoading(false);
      router.push("/");
    };
  };

  const removeHistory = async (id: string) => {
    await removeImage(id);
    setUser((prevUser) => {
      const updateUser = handleRemoveHistory(prevUser, id);
      localStorage.setItem("user-history", JSON.stringify(updateUser));
      return updateUser;
    });
    router.push("/");
  };

  const register = (newName: string) => {
    setUser((prevUser) => {
      const updateUser = { ...prevUser, username: newName };
      saveLocalStorage(updateUser);
      return updateUser;
    });
    router.push("/");
  };

  const logout = async () => {
    setUser(objUser);
    localStorage.removeItem("user-history");
    await removeAll();
  };

  useEffect(() => {
    const localUser = localStorage.getItem("user-history");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  return { addNewHistory, removeHistory, register, logout, user, loading };
};
