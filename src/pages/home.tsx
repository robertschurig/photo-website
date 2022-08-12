import { Images, PortraitItem } from 'components';
import { ImageData } from 'components/images.interface';
import { useFetch } from 'hooks';
import { Outlet, useNavigate } from 'react-router';

export const Home = () => {
  const navigate = useNavigate();
  const [images] = useFetch<ImageData[]>('/images/portraits/index.json');

  const imageClickedHandler = (id: string) => {
    navigate(`/${id}`);
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
