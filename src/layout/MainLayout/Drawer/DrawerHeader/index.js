import PropTypes from 'prop-types';

// material-ui
import { Stack } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/Logo';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const darkblueBg = '#202734';

  return (
    // DrawerHeaderStyled: 
    // display:flex + padding left bottom
    <DrawerHeaderStyled bgcolor= {darkblueBg} open={open} sx={{
      pl:'0', pb:'0', justifyContent:'center'

    }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo />
        
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
