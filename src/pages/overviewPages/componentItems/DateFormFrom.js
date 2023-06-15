import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// eslint-disable-next-line
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateFormFrom () {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Von" sx={{width:180}} />
    </LocalizationProvider>
  );
}

