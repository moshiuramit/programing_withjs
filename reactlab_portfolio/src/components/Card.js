import { Heading, HStack, Image, Text, VStack, Link, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return( 
  <VStack bg='white' borderRadius='lg'>
    <Image
      src={imageSrc}
      alt={title}
      borderRadius='lg'
    />
      <VStack mt='6' spacing='5' alignItems="flex-start" >
        <Box p={15}>
          <Heading size='md' fontSize='20px' color='black'>{title}</Heading>
          <Text color='gray'>
            {description}
          </Text>
          <HStack color='black'> <Link>See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link> </HStack>
        </Box>
    </VStack>
  </VStack>
  );
};

export default Card;
