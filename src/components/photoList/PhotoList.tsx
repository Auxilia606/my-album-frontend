import { useGetUserPhotos } from "@api";
import { DialogStore } from "@store";
import { PhotoDTO } from "@types";
import { observer } from "mobx-react";

const Photo: React.FC<PhotoDTO> = observer((props) => {
  const { thumbnail, url } = props;

  const handleClick = () => {
    DialogStore.openImage(url);
  };

  return (
    <img
      className="flex-none object-cover w-[32%] aspect-square"
      src={thumbnail}
      alt="list-item"
      onClick={handleClick}
    />
  );
});

export const PhotoList = observer(() => {
  const { data } = useGetUserPhotos();
  if (!data) return null;

  const { photos } = data;

  return (
    <div className="flex flex-row flex-1 flex-wrap items-start content-start gap-1 justify-center py-1">
      {photos.map((photo) => (
        <Photo key={photo._id} {...photo} />
      ))}
      <div className="flex-none w-[32%] aspect-square" />
      <div className="flex-none w-[32%] aspect-square" />
    </div>
  );
});
