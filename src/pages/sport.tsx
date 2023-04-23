// import { useFetch } from "hooks";
// import { useState } from "react";

// import { ImageGallery } from "components";
// import { FluidItem } from "components/img-grid/fluid-item";
// import { ImageModal } from "components/img-grid/modal/image-modal";

export const Sports = () => {
  // const [imageList] = useFetch("images/istaf-2016/index.json");
  // const [selectedImageId, setSelectedImageId] = useState<String | null>();

  // const imageClickedHandler = (id: string) => setSelectedImageId(id);
  // const imageOverlayCloseHandler = () => setSelectedImageId(null);

  return (
    <div>hello</div>
    // <>
    //   {imageList && (
    //     <ImageGallery>
    //       {imageList.map((imageData) => (
    //         <FluidItem
    //           key={imageData.id}
    //           data={imageData}
    //           onSelected={imageClickedHandler}
    //         />
    //       ))}
    //     </ImageGallery>
    //   )}

    //   {selectedImageId && (
    //     <ImageModal
    //       selectedImageId={selectedImageId}
    //       imageList={imageList}
    //       onCloseClicked={imageOverlayCloseHandler}
    //     />
    //   )}
    // </>
  );

  // return (
  //   <div className="columns is-multiline">
  //     {imageList.map((imageData) => {
  //       return (
  //         <div
  //           key={imageData.id}
  //           className="column is-half-desktop is-one-tablet"
  //         >
  //           <div
  //             className="box c-image-grid__item2"
  //             onClick={() => onClicked(imageData.id)}
  //           >
  //             <figure className="image is-3by2">
  //               <img src={imageData.source} alt="" />
  //               <div className="overlay">
  //                 <span className="text">hello</span>
  //               </div>
  //             </figure>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};
