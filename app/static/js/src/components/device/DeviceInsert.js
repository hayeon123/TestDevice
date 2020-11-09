import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const DeviceInsert = () => {
    // device_id:'A006',
    // device_name:'Optimus Vu 2',
    // model:'F200L',
    // status:'0',
    // serial_no: 'serialno123',
    // phone_no: '010-1231-1234',
    // carrier:'KTF',
    return (
        <>
            <h3>Device</h3>
            <table border="1">
                <tbody>
                    <tr>
                        <td>관리번호</td>
                        <td><TextField required={true}/></td>
                        <td>Name</td>
                        <td><TextField /></td>
                    </tr>
                    <tr>
                        <td>Model</td>
                        <td><TextField /></td>
                        <td>Serial No.</td>
                        <td><TextField /></td>
                    </tr>
                    <tr>
                        <td>Phone_no</td>
                        <td><TextField /></td>
                        <td>통신사 </td>
                        <td><TextField /></td>
                    </tr>
                </tbody>
            </table>
            
        </>
    );
};

export default DeviceInsert;