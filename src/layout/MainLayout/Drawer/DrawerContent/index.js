// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';

// ==============================|| DRAWER CONTENT ||============================== //
const maindarkblueBg = "#202734";

const DrawerContent = () => (
  
  <SimpleBar
    sx={{
      '& .simplebar-content': {
        display: 'flex',
        flexDirection: 'column',
        bgcolor:maindarkblueBg,
        height:'100vh'

      }
    }}
  >
    <Navigation />
    <NavCard />
  </SimpleBar>
);

export default DrawerContent;
