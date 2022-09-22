import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill }  from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchapi';

const PropertyDetails = ({ propertyDetails: price, rentFrequency, rooms,title, baths, area, agency, isVerified, description, type, purpose, amenities, photos }) => (
    <Box maxWidth="1000px" margin="auto" p="4">
        {}


    </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: {id} }) {
    const Data = await fetchApi(`${baseUrl}/api/properties/${id}`);

    return {
        props: {
            propertyDetails: data
    }
}
}
   
