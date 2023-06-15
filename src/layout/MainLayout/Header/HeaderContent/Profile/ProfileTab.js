import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
// import { useTheme } from '@mui/material/styles';
import {Box, List, ListItemButton, ListItemIcon, ListItemText, TextField, Dialog, DialogActions,DialogContent,DialogContentText,DialogTitle, Button } from '@mui/material';

// assets
import { EditOutlined, ProfileOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Typography } from '@mui/material';
import { Link } from '../../../../../../node_modules/react-router-dom/dist/index';

// COLOR
const mainColor = {
  darkblueBg: '#202734',
  lightwhite: '#FBFBFB',
  lightblueBg: '#00CC96',
  white: '#FFF'

};


// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

const ProfileTab = ({ handleLogout }) => {
  // const theme = useTheme();


  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  // PASSWORD CHANGE
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <List component="nav" sx={{
      p: 0,
      '& .MuiListItemIcon-root': { minWidth: 32, color: mainColor.lightblueBg },

      // '&.Mui-selected': {color:mainColor.lightblueBg, bgcolor:mainColor.lightblueBg},
      // '&:hover': {color:mainColor.lightblueBg,bgcolor:mainColor.lightblueBg}

    }}>
      <Box onClick={handleClickOpen}>
      <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}
        sx={{
          '&:hover': { color: mainColor.lightblueBg },

        }}

      >
        <ListItemIcon >
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary="Passwort ändern" />
      </ListItemButton>
      </Box>
      {/* Pop up dialogue, password change */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle variant='h3'>Passwort ändern</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bitte überprüfen Sie Ihre Eingabe
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Aktuelles Passwort"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Neues Passwort"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Passwort wiederholen"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Abbrechen</Button>
          <Button variant='outlined' onClick={handleClose}>Speichern</Button>
        </DialogActions>
      </Dialog>

{/* ====================================================================================================== */}

      <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}
        sx={{
          '&:hover': { color: mainColor.lightblueBg }

        }}>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="Übersicht" />
      </ListItemButton>

      <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}
        sx={{
          '&:hover': { color: mainColor.lightblueBg }

        }}>
        <ListItemIcon>
          <ProfileOutlined />
        </ListItemIcon>
        <ListItemText primary="Meine Todos" />
      </ListItemButton>
      {/* <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
          <ListItemIcon>
            <WalletOutlined />
          </ListItemIcon>
          <ListItemText primary="Billing" />
        </ListItemButton> */}
      <Typography component={Link} to='/login' sx={{
        textDecoration: 'none', color: '#000'
      }}>
        <ListItemButton selected={selectedIndex === 2} onClick={handleLogout}
          sx={{
            '&:hover': { color: mainColor.lightblueBg }

          }}>
          <ListItemIcon>
            <LogoutOutlined />
          </ListItemIcon>
          <ListItemText primary="Abmelden" />
        </ListItemButton>
      </Typography>
    </List>
  );
};

ProfileTab.propTypes = {
  handleLogout: PropTypes.func
};

export default ProfileTab;
