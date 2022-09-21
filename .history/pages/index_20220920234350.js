import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import { baseUrl, fetchApi } from '../utils/fetchApi';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box>
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xk" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" padding="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home( { propertiesForSale, propertiesForRent }) {
  console.log(propertiesForSale, propertiesForRent);
  return (
    <Box>
      <Banner 
        purpose= "Rent a Home"
        title1= "Search for rentals"
        title2= "in your area"
        desc1= "Find your next home with us"
        desc2= "We have a large selection of homes"
        buttonText= "Explore Renting"
        linkName= "/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
         />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => <Property property={property} key />)}
      </Flex>   
      <Banner 
        purpose= "Buy a home "
        title1= "Find your dream home"
        title2= "in your area"
        desc1= "Find your next home with us"
        desc2= "We have a large selection of homes"
        buttonText= "Explore Renting"
        linkName= "/search?purpose=for-sale"
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
         /> 
          {/* Fetch the properties and map */}
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties?list?locationExternalIDs=5002&purpose=for-sale&hitPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties?list?locationExternalIDs=5002&purpose=for-rent&hitPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSle?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }

}
