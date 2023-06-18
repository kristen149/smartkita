// material-ui
import { Box,  useMediaQuery } from '@mui/material';

// project import
import HeaderTitle from 'components/@extended/HeaderTitle';
import navigation from 'menu-items';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import BtnSchool from '../../../../components/button/BtnSchool';
import BtnCalendar from '../../../../components/button/BtnCalendar';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
    
      {!matchesSm && <HeaderTitle navigation={navigation} />}
      {matchesSm && <Box sx={{ width: '100%', ml: 1 }} />}
      <BtnSchool />
      <BtnCalendar/>

      <Notification />
      {!matchesSm && <Profile />}
      {matchesSm && <MobileSection />}
    </>
  );
};

export default HeaderContent;
