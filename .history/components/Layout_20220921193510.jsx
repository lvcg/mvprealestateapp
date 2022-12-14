import Head from 'next/head';
import { Box } from '@chakra-ui/react';

<Layout>
    <h1>test</h1>
</Layout>

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
        <footer>
    </Box>
    </>
)