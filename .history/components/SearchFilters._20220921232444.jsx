import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon, Input, Spinner, Button } from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';

const SearchFilters = () => {
    const [filters, setFilters] = useState([]);

    return (
        <Flex bg="gray.100" p="4" justifyContent="center">
            searchFiters
        </Flex>
    )

};

export default SearchFilters;