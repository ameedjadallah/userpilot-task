import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useLocation } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../static/images/logo.png";
import user from "../static/images/user.png";
import Icon from "@material-ui/core/Icon";

import data from "../data/data.json";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {},
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: "#F7F8FC",
    boxShadow: "none",
    color: "#000",
    paddingTop: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#363740",
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  navbarIcon: {
    color: "#fff",
    fontSize: 17,
    marginRight: 10,
    opacity: 0.4,
  },
  listItemText: {
    color: "rgba(164, 166, 179, 1)",
    fontSize: 16,
    textTransform: "capitalize",
  },
  userProfile: {
    width: 40,
    height: 40,
    marginLeft: 10,
    position: "relative",
    "&:after": {
      content: "''",
      width: 43,
      height: 43,
      border: "1.5px solid #DFE0EB",
      position: "absolute",
      borderRadius: "50%",
      left: -3,
      top: -3,
    },
  },
  userImage: {
    width: "100%",
    borderRadius: "100px",
  },
  username: {
    fontWeight: 600,
  },
  lisItemLink: {
    "&:hover": {
      background: "rgba(159, 162, 180, 0.08)",
    },
    "&.active": {
      background: "rgba(159, 162, 180, 0.08)",
      position: "relative",
      "&::after": {
        content: "''",
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 3,
        background: "#DDE2FF",
      },
    },
  },
}));

function Navbar({ title }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const container =
    typeof window !== "undefined" ? window.document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  const drawer = (
    <div>
      <div className={classes.logo}>
        <img src={logo} alt="userpilot logo" />
      </div>
      <List>
        {data.navbar.map((item, index) => (
          <ListItemLink
            key={index}
            href={item.path}
            className={classnames(classes.lisItemLink, {
              active: location.pathname === item.path,
            })}
          >
            <Icon color="primary" className={classes.navbarIcon}>
              {item.icon}
            </Icon>
            <ListItemText
              primary={item.title}
              className={classes.listItemText}
            />
          </ListItemLink>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className="flex justify-between">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
          <div className="flex items-center">
            <h5 className={classes.username}>Jones Ferdinand</h5>
            <div className={classes.userProfile}>
              <img
                src={user}
                className={classes.userImage}
                alt="Jones Ferdinand"
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {
  title: "",
};

Navbar.prototype = {
  title: PropTypes.string,
};

export default Navbar;
