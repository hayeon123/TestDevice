import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';


const DeviceInfo = ({deviceInfo}) => {
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
                        <td>{deviceInfo.device_id}</td>
                        <td>Name</td>
                        <td>{deviceInfo.device_name}</td>
                    </tr>
                    <tr>
                        <td>Model</td>
                        <td>{deviceInfo.model}</td>
                        <td>Serial No.</td>
                        <td>{deviceInfo.serial_no}</td>
                    </tr>
                    <tr>
                        <td>Phone_no</td>
                        <td>{deviceInfo.phone_no}</td>
                        <td>통신사 </td>
                        <td>{deviceInfo.carrier}</td>
                    </tr>
                    <tr>
                        <td  colSpan = "3">상태 </td>
                        <td>{deviceInfo.status==='0'?'대기':deviceInfo.status==='1'?'대여중':"사용불가"}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default DeviceInfo;