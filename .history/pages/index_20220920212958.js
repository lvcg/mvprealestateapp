import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box>
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xk" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" padding="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home() {
  return (
    <div>
      <h1>Hello World </h1>   
      <Banner 
        purpose= "Rent a Home"
        title1= "Search for rentals"
        title2= "in your area"
        desc1= "Find your next home with us"
        desc2= "We have a large selection of homes"
        buttonText= "Search"
         />
      <Banner 
        purpose= {'For Rent'}
         />   
    </div>
  )
}
