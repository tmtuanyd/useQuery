import React from "react";
import { Switch, Route } from "react-router-dom";
import BookList from "./BookList/BookList";
import CreateBook from "./CreateBook/CreateBook";
import NavBar from "./MainLayout/NavBar";
import UpdateBook from "./UpdateBook/UpdateBook";

function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path="/">
        <BookList />
      </Route>
      <Route exact path="/create-book">
        <CreateBook />
      </Route>
      <Route exact path="/update-book/:id">
        <UpdateBook />
      </Route>
    </Switch>
    </>
  );
}

export default App;
