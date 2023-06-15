import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';

// material-ui
import { Typography, Box, FormControl } from '@mui/material';

// project imports



// ==============================|| HEADERTITLE ||============================== //

const HeaderTitle = ({ navigation }) => {
  const location = useLocation();
  // const [main, setMain] = useState();
  const [item, setItem] = useState();

  // icon
  // const Icon = item.icon;

  // const Icon = item.icon;
  // const itemIcon = item.icon ? <Icon style={{ fontSize:'1rem'   }} /> : false;

  // set active item state
  const getCollapse = (menu) => {
    if (menu.children) {
      menu.children.filter((collapse) => {
        if (collapse.type && collapse.type === 'collapse') {
          getCollapse(collapse);
        } else if (collapse.type && collapse.type === 'item') {
          if (location.pathname === collapse.url) {
            // setMain(menu);
            setItem(collapse);
          }
        }
        return false;
      });
    }
  };

  useEffect(() => {
    navigation?.items?.map((menu) => {
      if (menu.type && menu.type === 'group') {
        getCollapse(menu);
      }
      return false;
    });
  });

  // only used for component demo breadcrumbs
  if (location.pathname === '/breadcrumbs') {
    location.pathname = '/dashboard/analytics';
  }

  // let mainContent;
  let itemContent;
  let HeaderContent = <Typography />;
  let itemTitle = '';


  // items
  if (item && item.type === 'item') {
    itemTitle = item.title;
    itemContent = (
      <Typography component='h6'  sx={{color:'#FFF', fontSize:'20px', position:'relative', bottom:'-0.1rem'}}>
        {console.log(item)}
        
        {itemTitle}
      </Typography>
    );

    // main
      HeaderContent = (
        <Box  sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
          <FormControl sx={{ width: { xs: '100%', md: 224, color:'#FFF' } }}>


            <Typography  variant="h6" sx={{
              textDecoration:'none'
            }}>
                 
                {itemContent}

            </Typography>

          </FormControl>
        </Box>

      );
    
  }

  return HeaderContent;
};

HeaderTitle.propTypes = {
  navigation: PropTypes.object,
  title: PropTypes.bool
};

export default HeaderTitle;
