import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { inject, observer } from "mobx-react";
import Avatar from "@material-ui/core/Avatar";
import ReactHtmlParser from "react-html-parser";

const PostSingleCard = observer(({ Store }) => {
  const renderPost = () => {
    const post = [];
    Store.blogPosts.forEach((m) => {
      if (m._id === window.location.hash.slice(7)) {
        post.push(
          <Grid xs={12} style={{ padding: "16px" }}>
            <Card
              style={{
                backgroundColor: "rgb(0, 0, 0, 0.5)",
              }}
            >
              <Grid direction="column" alignItems="center" container>
                <Grid item xs={11} sm={8}>
                  <Typography gutterBottom variant="h3">
                    {m.blogTitle}
                  </Typography>
                </Grid>
                <Grid item xs={11} sm={8}>
                  <Typography gutterBottom variant="h5">
                    {m.blogSubTitle}
                  </Typography>
                </Grid>
                <Grid container xs={11} sm={7}>
                  <Grid
                    container
                    alignItems="center"
                    sm={6}
                    justify="center"
                    direction="row"
                  >
                    <Avatar
                      alt="Dreamforge Avatar"
                      src={`https://dreamforge.space${m.avatar}`}
                    />
                    <Typography variant="subtitle1">{m.author}</Typography>
                  </Grid>
                  <Grid container direction="column" justify="center" sm={6}>
                    <Typography align="center">{m.newDate}</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <img
                    style={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "16px",
                    }}
                    alt={m.title}
                    src={`https://dreamforge.space${m.image}`}
                  ></img>
                </Grid>
                <Grid container xs={8}>
                  <Grid container direction="column" justify="center">
                    <Typography align="left">{m.blogCategory}</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={11} md={8}>
                  <Typography variant="h6">
                    {ReactHtmlParser(m.blogText)}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        );
      }
    });
    return post;
  };
  return <>{renderPost()}</>;
});

export default inject((stores) => ({
  Store: stores.Store,
}))(PostSingleCard);
