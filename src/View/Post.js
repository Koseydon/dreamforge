import React from "react";
import Grid from "@material-ui/core/Grid";
import { inject, observer } from "mobx-react";
import PostSingleCard from "../components/Cards/PostSingleCard";

const Blog = observer(({ Store }) => {
  return (
    <Grid direction="column" alignItems="center" container>
      <Grid container>
        <PostSingleCard post={Store.blogPosts} />
      </Grid>
    </Grid>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(Blog);
