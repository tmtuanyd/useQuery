import { CircularProgress, Grid } from "@material-ui/core";
import { BookOutlined } from "@material-ui/icons";
import { title } from "process";
import React from "react";
import { useQuery } from "react-query";
import { getAllBooks } from "../api";
import Container from "../MainLayout/Container";
import { BookType } from "../Type/Book";
import BookItem from "./BookItem";

const BookList = () => {
  const { data, error, isLoading, isError } = useQuery("books", getAllBooks);
  console.log(data);
  if (isLoading) {
    return (
      <Container>
        <CircularProgress style={{ margin: "auto" }} />
      </Container>
    );
  }
  if (isError) {
    return <span>Error: {(error as any).message}</span>;
  }
  return (
    <Container>
      <Grid container>
        {data.map(({ author, title, id }: BookType) => (
          <BookItem key={id} author={author} title={title} id={id} />
        ))}
      </Grid>
    </Container>
  );
};

export default BookList;
