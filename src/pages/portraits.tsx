import { ImgGrid, PortraitItem, ImageModal } from 'components';
import { ImageData } from 'components/img-grid/images.interface';
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
        <ImgGrid>
          {data.map((imageData) => (
            <PortraitItem
              key={imageData.id}
              data={imageData}
              onSelected={imageClickedHandler}
            />
          ))}
        </ImgGrid>
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
