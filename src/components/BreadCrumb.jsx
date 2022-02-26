import { Box, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  comnponent: {
    background: "#292929",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      color: "#fff",
    },
  },
}));

const BreadCrumb = ({ onTextChange, onCountChange }) => {
  const classes = useStyles();
  return (
    <>
      <div className="content-wrapper">
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Search....."
            name="name"
            id="name"
            onChange={(e) => onTextChange(e.target.value)}
          />
          <label for="name" class="form__label">
            Search...
          </label>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
