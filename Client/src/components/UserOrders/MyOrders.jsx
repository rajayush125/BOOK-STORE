import React, { useEffect, useState } from "react";
import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
import { yellow } from '@material-ui/core/colors';
// import axios from "axios";
// import { Link } from "react-router-dom";
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
 stuListColor: {
  backgroundColor: yellow[500],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
})

export default function MyOrders({ login, role, _id }) {
  const classes = useStyles();

//   useEffect(() => {
//     if (login && role === "CUSTOMER") {
//       axios.get("http://localhost:9002/orders").then((res) => {
//         setBooks(res.data);
//       });
//     }
//   }, []);

  return (
    <div class="col main pt-5 mt-5">
      <Box textAlign="center" p={2} className={classes.stuListColor}>
        <Typography variant="h4">My Orders</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#f9a825" }}>
              <TableCell align="center" className={classes.tableHeadCell}>Sr.No</TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>Book Name</TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>Order ID</TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>Payment ID</TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>Order Date</TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {
              books.map((book,i) => {
                return(
                  <TableRow key={i}>
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell align="center">{book.name}</TableCell>
                    <TableCell align="center">{book.price}</TableCell>
                    <TableCell align="center">{book.author}</TableCell>
                    <TableCell align="center">{book.category}</TableCell>
                    <TableCell align="center">
                        <Tooltip title="Update">
                            <IconButton 
                            // LinkComponent={Link} to={`/update/${_id}`}
                            >
                                <Link to={`/update/${_id}`}>
                                    <EditIcon />
                                </Link>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton 
                            onClick={() => handleDelete(book._id)}
                            >
                                <DeleteIcon color="secondary" />
                            </IconButton>
                        </Tooltip>
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody> */}
        </Table>
      </TableContainer>
    </div>
  );
};