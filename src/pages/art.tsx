import { Outlet, useNavigate } from 'react-router';

import { Images, PortraitItem } from '../components';
import { ImageData } from '../components/images.interface';
import { useFetch } from '../hooks';

export const Art = () => {
  const navigate = useNavigate();
  const [images] = useFetch<ImageData[]>('/images/white-blur/index.json');

  const imageClickedHandler = (id: string) => {
    navigate(`/art/${id}`);
  };

  return images ? (
    <>
      <div>White blur</div>
      <Images>
        {images.map((img) => (
          <PortraitItem
            key={img.id}
            data={img}
            onSelected={imageClickedHandler}
          />
        ))}
      </Images>
      <Outlet context={{ images }} />
    </>
  ) : null;
};
