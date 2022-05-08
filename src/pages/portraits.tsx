import { Images, PortraitItem, ImageModal } from 'components';
import { ImageData } from 'components/images.interface';
import { useFetch } from 'hooks';
import { useState } from 'react';

export const Portraits = () => {
  const [data] = useFetch<ImageData[]>('images/portraits/index.json');
  const [selectedImageId, setSelectedImageId] = useState<string | null>();

  const imageClickedHandler = (id: string) => setSelectedImageId(id);
  const imageOverlayCloseHandler = () => setSelectedImageId(null);

  return (
    <>
      {data && (
        <Images>
          {data.map((imageData) => (
            <PortraitItem
              key={imageData.id}
              data={imageData}
              onSelected={imageClickedHandler}
            />
          ))}
        </Images>
      )}

      {selectedImageId && data && (
        <ImageModal
          selectedImageId={selectedImageId}
          imageList={data}
          onCloseClicked={imageOverlayCloseHandler}
        />
      )}
    </>
  );
};
