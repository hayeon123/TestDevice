import React from 'react';
import DeviceInfo from '../../components/device/DeviceInfo';
import DeviceUseInfo from '../../components/device/DeviceUseInfo';
import Container from '@material-ui/core/Container';
const DeviceInfoConatainer = ({match, history}) => {
    
    // const {device_id} = match.params; 
    const deviceInfo = {
        device_id:'A006',
        device_name:'Optimus Vu 2',
        model:'F200L',
        status:'0',
        serial_no: 'serialno123',
        phone_no: '010-1231-1234',
        carrier:'KTF',
    }
    const deviceUseInfo=[
        {
            rentId:'1234',
            device_id:'A006',
            user :'사용자1',
            department:'ux',
            mobile: '010-1111-1111',
            state:'대여',
            reason:'Test',
            startTime:'2020-10-19 14:00',
            endTime:'asdf'
        },
        {
            rentId:'2345',
            device_id:'A006',
            user :'사용자2',
            department:'ux',
            mobile: '010-1111-1111',
            state:'반납',
            reason:'Test',
            startTime:'2020-10-19 14:00',
            endTime:'2020-10-19 15:00'
        },
        {
            rentId:'3456',
            device_id:'A006',
            user :'사용자3',
            department:'ux',
            mobile: '010-1111-1111',
            state:'반납',
            reason:'Test',
            startTime:'2020-10-19 14:00',
            endTime:'2020-10-19 15:00'
        },
    ]
    return (
        <>
         <Container maxWidth="lg">
            <DeviceInfo deviceInfo={deviceInfo}/>
            <DeviceUseInfo deviceUseInfo={deviceUseInfo}/>
            </Container>
        </>
    );
};

export default DeviceInfoConatainer;