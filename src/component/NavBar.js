import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
        width: 250,
    },
      fullList: {
        width: 'auto',
    },
  }));

export function NavBar(){
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    const list = anchor => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Carlos Andrés Ramírez"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Ingeniería de sistemas
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>

        </div>
    )

    return(
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer('left', true)}/>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Button style={{fontSize: '20px'}} color="inherit" href="/mainpage">Taks</Button>
              <Button style={{fontSize: '20px'}} color="inherit" href="/users">Users</Button>
              <Button style={{fontSize: '20px'}} color="inherit" href="/userprofile">Update Profile</Button>
            </Typography>
            
            <Button color="inherit" href="/">Exit</Button>
          </Toolbar>
        </AppBar>
      </div>
    );


}