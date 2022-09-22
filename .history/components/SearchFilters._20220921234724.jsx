import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon, Input, Spinner, Button } from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';

import { filterData, getFilterValues } from '../utils/filterData';


const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);

    const searchProperties = (filterValues) => {


    }

    return (
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select 
                    placeholder={filter.placeholder}
                    w="fit-content"
                    p="2"
                    onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>
                        {filter?items?.map((option) => (
                        </Select>  
                </Box>       
                ))}
           
        </Flex>
    )

};

export default SearchFilters;