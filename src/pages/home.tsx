import { ImgGrid, PortraitItem, ImageModal } from 'components';
import { ImageData } from 'components/img-grid/images.interface';
import { useFetch } from 'hooks';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [selectedImageId, setSelectedImageId] = useState<string | undefined>();
  const [items, setItems] = useState<ImageData[]>();
  const [data] = useFetch<ImageData[]>('images/portraits/index.json');

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
        <ImgGrid>
          {items.map((imageData) => (
            <PortraitItem
              key={imageData.id}
              data={imageData}
              onSelected={imageClickedHandler}
            />
          ))}
        </ImgGrid>
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
