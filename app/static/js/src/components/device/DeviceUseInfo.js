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
});

const DeviceUseInfo = ({deviceUseInfo})=> {
  const classes = useStyles();
  const header = ['테스트폰','사용자','소속','Phone_no','대여상태','대여사유','대여시간','반납시간']
  return (
      <>
        <h3>대여이력</h3>
        <TableContainer component={Paper}>
        <Table className={classes.table} >
            <TableHead>
            
            <TableRow>
                {header.map((head, index)=>(
                    <TableCell key={index}>{head}</TableCell>
                ))}
    
            </TableRow>
            </TableHead>
            <TableBody>
            {deviceUseInfo.map((info) => (
                <TableRow key={info.rentId}>
                <TableCell>{info.device_id}</TableCell>
                <TableCell >{info.user}</TableCell>
                <TableCell >{info.department}</TableCell>
                <TableCell >{info.mobile}</TableCell>
                <TableCell >{info.state}</TableCell>
                <TableCell >{info.reason}</TableCell>
                <TableCell >{info.startTime}</TableCell>
                <TableCell >{info.endTime}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </>
  );
}

export default DeviceUseInfo;