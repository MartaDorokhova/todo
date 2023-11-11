import { memo } from "react";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TodoList } from "./TodoList";

export const Card = memo(() => {
  return (
    <Grid>
      <List>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Ваши задачи
        </Typography>
        <TodoList />
      </List>
    </Grid>
  );
});
