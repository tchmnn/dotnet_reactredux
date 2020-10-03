import React, { useState } from 'react';
import { AppBar, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ResponsiveDrawer from 'components/ResponsiveDrawer';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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

  const toggleMobileOpen = () => setMobileOpen(prev => !prev);

  return (
    <div>
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
      <div className={classes.toolbar} />
      <ResponsiveDrawer open={mobileOpen} onClose={toggleMobileOpen} drawerWidth={drawerWidth}>
        <List>
          {['Home', 'Counter', 'Fetch Data'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{/* TODO: add icons */}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </ResponsiveDrawer>
    </div>
  );
}

export default App;
