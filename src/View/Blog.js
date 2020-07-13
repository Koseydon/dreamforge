import React from "react";
import Grid from "@material-ui/core/Grid";
import { inject, observer } from "mobx-react";
import BlogMultiCard from "../components/Cards/BlogMultiCard";

const Blog = observer(({ Store }) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid container>
        <BlogMultiCard posts={Store.blogPosts} />
      </Grid>
    </Grid>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(Blog);
