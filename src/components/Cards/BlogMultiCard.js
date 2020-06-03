import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { inject, observer } from "mobx-react";
import Avatar from "@material-ui/core/Avatar";
import { HashRouter, Link } from "react-router-dom";

const BlogMultiCard = observer(({ Store }) => {
  const renderCard = Store.blogPosts.map((m) => (
    <HashRouter key={m._id}>
      <Grid
        item
        xs={12}
        component={Link}
        to={`/blog/${m._id}`}
        style={{
          textDecoration: "none",
          cursor: "pointer",
          padding: "16px",
        }}
      >
        <Card
          style={{
            backgroundColor: "rgb(0, 0, 0, 0.5)",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={6} lg={4}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "242px",
                  display: "block",
                }}
                alt={m.title}
                src={`https://dreamforge.space${m.image}`}
              ></img>
            </Grid>
            <Grid
              container
              xs={12}
              sm={6}
              lg={8}
              direction="column"
              justify="space-between"
              style={{
                padding: "16px",
              }}
            >
              <Grid container direction="column">
                <Grid item>
                  <Typography>{m.blogCategory}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4">{m.blogTitle}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">{m.blogSubTitle}</Typography>
                </Grid>
              </Grid>
              <Grid container justify="space-between">
                <Grid container direction="column" justify="center" xs={1}>
                  <Avatar
                    alt="Dreamforge Avatar"
                    src={`https://dreamforge.space${m.avatar}`}
                  />
                </Grid>
                <Grid container direction="column" justify="center" xs={10}>
                  <Typography align="right">{m.newDate}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </HashRouter>
  ));

  return <>{renderCard}</>;
});

export default inject((stores) => ({
  Store: stores.Store,
}))(BlogMultiCard);
