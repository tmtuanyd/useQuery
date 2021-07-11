import { Box, useMediaQuery } from "@material-ui/core";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import { getBook, updateBook } from "../api";
import Container from "../MainLayout/Container";
import { BookType } from "../Type/Book";

const UpdateBook = () => {
  const { id }: any = useParams();
  const history = useHistory();
  const { data, error, isLoading, isError } = useQuery(
    ["book", { id }],
    getBook
  );
  const {mutateAsync, isLoading: isMutating} = useMutation(updateBook) 
  const onFormSubmit = async (data: BookType) => {
      await mutateAsync({...data, id: id})
      history.push('/') 
  }
  if(isLoading){
      return <div>Loading ...</div>
  }
  return <Container>
      <Box>
          
      </Box>
  </Container>;
};

export default UpdateBook;
