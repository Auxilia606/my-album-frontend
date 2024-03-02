import { usePostUploadPhoto } from "@api";
import { Button } from "@components";
import { DialogStore } from "@store";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { DialogHeader } from "./DialogHeader";
import { UploadForm } from "./types";

export const Upload = () => {
  const { handleSubmit, register, watch } = useForm<UploadForm>();
  const [imageUrl, setImageUrl] = useState("");
  const { mutateAsync } = usePostUploadPhoto();

  const reader = useMemo(() => new FileReader(), []);

  const photos = watch("photos");

  const onValid: SubmitHandler<UploadForm> = useCallback(
    async (data) => {
      await mutateAsync(data.photos[0]);
      DialogStore.close();
    },
    [mutateAsync]
  );

  const onInvalid: SubmitErrorHandler<UploadForm> = useCallback((error) => {
    console.log(error);
  }, []);

  useEffect(() => {
    if (!photos || !photos[0]) return;
    reader.readAsDataURL(photos[0]);
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImageUrl(reader.result);
      }
    };
  }, [photos, reader]);

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <div className="min-w-40 min-h-48 flex flex-col gap-2 bg-black border border-white rounded-lg p-4">
        <DialogHeader title="사진 업로드" />
        {imageUrl ? (
          <>
            <img className="max-w-64 max-h-64" alt="target" src={imageUrl} />
            <label className="text-xs text-white">{photos[0].name}</label>
          </>
        ) : (
          <div className="flex-1" />
        )}
        <div className="flex">
          <label
            className="border bg-black text-white px-2 py-1 rounded-md"
            htmlFor="upload-file-input"
          >
            파일 선택
          </label>
          <input
            className="bg-black text-white opacity-0 w-0"
            id="upload-file-input"
            type="file"
            accept="image/*"
            {...register("photos", { required: true })}
          />
        </div>
        <Button
          className="border rounded-md text-white px-2 py-1"
          type="submit"
        >
          업로드
        </Button>
      </div>
    </form>
  );
};
