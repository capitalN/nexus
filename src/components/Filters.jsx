import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  HStack,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { BorderStyle, ButtonStyle } from "../styles";

export default function Filters({ pages }) {
  let location = window.location.search;
  const [searchParams, setSearchParams] = useSearchParams(location);
  const curr = Object.fromEntries([...searchParams]);
  let { page = 1 } = curr;

  let handleFilter = (e) => {
    let { name, value } = e.target;
    setSearchParams({ ...curr, [name]: value, page: 1 });
  };

  const handlePage = (event) => {
    let value = event.target.value;
    setSearchParams({ ...curr, page: +page + +value });
  };

  function handleChange(e) {
    let value = e.target.value;
    console.log(value);
  }

  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(2,1fr)" }}
      alignItems={"center"}
      bgColor="teal"
      p={"10px"}
      color="teal"
      gap={"5px"}
      {...BorderStyle}
      position="sticky"
      zIndex={1000}
      top="0"
      w={"100%"}
    >
      <ButtonGroup colorScheme={"gray"} fontWeight="bolder">
        <Button onClick={handlePage} value={-1} isDisabled={page == 1}>
          {+page - 1}
        </Button>
        <Button colorScheme="blackAlpha">{page}</Button>
        <Button onClick={handlePage} value={+1} isDisabled={page == pages}>
          {+page + 1}
        </Button>
      </ButtonGroup>

      <HStack justifySelf={"right"}>
        <Select bgColor={"white"} onChange={handleFilter} name="status">
          <option value={""}>Status</option>
          <option value={"Alive"}>Alive</option>
          <option value={"Dead"}>Dead</option>
          <option value={"Unknown"}>Unknown</option>
        </Select>
        <Select bgColor={"white"} onChange={handleFilter} name="gender">
          <option value={""}>Gender</option>
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
        </Select>
      </HStack>
    </Grid>
  );
}
