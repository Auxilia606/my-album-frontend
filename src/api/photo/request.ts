import { UserStore } from "@store";
import { defaultApi } from "../invoke";

export const uploadPhoto = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const { data } = await defaultApi.post("/photo/upload", formData, {
    headers: {
      Authorization: UserStore.token,
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
