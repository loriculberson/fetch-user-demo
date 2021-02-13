import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  color1: {
    backgroundColor: "purple"
  },
  color2: {
    backgroundColor: "yellow"
  },
  color3: {
    backgroundColor: "grey"
  }
});


export default function BasicTable({users}) {
  const classes = useStyles();

  const rowColor = (gender) => {
    return gender === "male" ? classes.color1 
            : gender === "female" ? classes.color2 
            : classes. color3
  } 
  return (
    <TableContainer component={Paper}>
      <Table className={`${classes.table}`}aria-label="simple table">
        <TableHead>
          <TableRow className={classes.funColor}>
            <TableCell>Title</TableCell>
            <TableCell align="right">First</TableCell>
            <TableCell align="right">Last</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((user, index) => (
              <TableRow key={user.login.uuid} className={rowColor(user.gender)}>
                <TableCell component="th" scope="row">{user.name.title}</TableCell>
                <TableCell align="right"  className={classes.funColor}>{user.name.first}</TableCell>
                <TableCell align="right">{user.name.last}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
