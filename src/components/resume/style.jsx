import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  root2: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "20%",
    marginTop: "10px",
  },
  details: {
    display: "flex",
    alignItems: "center",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
    objectFit: "cover",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default useStyles;
