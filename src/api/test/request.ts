import { defaultApi } from "../invoke";

export const getTest = async () => {
  const { data } = await defaultApi.get("/test");

  return data;
};
