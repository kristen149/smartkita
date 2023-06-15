// material-ui
import { Box,  Stack, Button, TextField } from '@mui/material';


// project import
import MainCard from 'components/MainCard';
import TableSort from './componentItems/TableSort';

// Button

// ==============================|| SAMPLE PAGE ||============================== //

const Personensuche = () => {
  
  // color
  const mainColor = {
    darkblueBg: '#202734',
    lightwhite: '#FBFBFB',
    lightblueBg: '#00CC96',
    white: '#FFF'

  };



  return (
    <Box compenent='div' >

        <MainCard title="Demo" sx={{ m: '20px 0' }}>
          <Stack direction='row' spacing={2}>
            <TextField id="lastname" label="Nachname" variant="outlined" />
            <TextField id="vorname" label="Vorname" variant="outlined" />
            <TextField id="eMail" label="eMail" variant="outlined" />
            <TextField id="telefon" label="Telefon" variant="outlined" />

            <Stack direction='row' spacing={3} alignItems='center' justifyContent='flex-end'>
              <Button variant="contained" size="large" color="secondary"
                sx={{
                  fontWeight: '600',
                  '&:hover': {
                    bgcolor: mainColor.lightblueBg,
                    color: mainColor.white,

                  }

                }}
              >SUCHEN</Button>
          

            </Stack>
          </Stack>



        </MainCard>


      <MainCard>
        <TableSort />

      </MainCard>
    </Box>
  )
};

export default Personensuche;
