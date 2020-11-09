import React from 'react';
import DeviceList from '../../components/device/DeviceList';
import Container from '@material-ui/core/Container';

const DeviceListContainer = () => {
    function createData(device_id, device_name, model, status, etc ){
        return {device_id, device_name, model, status, etc}
    }
    const rows=[
        createData('DNP-A006', 'Optimus Vu 2', 'F200L', '0', '' ),
        createData('DNP-A004', 'Optimus Vu 2', 'F200L', '2', '' ),
        createData('DNP-I008', 'iPhone7', 'MN8X', '1', 'ㅇㅇㅇ' ),
        createData('DNP-I003', 'iPhone7', 'MN8X', '1', 'ㅇㅇㅇ' ),
        createData('DNP-A001', 'Optimus Vu 2', 'F200L', '0', '' ),

    ];
    const headCells = [
        {
            id:'device_id',
            label: '관리번호'
        },
        {
            id:'device_name',
            label:'Name'
        },
        {
            id:'model',
            label:'Model'
        },
        {
            id :'status',
            label:'상태'
        },
        {
            id : 'etc',
            label: '비고'
        }
    ]
    
    return (
        <>
            <DeviceList rows={rows} headCells={headCells}/>
        </>
    );
};

export default DeviceListContainer;