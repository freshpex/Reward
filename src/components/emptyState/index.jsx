import React from "react";
import { Box, Text, Center, Image } from "@chakra-ui/react";
import { colors } from "../../constants/colors";

const EmptyState = ({ title, description, icon }) => {
  return (
    <Box display={"grid"} placeItems={"center"} h="352px">
      <Box display="flex" flexDir="column">
        <Box>
          <Center>
            <Image src={icon} alt="icon" />
          </Center>
        </Box>

        <Text
          textAlign={"center"}
          color={colors.text}
          fontSize="30px"
          fontWeight={"500"}
        >
          {title}
        </Text>
        <Box display="flex" justifyContent={"center"} mb="15px" mt="4px">
          <Box w="186px">
            <Text
              color={colors.sub}
              fontSize="12px"
              fontWeight={"400"}
              textAlign={"center"}
            >
              {description}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyState;
