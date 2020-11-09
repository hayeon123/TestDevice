import React from 'react';
import DeviceUseInfo from '../../components/device/DeviceUseInfo';
import UserInfo from '../../components/user/UserInfo';
import Container from '@material-ui/core/Container';


const UserInfoContainer = () => {
    const userInfo ={
        user_id: 'id1',
        name :'사용자1',
        department: 'ux',
        phone_no : '010-1111-2222',
        email: 'aaa@danal.co.kr',
        description: '특이사항 없음'
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
            user :'사용자1',
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
            user :'사용자1',
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
            <UserInfo userInfo={userInfo}/>
            <DeviceUseInfo deviceUseInfo={deviceUseInfo}/>
            </Container>
        </>
    );
};

export default UserInfoContainer;