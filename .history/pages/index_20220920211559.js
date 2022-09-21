import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({ purpose }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box>
      <Text  color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
    </Box>
  </Flex>
)

export default function Home() {
  return (
    <div>
      <h1>Hello World </h1>   
      <Banner Purpose= {'For Sale'} />
      <Banner purpose= {'For Rent'} />   
    </div>
  )
}
