// import { Card } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";

const Image = ({ image }) => {
  return (
    <>
      <img src={image.largeImageURL} alt={image.type} />
    </>
  );
};
export default Image;
