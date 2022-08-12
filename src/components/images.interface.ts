interface ImgSources {
  [index: string]: { src: string; thumb: string };
}

export interface ImageData {
  id: string;
  sources: ImgSources;
}
