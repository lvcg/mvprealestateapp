import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar';

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
        <NavBar />
        </header> 
        <main>
            {children}
        </main>
        <footer>
            Footer
        </footer>
    </Box>
    </>
);

export default Layout;