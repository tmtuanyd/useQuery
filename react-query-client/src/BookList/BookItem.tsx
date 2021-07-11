import { Button, CircularProgress, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { BookType } from "../Type/Book";
import { useMutation, useQueryClient } from "react-query";
import { removeBook } from "../api";
import { Remove } from "@material-ui/icons";

const BookItem = ({ id, title, author }: BookType) => {
  const classes = useStyle();
  const queryClient = useQueryClient()
  const {mutateAsync, isLoading} = useMutation(removeBook)
  const remove = async (id: number) => {
      await mutateAsync(id)
      queryClient.invalidateQueries('books')
  }
  return (
    <Grid className={classes.bookItem} xs={12} item>
      <Link to={`/update-book/${id}`}>{title}</Link>
      <Typography>{author}</Typography>
      <Button onClick={()=>remove(id)}>
          {isLoading ? <CircularProgress/> : "Remove"}
          </Button>
    </Grid>
  );
};

export default BookItem;

const useStyle = makeStyles({
  bookItem: {
    display: "flex",
  },
});
