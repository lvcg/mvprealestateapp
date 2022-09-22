import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon 
                as={FaArrowAltCircleLeft}
                fontSize="2xl"
                onClick={scrollPrev}
                cursor="pointer"
            />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon 
                as={FaArrowAltCircleRight}
                fontSize="2xl"
                onClick={scrollNext}
                cursor="pointer"
            />
        </Flex>
    )
}
const ImageScrollbar = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow:'hidden'}}>
        {data.map((image) => (
            <Box key={item.id} width="910px" itemId={item.id} overflow="hidden" p="1">
                <Image placeholder='blur' alt="property" blurDataURL={item.url} src={item.url} width={1000} height={500} />
            </Box>

        )}
     </ScrollMenu>   
)