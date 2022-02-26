import Gallery from "react-grid-gallery";

const Images = ({ data }) => {
  const IMAGES = data.map((imgDet) => {
    return {
      src: imgDet.largeImageURL,
      thumbnail: imgDet.webformatURL,
      thumbnailWidth: imgDet.webformatWidth,
      thumbnailHeight: imgDet.webformatHeight,
      caption: imgDet.tags,
      id: imgDet.id,
      enableImageSelection: true,
    };
  });
  return <Gallery images={IMAGES} enableLightbox={true} backdropClosesModal />;
};
export default Images;
