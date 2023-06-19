// material-ui
import { useMediaQuery, Container,  Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent='center'
        spacing={2}
        textAlign={matchDownSM ? 'center' : 'inherit'}
      >
        <Typography variant="subtitle2" color="secondary" component="span">
          <Typography variant='h5' color='primary' target="_blank" >
            &copy; smartkita GmBH&nbsp;
          </Typography>
        </Typography>
{/* 
        <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'inherit'}>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="=/"
            target="_blank"
            underline="hover"
          >
            Smartkita GmBH
          </Typography>

        </Stack> */}
      </Stack>
    </Container>
  );
};

export default AuthFooter;
