import { Images, PortraitItem } from 'components';
import { ImageData } from 'components/images.interface';
import { Modal2 } from 'components/img-modal2/modal2';
import { useFetch } from 'hooks';
import { useState } from 'react';

export const Art = () => {
  const [data] = useFetch<ImageData[]>('images/art/white blur/index.json');
  const [selectedImageId, setSelectedImageId] = useState<string | null>();

  const imageClickedHandler = (id: string) => setSelectedImageId(id);
  const imageOverlayCloseHandler = () => setSelectedImageId(null);

  return (
    <>
      <div>White Ghost</div>
      <Images>
        {data?.map((imageData) => (
          <PortraitItem
            key={imageData.id}
            data={imageData}
            onSelected={imageClickedHandler}
          />
        ))}
      </Images>

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
