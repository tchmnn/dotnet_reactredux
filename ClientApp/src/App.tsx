import React, { useState } from 'react';
import { AppBar, Container, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ResponsiveDrawer from 'components/ResponsiveDrawer';
import { useRoutes, useNavigate } from 'react-router-dom';
import routes from 'routes';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  noPadding: {
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    }
  },
  container: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const element = useRoutes(routes);
  const navigate = useNavigate()
  const toggleMobileOpen = () => setMobileOpen(prev => !prev);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="primary" position="fixed">
        <Toolbar className={classes.noPadding}>
          <IconButton className={classes.menuButton} color="inherit" onClick={toggleMobileOpen}>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            dotnet_react
          </Typography>
        </Toolbar>
      </AppBar>
      <ResponsiveDrawer open={mobileOpen} onClose={toggleMobileOpen} drawerWidth={drawerWidth}>
        <List>
          {routes.map(route => (
            <ListItem button key={route.path} onClick={() => navigate(route.path)}>
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.label} />
            </ListItem>
          ))}
        </List>
      </ResponsiveDrawer>
      <Container>
        <div className={classes.toolbar} />
        {element || ''}
      </Container>
    </div>
  );
}

export default App;
