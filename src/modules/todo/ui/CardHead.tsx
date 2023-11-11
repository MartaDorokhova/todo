import dayjs from "dayjs";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { getTodosLengthSelectors } from "../reducer/selectors";
import { numberOfTask } from "../helpers";

export const CardHead = () => {
  const todosLength = useSelector(getTodosLengthSelectors);

  return (
    <Grid>
      <Grid>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {dayjs(Date.now()).format("YYYY MMMM D ")}
        </Typography>
      </Grid>
      <Grid container direction="row" justifyContent="flex-end">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {todosLength
            ? `${todosLength} ${numberOfTask(todosLength)}`
            : " У вас 0 задач, добавьте новую"}
        </Typography>
      </Grid>
    </Grid>
  );
};
