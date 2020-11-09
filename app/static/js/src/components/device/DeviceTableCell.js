import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import LinkCell from '../common/LinkCell';
const DeviceTableCell = ({ row, headCells }) => {
  const headIds = headCells.map((headCell) => headCell.id);
    console.log(headIds)
  return (
    <>
      {headIds.map((id, index) => (
        <TableCell
          key={index}
        >
          {id === "device_id" ? <LinkCell url={'/device/info'} id={ row[id] }/>: id === "etc"&& `${row[id]}`? <LinkCell url = {'/user/info'} id={row[id]}/>:`${row[id]}`}
        </TableCell>
      ))}
    </>
  );


};

export default DeviceTableCell;
