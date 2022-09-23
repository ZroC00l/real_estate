import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Children } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
      <header>
        {/*Navbar component */}
        <Navbar />
      </header>
      <main>
        {/*Children prop is rendered here */}
        {children}
      </main>
      <footer>{/*Footer component goes here */}</footer>
    </Box>
  </>
);

export default Layout;
