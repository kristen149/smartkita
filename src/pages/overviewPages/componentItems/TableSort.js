import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Id', width: 30 },
    { field: 'art', headerName: 'Art', width: 130 },
    { field: 'lastName', headerName: 'Nachname', width: 130 },
    { field: 'firstName', headerName: 'Vorname', width: 130 },
    {
        field: 'fullName',
        headerName: 'Vollname',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'age', headerName: 'Alter', width: 130 },
    { field: 'group', headerName: 'Gruppen', width: 130 },
    { field: 'eintritt', headerName: 'Eintritt', width: 130 },

    { field: 'austritt', headerName: 'Austritt', width: 130 },




];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 30 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 50 },
                    },
                }}
                pageSizeOptions={[5, 10, 50]}
                checkboxSelection
            />
        </div>
    );
}
