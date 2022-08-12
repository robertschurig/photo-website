import { Images, PortraitItem } from 'components';
import { ImageData } from 'components/images.interface';
import { useFetch } from 'hooks';
import { Outlet, useNavigate } from 'react-router';

export const Art = () => {
  const navigate = useNavigate();
  const [images] = useFetch<ImageData[]>('/images/white-blur/index.json');

  const imageClickedHandler = (id: string) => {
    navigate(`/art/${id}`);
  };

  return (
    <>
      <div>White blur</div>
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
