import React from 'react';
import DeviceInsert from '../../components/device/DeviceInsert';
import Container from '@material-ui/core/Container';

const DeviceInsertContainer = () => {
    return (
        <>
         <Container maxWidth="md">
            <DeviceInsert/>
         </Container>

        </>
    );
};

export default DeviceInsertContainer;