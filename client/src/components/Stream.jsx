import React from 'react'
import { Box, Heading, Container } from '@chakra-ui/react';
import Notifications from './Notifications';
import Options from './Options.jsx';
import Video from './Video.jsx';


const Stream = () => {
    return (
        <div>
            <Box>
                <Container maxW="1200px" mt="8">
                    <Heading as="h2" size="2xl"> Video Chat App </Heading>
                    <Video />
                    <Options />
                    <Notifications />
                </Container>
            </Box>
        </div>
    )
}

export default Stream