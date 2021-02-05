import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Profile from '../../components/Profile/Profile';
import ProfileMenu from '../../components/Menu/ProfileMenu';
import TableContainer from '../../components/Table/Table';
import Content from '../../components/Content/Content';
import Signin from '../../components/Auth/Signin';
import Home from '../../components/Home/Home';
import Clock from '../../components/Test/Clock';
import RegClient from '../../components/Forms/RegClient';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Signup from '../../components/Auth/Signup';
import { BrowserRouter, Redirect, Route, withRouter } from 'react-router-dom';
import NestedLists from './NestedLists';
import ExampleMain from '../Test/ExampleMain';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveMenu(props) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const drawer = (
    <div className={classes.toolbar}>
      <NestedLists />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="md:flex justify-end">
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="secondary"
      >
        <Toolbar className="md:flex justify-end">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {props.initialized ? (
            <ProfileMenu logout={props.logout} />
          ) : (
            <div>
              <Link
                to="/signin"
                className="btn btn-sm text-deeppink float-right btn-light"
              >
                Вход
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Route exact path="/">
          <Home />
          {/* {!props.initialized ? (
            <Signin />
          ) : (
              <TableContainer />
            )} */}
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route path="/content">
          <Content />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/table">
          <TableContainer />
        </Route>

        <Route exact path="/regclient">
          <RegClient />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/test">
          <ExampleMain />
        </Route>
      </main>
    </div>
  );
}

ResponsiveMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveMenu;
