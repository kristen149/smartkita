// material-ui
import { Stack, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled } from '@mui/material/styles';// import InfoCircleOutlined from '@ant-design/icons';

// project import
// import MainCard from 'components/MainCard';

// assets


// ======================||Responsive||======================================

const Root = styled('span')(({theme}) => ({
  [theme.breakpoints.down('xs')]: {
    position:'relative',
    bottom: '0'

  },
  [theme.breakpoints.down('sm')]: {
    position:'relative',
    bottom: '-10vh'

  },
  [theme.breakpoints.up('md')]: {
    position:'relative',

    bottom: '-4vh'

  },
  [theme.breakpoints.up('lg')]: {
    position:'relative',

    bottom: '-20vh'

  }

}))



// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => {  
  
  return(


  <Stack alignItems="center"  >

    <Root>
    <Stack alignItems='center' direction='row' spacing={1} //Responsive above
    >
      <InfoOutlinedIcon color='secondary' sx={{ fontSize: '1.4rem' }} />


      <Typography variant="h6" color="secondary">

        V1.1 smartKita.Gmbh
      </Typography>

    </Stack>
    </Root>

  </Stack>




)};

export default NavCard;
