import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadPhoto } from "./request";

export const usePostUploadPhoto = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => uploadPhoto(file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth", "photos"] });
    },
  });
};
