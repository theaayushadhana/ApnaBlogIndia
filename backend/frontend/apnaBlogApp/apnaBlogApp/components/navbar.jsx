// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Button from '@mui/material/Button';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import { Link } from 'react-router-dom';
// import ApnaBlogApp from '../src/assets/apnaBlog.png';
// import { Box } from '@mui/material';
// const Navbar = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const menuItems = [
//     { text: 'Home', path: '/home' },
//     { text: 'Discover', path: '/discover' },
//     { text: 'About us', path: '/about' },
//     { text: 'Contact', path: '/contactus' },
//     { text: 'Admin', path: '/admin' },
//     {text: 'PrivacyPolicy' , path: '/privacyPolicy'},
//     {text: 'Disclaimer' , path: '/disclaimer'}
//   ];

//   const renderMenuButtons = () => {
//     return menuItems.map((item) => (
//       <Button
//         key={item.text}
//         color="inherit"
//         component={Link}
//         to={item.path}
//         onClick={() => setDrawerOpen(false)} // Close the drawer on link click
//       >
//         {item.text}
//       </Button>
//     ));
//   };

//   const renderDrawerList = () => (
//     <List>
//       {menuItems.map((item) => (
//         <ListItem
//           button
//           key={item.text}
//           component={Link}
//           to={item.path}
//           onClick={toggleDrawer(false)} // Close the drawer on link click
//         >
//           <ListItemText primary={item.text} />
//         </ListItem>
//       ))}
//     </List>
//   );

//   return (
//     <AppBar position="static" sx={{backgroundColor: 'white'  , color: 'black'}}>
//       <Toolbar>
        
//         <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//           <img src={ApnaBlogApp} alt="ApnaBlogApp " style={{ height: '60px', marginRight: '10px' }} />
//           <Typography variant="h6" component="div">
//             ApnaBlogApp
//           </Typography>
//         </Box>
//         {isMobile ? (
//           <>
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               onClick={toggleDrawer(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Drawer
//               anchor="left"
//               open={drawerOpen}
//               onClose={toggleDrawer(false)}
//             >
//               {renderDrawerList()}
//             </Drawer>
//           </>
//         ) : (
//           renderMenuButtons()
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ApnaBlogApp from '../src/assets/apnaBlog.png';
import { Box } from '@mui/material';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/home' },
    { text: 'Discover', path: '/discover' },
    { text: 'About us', path: '/about' },
    { text: 'Contact', path: '/contactus' },
    { text: 'Admin', path: '/admin' },
   
  ];

  const renderMenuButtons = () => {
    return menuItems.map((item) => (
      <Button
        key={item.text}
        color="inherit"
        component={Link}
        to={item.path}
        onClick={() => setDrawerOpen(false)} // Close the drawer on link click
        sx={{ mx: 1 }} // Add some margin between buttons
      >
        {item.text}
      </Button>
    ));
  };

  const renderDrawerList = () => (
    <List sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          component={Link}
          to={item.path}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={ApnaBlogApp} alt="ApnaBlogApp" style={{ height: '60px', marginRight: '10px' }} />
          <Typography variant="h6" component="div">
            ApnaBlogApp
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ ml: 'auto' }} // Align to the right
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                {renderDrawerList()}
              </Box>
            </Drawer>
          </>
        ) : (
          renderMenuButtons()
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
