import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const NavBar = () => {
  const classes = useStyle();
  return (
    <Grid container xs={12} className={classes.navBar}>
      <Container>
        <Link to="/">React Query CURD</Link>
        <Box mx={"auto"} />
        <Link to="/create-book">+ Add new book</Link>
      </Container>
    </Grid>
  );
};

export default NavBar;

const useStyle = makeStyles({
  navBar: {
    background: "black",
    color: "#fff",
    padding: 10,
    "& a": {
      color: "#fff",
      textDecoration: "none",
    },
  },
});
