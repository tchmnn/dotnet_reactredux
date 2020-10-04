import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import NetworkCellIcon from '@material-ui/icons/NetworkCell';
import Counter from './Counter';
import FetchData from './FetchData';
import Home from './Home';

const routes = [
  {
    path: "/",
    element: <Home />,
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/couter",
    element: <Counter />,
    label: "Counter",
    icon: <PlusOneIcon />,
  },
  {
    path: "/fetch-data",
    element: <FetchData />,
    label: "Fetch Data",
    icon: <NetworkCellIcon />,
  }
];

export default routes;
