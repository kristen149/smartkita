import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// eslint-disable-next-line
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateFormTo () {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Bis" sx={{width:180}} />
    </LocalizationProvider>
  );
}

