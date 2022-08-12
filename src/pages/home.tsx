import { Images, PortraitItem } from 'components';
import { ImageData } from 'components/images.interface';
import { useFetch } from 'hooks';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';

export const Home = () => {
  const navigate = useNavigate();
  const [images] = useFetch<ImageData[]>('/images/portrait/index.json');
  const [top8Images, setTop8Images] = useState<ImageData[]>();

  useEffect(() => {
    if (images) {
      // just take the latest 8
      setTop8Images(images.slice(0, 8));
    }
  }, [images]);

  const imageClickedHandler = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <>
      <Images>
        {top8Images?.map((img) => (
          <PortraitItem
            key={img.id}
            data={img}
            onSelected={imageClickedHandler}
          />
        ))}
      </Images>
      <Outlet context={{ images: top8Images }} />
    </>
  );
};
