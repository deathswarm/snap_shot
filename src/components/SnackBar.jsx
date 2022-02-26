import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
const SnackBar = (open, toggleSnack) => {
  const handleClose = () => {
    toggleSnack(false);
  };
  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert sevarity="info" onClose={handleClose}>
          Number Of images Should be between 3 to 200
        </MuiAlert>
      </Snackbar>
    </>
  );
};
export default SnackBar;
