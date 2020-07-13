import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  app: {
    backgroundImage: `url(https://dreamforge.space/backend/background/forge-background.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 70%",
  },
});

const BackgroundProvider = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.app}>{children}</div>;
};

export default BackgroundProvider;
