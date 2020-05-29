import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BarDrawer from "./BarDrawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    color: "#9e9e9e",
  },
  icon: {
    color: "#9e9e9e",
  },
}));

const NavBar = observer(({ Store }) => {
  const classes = useStyles();

  return (
    <AppBar color="inherit" position="absolute">
      <Toolbar>
        <IconButton
          className={classes.icon}
          edge="start"
          aria-label="menu"
          onClick={() => Store.toggleDrawer()}
        >
          <MenuIcon />
        </IconButton>
        <BarDrawer />
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(NavBar);
