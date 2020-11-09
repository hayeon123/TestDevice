import React from 'react';

const UserInfo = ({userInfo}) => {
    // const userInfo ={
    //     user_id: 'id1',
    //     name :'사용자1',
    //     department: 'ux',
    //     phone_no : '010-1111-2222',
    //     email: 'aaa@danal.co.kr',
    //     description: '특이사항 없음'
    // }
    
    return (
        <>
            <table border="1">
                <tbody>
                    <tr>
                        <td>ID</td> <td>{userInfo.user_id}</td>
                        <td>이름</td><td>{userInfo.name}</td>
                    </tr>
                    <tr>
                        <td>소속</td> <td>{userInfo.department}</td>
                        <td>전화번호</td><td>{userInfo.phone_no}</td>
                    </tr>
                    <tr>
                        <td>email</td> <td>{userInfo.email}</td>
                        <td>특이사항</td><td>{userInfo.description}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default UserInfo;