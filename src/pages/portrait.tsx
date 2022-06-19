import { Images, PortraitItem } from 'components';
import { ImageData } from 'components/images.interface';
import { Modal2 } from 'components/img-modal2/modal2';
import { useFetch } from 'hooks';
import { useState } from 'react';

export const Portrait = () => {
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
        <Modal2
          images={data}
          selectedImageId={selectedImageId}
          onCloseClicked={imageOverlayCloseHandler}
        />
      )}
    </>
  );
};
