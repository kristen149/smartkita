import * as React from 'react';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Button from '@mui/material/Button';
import { useMediaQuery}  from '@mui/material';


// COLOR:
const  mainColor = {
  darkblueBg:'#202734',
  lightwhite: '#FBFBFB',
  lightblueBg: '#00CC96',
  white:'#FFF',
  black:'#000'

};


const BtnView = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));



  return (
    <div>
      {matchDownSM? 
      <Button
      id="demo-customized-button"
      aria-haspopup="true"
      variant="outlined"
      disableElevation
     
      endIcon={<KeyboardArrowRightOutlinedIcon
      sx= {{color:mainColor.lightblueBg}}
      />}
      sx={{
        borderRadius: '50px',
        textTransform:'none',
        fontWeight:'400',
        color: mainColor.black,
        border:`1px solid ${mainColor.black}`,
        '&:hover': { border: `1px solid ${mainColor.lightblueBg}` }
    }}
      
    >
      View 
    </Button>
    :
    <Button
        id="demo-customized-button"
        aria-haspopup="true"
        variant="outlined"
        disableElevation
        // onClick={handleClick}
       
        endIcon={<KeyboardArrowRightOutlinedIcon
        sx= {{color:mainColor.lightblueBg, ml:'15px'}}
        />}
        sx={{
          borderRadius: '50px',
          textTransform:'none',
          fontWeight:'400',
          color: mainColor.black,
          border:`1px solid ${mainColor.black}`,
          '&:hover': { border: `1px solid ${mainColor.lightblueBg}` }
      }}
        
      >
        View Details
      </Button>
      
    
    }
       
     
    </div>
  );
}

export default BtnView;