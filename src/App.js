import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Routes from "./components/Routes";
import AppLayout from "./components/AppLayout";
import BaseThemeContext from "./context/BaseThemeContext";
import BackgroundProvider from "./context/BackgroundContext";

const App = observer(({ Store }) => {
  useEffect(() => {
    Store.fetchBlogPosts();
  }, [Store]);

  return (
    <BackgroundProvider>
      <HashRouter>
        <BaseThemeContext>
          <AppLayout>
            <Routes />
          </AppLayout>
        </BaseThemeContext>
      </HashRouter>
    </BackgroundProvider>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(App);
