import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import { baseUrl, fetchApi } from "../utils/fetchApi";

/*Banner Component*/
const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1} <br />
        {title2}
      </Text>
      <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3">
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForRent, propertiesForSale }) {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <Box>
      <h1>Hello World </h1>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for "
        title2="Everyone"
        desc1="Explore Apartments, Homes, Villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {/*Get properties we want to map over(Rent a home) and then display them here */}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="dream home"
        desc1="Explore Apartments, Homes, Villas"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex>
        {/*Get properties we want to map over(Buy a home) and then display them here */}
      </Flex>
    </Box>
  );
}

/* This is how nextjs fetches data from the api, this special function, works
similar to how useEffect hook is used in a react environment*/

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
