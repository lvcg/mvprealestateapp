import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon, Input, Spinner, Button } from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';

import { filterData, getFilterValues } from '../utils/filterData';


const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);

    return (
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
            {}
            searchFiters
        </Flex>
    )

};

export default SearchFilters;