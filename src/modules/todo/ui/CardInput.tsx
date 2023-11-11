import { ChangeEvent, KeyboardEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "../../../core/hooks/redux";
import { addTodos } from "../reducer/actions";

export const CardInput = () => {
  const [value, setValue] = useState<string>();
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13 && value) {
      dispatch(addTodos({ title: value, method: "POST" }));
      setValue("");
    }
  };

  return (
    <TextField
      onChange={handleChange}
      id="standard-basic"
      label="Введите название задачи"
      variant="standard"
      fullWidth
      value={value || ""}
      onKeyDown={handleKeyDown}
    />
  );
};
