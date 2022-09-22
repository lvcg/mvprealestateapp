import Head from 'next/head';
import { Box } from '@chakra-ui/react';



const Layout = ({ children }) => (
    <>
    <Head>
        <title>Real Estate App</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
       <header>
        NavBar
        </header> 
        <main>
            {children}
        </main>
    </Box>
    </>
)