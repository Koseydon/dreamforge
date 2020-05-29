import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";
import { HashRouter, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Typography from "@material-ui/core/Typography";

const links = [
  {
    icon: <HomeIcon />,
    text: "Home",
    route: "/",
  },
  {
    icon: <FolderIcon />,
    text: "Blog",
    route: "/blog",
    add: "addblog",
    ttip: "Add Article",
  },
];

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 5,
  },
  brand: {
    marginLeft: 50,
    marginBottom: 10,
  },
  icon: {
    color: "#9e9e9e",
  },
  avatar: {
    width: 96,
    height: 96,
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
  },
}));

const BarDrawer = observer(({ Store }) => {
  const classes = useStyles();
  const list = (
    <div>
      <Avatar
        alt="DreamForge Logo"
        src="https://dreamforge.space/backend/logos/anvil.png"
        className={classes.avatar}
      />
      <Typography className={classes.brand}>dreamFORGE</Typography>
      <Divider />
      <List>
        <HashRouter>
          {links.map((link) => (
            <ListItem
              className={classes.title}
              button
              key={link.text}
              component={Link}
              to={link.route}
            >
              <ListItemIcon className={classes.icon}>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </HashRouter>
      </List>
    </div>
  );

  return (
    <Drawer open={Store.drawerState} onClose={() => Store.toggleDrawer()}>
      {list}
    </Drawer>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(BarDrawer);
