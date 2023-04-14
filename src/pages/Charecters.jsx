import { Box, Button, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Filters from "../components/Filters";
import Loading from "../components/Loading";
import { get_char } from "../redux/characters/actions";
import { BorderStyle, ButtonStyle } from "../styles";

export default function Charecters() {
  let { CHAR, pages, loading } = useSelector((store) => store.charManager);
  let dispatch = useDispatch();

  let location = window.location.search;
  const [searchParams, setSearchParams] = useSearchParams(location);

  useEffect(() => {
    const curr = Object.fromEntries([...searchParams]);
    dispatch(get_char(curr));
  }, [dispatch, searchParams]);

  return (
    <Box>
      <Filters pages={pages} />
      <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {CHAR.map((character, i) => (
          <Loading>
            <Box key={i} {...BorderStyle} overflow="hidden">
              <Image src={character.image} w="100%" />
              <Button
                {...ButtonStyle}
                w="100%"
                as={Link}
                to={`${character.id}`}
              >
                {character.name}
              </Button>
            </Box>
          </Loading>
        ))}
      </Grid>
    </Box>
  );
}

// - **Pagination** should be implemented here by displaying only 12 characters per page.
// - Display the card in form of grids with **4 rows x 3 columns** per page.

// - There should be a search bar at the top of the page, where the user can **search for characters**.
// - The user should be able to **filter the character** by the following criteria
//     - Filter By Status ( Select tag with “Alive”, “Dead” or “Unknown” as options)
//     - Filter By Gender ( Select tag with “Male” or “Female” as options)
// - The **Pagination**, **Search** and **Filter** functionality should all work together seamlessly.
