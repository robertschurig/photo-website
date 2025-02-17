import { Outlet, useNavigate } from 'react-router';

import { Images, PortraitItem } from '../components';
import { ImageData } from '../components/images.interface';
import { useFetch } from '../hooks';

export const Portrait = () => {
  const navigate = useNavigate();
  const [images] = useFetch<ImageData[]>('/images/portraits/index.json');

  const imageClickedHandler = (id: string) => {
    navigate(`/portraits/${id}`);
  };

  return (
    <>
      <Images>
        {images?.map((img) => (
          <PortraitItem
            key={img.id}
            data={img}
            onSelected={imageClickedHandler}
          />
        ))}
      </Images>
      <Outlet context={{ images }} />
    </>
  );
};
