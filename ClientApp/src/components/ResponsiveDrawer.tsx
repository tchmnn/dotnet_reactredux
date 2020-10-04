import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme, { drawerWidth: number }>((theme) => ({
  drawer: ({ drawerWidth }) => ({
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  }),
  drawerPaper:  ({ drawerWidth }) => ({
    width: drawerWidth,
  }),
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

type ResponsiveDrawerProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  drawerWidth: number;
}

const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = ({ open, onClose, drawerWidth, children }) => {
  const classes = useStyles({ drawerWidth });
  const theme = useTheme()

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={open}
          onClose={onClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {children}
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
          {children}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default ResponsiveDrawer;