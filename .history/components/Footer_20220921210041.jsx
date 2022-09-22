import { Box } from '@chakra-ui/react';

const Footer = () => (
    <Box textAlign="center" p="4" borderTop="1px" borderColor="gray.100" >
        &copy; Real Estate App {new Date().getFullYear()}
    </Box>
);

export default Footer