import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const links = [
  {
    title: 'Домашняя страница',
    href: '/home',
    icon: <HomeIcon />,
  },
  {
    title: 'Таблица пациентов',
    href: '/table',
    icon: <LocalHospitalIcon />,
  },
  {
    title: 'Данные пациентов',
    href: '/content',
    icon: <AccessibilityIcon />,
  },
];
const sublinks = [
  {
    title: 'Профиль',
    href: '/profile',
    icon: <StarBorder />,
  },
];

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
      className={classes.root}
    >
      {links.map((link, index) => (
        <ListItem key={index} button>
          <ListItemIcon>{link.icon}</ListItemIcon>
          <NavLink
            to={link.href}
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            {link.title}{' '}
          </NavLink>
        </ListItem>
      ))}
      {/* <NavLink
        to="/faq"
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        FAQs
      </NavLink> */}

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemText primary="Дополнительно" />
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {sublinks.map((sublink, index) => (
            <ListItem key={index} button className={classes.nested}>
              <ListItemIcon>{sublink.icon}</ListItemIcon>
              <Link to={sublink.href}>{sublink.title}</Link>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
