import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Notes" />
      </ListItem>
      <ListItem button>
      <ListItemIcon>
        <AddToPhotosIcon />
      </ListItemIcon>
      <ListItemText primary="Add Course" />
    </ListItem>
  </div>
);
