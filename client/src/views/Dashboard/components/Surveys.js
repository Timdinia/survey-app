/* eslint-disable no-script-url */

import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../../layout/Main/components/Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'New feature reviews',
    '100 - (100%)',
    '36 - (36%)',
    3
  ),
  createData(1, '16 Mar, 2019', '-', '-', '-', 8),
  createData(2, '16 Mar, 2019', '-', '-', '-', 1),
  createData(3, '16 Mar, 2019', '-', '-', '-', 6),
  createData(4, '15 Mar, 2019', '-', '-', '-', 2)
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Surveys</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Survey name</TableCell>
            <TableCell>Sent</TableCell>
            <TableCell>Open</TableCell>
            <TableCell align="right">Crédits Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" to="/surveys">
          See all surveys
        </Link>
      </div>
    </React.Fragment>
  );
}
