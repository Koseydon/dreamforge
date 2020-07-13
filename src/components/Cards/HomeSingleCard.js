import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { HashRouter, Link } from "react-router-dom";

const HomeSingleCard = (props) => {
  const renderCard = props.post.map((m) => (
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
            <Grid item xs={12} sm={8}>
              <img
                style={{
                  height: "400px",
                  width: "100%",
                  display: "block",
                }}
                alt={m.title}
                src={`https://dreamforge.space${m.image}`}
              ></img>
            </Grid>
            <Grid
              container
              item
              direction="column"
              justify="space-between"
              xs={12}
              sm={4}
              style={{
                padding: "16px",
              }}
            >
              <Grid container direction="column">
                <Grid item>
                  <Typography align="left">{m.blogCategory}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">{m.blogTitle}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">{m.blogSubTitle}</Typography>
                </Grid>
              </Grid>
              <Grid container justify="space-between">
                <Grid container item direction="column" justify="center" xs={1}>
                  <Avatar
                    alt="Dreamforge Avatar"
                    src={`https://dreamforge.space${m.avatar}`}
                  />
                </Grid>
                <Grid
                  container
                  item
                  direction="column"
                  justify="center"
                  xs={10}
                >
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
};

export default HomeSingleCard;
