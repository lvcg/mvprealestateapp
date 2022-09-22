import { Link } from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs-search';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="2xl" fontWeight="bold" color="blue.400">
            <Link href="/" paddingLeft="2">Real Estate App</Link>
        </Box>    
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                <MenuList>
                    <Link Href="/" passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link> 
                    <Link Href="/search" passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link> 
                    <Link Href="/search?purpose=for=sale" passHref>
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link> 
                    <Link Href="/" passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>    
                        

                </MenuList>
            </Menu>
        </Box>

    </Flex>

)

export default Navbar;

