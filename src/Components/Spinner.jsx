import React from "react";
import { Box, Center, Spinner } from "@chakra-ui/react";

export default function SpinnerComponent() {
  return (
    <Center>
      <Box mt={6}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    </Center>
  );
}
