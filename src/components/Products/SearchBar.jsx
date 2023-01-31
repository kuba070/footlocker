import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContextProvider";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchByParams } = useProducts();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid item md={3}>
      <Paper elevation={5}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          label="search..."
          color="secondary"
          focused
        />

        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("type", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel value="nike" control={<Radio />} label="Nike" />
              <FormControlLabel value="air" control={<Radio />} label="Air" />
              <FormControlLabel
                value="jordan"
                control={<Radio />}
                label="Jordan"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SearchBar;
