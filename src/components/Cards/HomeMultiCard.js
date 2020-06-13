import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { inject, observer } from "mobx-react";
import Avatar from "@material-ui/core/Avatar";
import { HashRouter, Link } from "react-router-dom";

const HomeMultiCard = observer(({ Store }) => {
  const renderCard = Store.homePosts.map((m) => (
    <HashRouter key={m._id}>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        component={Link}
        to={`/blog/${m._id}`}
        style={{ textDecoration: "none", cursor: "pointer", padding: "16px" }}
      >
        <Card
          style={{
            height: "100%", //'Leveling cards same but space-between not working
            backgroundColor: "rgb(0, 0, 0, 0.5)",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <img
                style={{
                  height: "200px",
                  width: "100%",
                  display: "block",
                }}
                alt={m.title}
                src={`https://dreamforge.space${m.image}`}
              ></img>
            </Grid>
            <Grid
              container
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
                  <Typography>{m.blogTitle}</Typography>
                </Grid>
                <Grid item>
                  <Typography>{m.blogSubTitle}</Typography>
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
}))(HomeMultiCard);
