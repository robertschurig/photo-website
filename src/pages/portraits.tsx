import { ImageGallery } from 'components';
import { ImageData } from 'components/image-gallery/image-gallery.interface';
import { ImageModal } from 'components/image-gallery/modal/image-modal';
import { PortraitItem } from 'components/image-gallery/portrait-item';
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
        <ImageGallery>
          {data.map((imageData) => (
            <PortraitItem
              key={imageData.id}
              data={imageData}
              onSelected={imageClickedHandler}
            />
          ))}
        </ImageGallery>
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
