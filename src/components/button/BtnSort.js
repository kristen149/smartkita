import * as React from 'react';

import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

// COLOR:
const mainColor = {
    darkblueBg: '#202734',
    lightwhite: '#FBFBFB',
    lightblueBg: '#00CC96',
    white: '#FFF',
    black: '#000'

};


// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}

//     {...props}
//   />
// ))(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: 2,
//     marginTop: theme.spacing(1),
//     minWidth: 120,
//     color:
//       theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//     boxShadow:
//       'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//     '& .MuiMenu-list': {
//       padding: '4px 0',
//     },
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       '&:active': {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity,
//         ),
//       },
//     },
//   },
// }));

const BtnSort = ({item}) => {
    //   const [anchorEl, setAnchorEl] = React.useState(null);
    //   const open = Boolean(anchorEl);
    //   const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    //   };
    //   const handleClose = () => {
    //     setAnchorEl(null);
    //   };

    return (
        <div>
            <Button
                id="demo-customized-button"
                // aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                // aria-expanded={open ? 'true' : undefined}
                variant="outlined"
                disableElevation
                // onClick={handleClick}
                startIcon={<SortByAlphaOutlinedIcon
                    sx={{ color: mainColor.lightblueBg }} />}
                endIcon={<KeyboardArrowDownIcon
                    sx={{ color: mainColor.lightblueBg, ml: '15px' }}
                />}
                sx={{
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontWeight: '400',
                    color: mainColor.black,
                    border: `1px solid ${mainColor.black}`,
                    '&:hover': { border: `1px solid ${mainColor.lightblueBg}` }
                }}

            >
                {item}
            </Button>

        </div>
    );
}
BtnSort.propTypes = {
    item: PropTypes.string
}


export default BtnSort;