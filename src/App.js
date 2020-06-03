import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { inject, observer } from "mobx-react";
import NavBar from "./components/NavBar";
import Home from "./View/Home";
import Blog from "./View/Blog";
import Post from "./View/Post";
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
  app: {
    backgroundImage: `url(https://dreamforge.space/backend/background/forge-background.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 70%",
  },
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
    <div className={classes.app}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <NavBar className={classes.navbar} />
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route path="/blog/:id" component={Post} />
            </Switch>
          </Container>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(App);
