import { ImageGallery } from 'components';
import { ImageModal } from 'components/image-gallery/modal/image-modal';
import { PortraitItem } from 'components/image-gallery/portrait-item';
import { useFetch } from 'hooks';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [selectedImageId, setSelectedImageId] = useState<string | undefined>();
  const [items, setItems] = useState<any[]>();
  const [data] = useFetch<any[]>('images/portraits/index.json');

  const imageClickedHandler = (id: string) => setSelectedImageId(id);
  const imageOverlayCloseHandler = () => setSelectedImageId(undefined);

  useEffect(() => {
    if (data) {
      const items = data.slice(0, 8);
      setItems(items);
    }
  }, [data]);

  return (
    <>
      {items && (
        <ImageGallery>
          {items.map((imageData) => (
            <PortraitItem
              key={imageData.id}
              data={imageData}
              onSelected={imageClickedHandler}
            />
          ))}
        </ImageGallery>
      )}

      {selectedImageId && items && (
        <ImageModal
          selectedImageId={selectedImageId}
          imageList={items}
          onCloseClicked={imageOverlayCloseHandler}
        />
      )}
    </>
  );
};
