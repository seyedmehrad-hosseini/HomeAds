import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';


export const mainListItems = (
  <React.Fragment>
      <Link to='/home'> 
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="خانه" />
        </ListItemButton>
      </Link>

      <Link to='/PostingAds'>
        <ListItemButton>
            <ListItemIcon>
                <AddHomeWorkIcon />
            </ListItemIcon>
            <ListItemText primary="ثبت آگهی" />
        </ListItemButton>
      </Link>

  </React.Fragment>
);

