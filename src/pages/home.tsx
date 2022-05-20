import { Images, PortraitItem } from 'components';
import { ImageData } from 'components/images.interface';
import { Modal2 } from 'components/img-modal2/modal2';
import { useFetch } from 'hooks';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [selectedImageId, setSelectedImageId] = useState<string | undefined>();
  const [images, setImages] = useState<ImageData[]>();
  const [data] = useFetch<ImageData[]>('images/portraits/index.json');

  const imageClickedHandler = (id: string) => setSelectedImageId(id);
  const modalCloseHandler = () => setSelectedImageId(undefined);

  useEffect(() => {
    if (data) {
      // just take the latest 8
      setImages(data.slice(0, 8));
    }
  }, [data]);

  return (
    <>
      {images && (
        <Images>
          {images.map((imageData) => (
            <PortraitItem
              key={imageData.id}
              data={imageData}
              onSelected={imageClickedHandler}
            />
          ))}
        </Images>
      )}

      {selectedImageId && images && (
        <Modal2
          images={images}
          selectedImageId={selectedImageId}
          onCloseClicked={modalCloseHandler}
        />
      )}
    </>
  );
};
