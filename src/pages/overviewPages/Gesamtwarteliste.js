// material-ui
import { Box, Typography, Stack, Button } from '@mui/material';


// project import
import MainCard from 'components/MainCard';
import DateFormFrom from './componentItems/DateFormFrom';
import DateFormTo from './componentItems/DateFormTo';
import TableSort from './componentItems/TableSort';

// Button
import BtnFilter from 'components/button/BtnFilter';
import { useState } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //

const Gesamtwarteliste = () => {

    // show data
    const [show, setShow] = useState(true)

    const handleShow = () => {
        setShow(!show)
    }
    // color
    const mainColor = {
        darkblueBg: '#202734',
        lightwhite: '#FBFBFB',
        lightblueBg: '#00CC96',
        white: '#FFF'

    };



    return (
        <Box compenent='div' >
            <BtnFilter item='Erweiterte Filter' handleShow={handleShow} />



            {show && (
                <MainCard title="Demo" sx={{ m: '20px 0' }}>
                    <Stack direction='column' spacing={2}>


                        <Stack direction='row' spacing={4} alignItems='center' >

                            <Typography
                                sx={{ fontSize: '20px' }} >Geburtsdatum</Typography>
                            <DateFormFrom />
                            <DateFormTo />

                        </Stack>

                        <Stack direction='row' spacing={4} alignItems='center'>

                            <Typography
                                sx={{ fontSize: '20px' }} >(gew.) Eintrittsdatum</Typography>
                            <DateFormFrom />
                            <DateFormTo />

                        </Stack>

                        <Stack direction='row' spacing={3} alignItems='center' justifyContent='flex-end'>
                            <Button variant="contained" size="large" color="secondary"
                                sx={{ fontWeight:'600',
                                    '&:hover': {
                                        bgcolor: mainColor.lightblueBg,
                                        color: mainColor.white,
                                        
                                    }

                                }}
                            >FILTERN</Button>
                            <Button variant="contained" size="large" color="secondary"
                                sx={{fontWeight:'600',
                                    '&:hover': {
                                        bgcolor: mainColor.lightblueBg,
                                        color: mainColor.white,
                                        fontWeight:'600'

                                    }

                                }}
                            >ZURÜCKSETZEN</Button>


                        </Stack>
                    </Stack>



                </MainCard>
               
                
            )}

            <MainCard>
                <TableSort/>

            </MainCard>
        </Box>
    )
};

export default Gesamtwarteliste;
