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
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  // render search
  // const search = menuItem.items.map((item) => {
  //   return <Search key={item.children[0].id} item = {item.children[0].title}/>
  // })

  return (
    <>
    
      {!matchesXs && <HeaderTitle navigation={navigation} />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
      <BtnSchool />
      <BtnCalendar/>

      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
