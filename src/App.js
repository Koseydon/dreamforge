import React, { useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import { inject, observer } from "mobx-react";

import NavBar from "./components/NavBar";
import Home from "./View/Home";
import Blog from "./View/Blog";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    text: {
      primary: "#9e9e9e",
    },
  },
});

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

const App = observer(({ Store }) => {
  const classes = useStyles();

  useEffect(() => {
    Store.fetchBlogPosts();
  }, [Store]);

  return (
    <HashRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar />
          <Container className={classes.container} maxWidth={"xl"}>
            <img
              alt="DreamForge website logo"
              className={classes.siteImage}
              src="https://dreamforge.space/backend/logos/dreamforge-logo.png"
            ></img>
            <Route exact path="/" component={Home} />
            <Route path="/Blog" component={Blog} />
          </Container>
        </ThemeProvider>
      </div>
    </HashRouter>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(App);
