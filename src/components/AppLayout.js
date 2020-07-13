import React from "react";
import NavBar from "../components/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  container: {
    marginTop: 100,
  },
  siteImage: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
});

const AppLayoutProvider = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Container
        className={classes.container}
        maxWidth={"lg"}
        style={{ padding: "16px" }}
      >
        <img
          alt="DreamForge website logo"
          className={classes.siteImage}
          src="https://dreamforge.space/backend/logos/dreamforge-logo.png"
        ></img>
        {children}
      </Container>
    </>
  );
};

export default AppLayoutProvider;
