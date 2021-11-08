import React from 'react';
import { styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper  } from '@mui/material';
import Box from "@mui/material/Box";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
                fontSize: 23,
                fontWeight: "bold"
},
        [`&.${tableCellClasses.body}`]: {
                fontSize: 18,
                fontWeight: "bold",
                style: {
                        border: '1px dashed darkred',
                },
        },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
                border: 0,
        },
}));

function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
}

const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function MovieInfo(props)  {
        const {movie} = props;
        return (
            <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                    <TableContainer component={Paper}>
                            <Table sx={{ width: '100%'}} aria-label="customized table">
                                    <TableHead>
                                            <TableRow>
                                                    <StyledTableCell>Title</StyledTableCell>
                                                    <StyledTableCell align="left">release_date</StyledTableCell>
                                                    <StyledTableCell align="left">revenue</StyledTableCell>
                                                    <StyledTableCell align="left">runtime</StyledTableCell>
                                            </TableRow>
                                    </TableHead>
                                    <TableBody>
                                                <StyledTableRow>
                                                        <StyledTableCell component="th" scope="row">
                                                                {movie.original_title}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="left">{movie.release_date}</StyledTableCell>
                                                        <StyledTableCell align="left">{movie.revenue}</StyledTableCell>
                                                        <StyledTableCell align="left">{movie.runtime}</StyledTableCell>
                                                </StyledTableRow>
                                    </TableBody>
                                    <TableHead>
                                            <TableRow>
                                                    <StyledTableCell align="left">vote_average</StyledTableCell>
                                                    <StyledTableCell align="left">vote_count</StyledTableCell>
                                                    <StyledTableCell align="left">status</StyledTableCell>
                                                    <StyledTableCell align="left">popularity</StyledTableCell>
                                            </TableRow>
                                    </TableHead>
                                    <TableBody>
                                            <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">
                                                            {movie.vote_average}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="left">{movie.vote_count}</StyledTableCell>
                                                    <StyledTableCell align="left">{movie.status}</StyledTableCell>
                                                    <StyledTableCell align="left">{movie.popularity}</StyledTableCell>
                                            </StyledTableRow>
                                    </TableBody>
                            </Table>
                        </TableContainer>
            </Box>

        );
}

export default MovieInfo;