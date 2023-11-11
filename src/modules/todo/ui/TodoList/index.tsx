import { FC } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import { getTodosSelectors } from "../../reducer/selectors";
import { deleteTodo, updateTodo } from "../../reducer/actions";
import { useAppDispatch } from "../../../../core/hooks/redux";
import { useStyles } from "./elements";

export const TodoList: FC = () => {
  const todos = useSelector(getTodosSelectors);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id: number, done: boolean) => {
    dispatch(updateTodo({ id, done: !done }));
  };

  return (
    <>
      {todos ? (
        todos.map((todo) => (
          <ListItem key={todo?.id} disablePadding>
            <Checkbox
              checked={todo?.done}
              onChange={(event) =>
                handleUpdate(todo?.id as number, todo?.done as boolean)
              }
            />
            <ListItemText>
              <ListItemText
                primary={todo?.title}
                className={todo?.done ? classes.through : ""}
              />
              <ListItemText
                secondary={`Добавлено в: ${dayjs(todo?.createdAt).format(
                  "YYYY MM-DD HH:mm:ss "
                )} | изменено: ${dayjs(todo?.updatedAt).format(
                  "YYYY MM-DD HH:mm:ss "
                )}`}
              />
            </ListItemText>

            <IconButton
              onClick={() => handleDelete(todo?.id as number)}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))
      ) : (
        <div>нет задач</div>
      )}
    </>
  );
};
