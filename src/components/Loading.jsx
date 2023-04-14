import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export default function Loading({ children }) {
  let { loading } = useSelector((store) => store.charManager);

  if (loading) {
    return (
      <Box>
        <Image
          src="https://i.redd.it/x498howiltl71.gif"
          w="100%"
          h={"100%"}
          overflow="hidden"
        />
      </Box>
    );
  }
  return children;
}

// https://i.redd.it/x498howiltl71.gif
// https://user-images.githubusercontent.com/44013819/109408845-28a0fc80-796c-11eb-9da0-44406ff89ccd.gif
