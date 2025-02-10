interface ImgSources {
  jpg: string;
  avif: string;
}

export interface ImageData {
  id: string;
  source: ImgSources;
  thumbnail: ImgSources;
}
