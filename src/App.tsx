import React from "react";
import Container from "@mui/material/Container";
import { Header } from "./modules/header";
import { Todo } from "./modules/todo";

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Todo />
      </Container>
    </div>
  );
}

export default App;
