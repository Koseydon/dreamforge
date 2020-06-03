import React from "react";
import Grid from "@material-ui/core/Grid";
import { inject, observer } from "mobx-react";
import HomeSingleCard from "../components/Cards/HomeSingleCard";
import HomeMultiCard from "../components/Cards/HomeMultiCard";

const Home = observer(({ Store }) => {
  return (
    <Grid direction="column" alignItems="center" container>
      <Grid container>
        <HomeSingleCard />
      </Grid>
      <Grid container justify="space-around">
        <HomeMultiCard />
      </Grid>
    </Grid>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(Home);
