import * as React from 'react';

import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import { useMediaQuery}  from '@mui/material';


// COLOR:
const mainColor = {
    darkblueBg: '#202734',
    lightwhite: '#FBFBFB',
    lightblueBg: '#00CC96',
    white: '#FFF',
    black: '#000'

};


const BtnFilter = ({ item, handleShow }) => {
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));



    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-haspopup="true"
                variant="outlined"
                disableElevation
                startIcon={<FilterListOutlinedIcon
                    sx={{ color: mainColor.lightblueBg
                    }} />}
                endIcon={<KeyboardArrowDownIcon
                    sx={{ color: mainColor.lightblueBg, ml: matchDownSM? 0: 1 }}
                />}
                sx={{
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontWeight: '400',
                    color: mainColor.black,
                    border: `1px solid ${mainColor.black}`,
                    '&:hover': { border: `1px solid ${mainColor.lightblueBg}`
                }
                }}
                onClick = {handleShow}


            >
                {item}
            </Button>

        </div>
    );
}

BtnFilter.propTypes = {
    item: PropTypes.string,
    show: PropTypes.bool,
    handleShow: PropTypes.func
}


export default BtnFilter;