import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHead } from "./ui/CardHead";
import { CardInput } from "./ui/CardInput";
import { Card as CardComponent } from "./ui/Card";
import Box from "@mui/material/Box";
import { useAppDispatch } from "../../core/hooks/redux";
import { fetchTodos } from "./reducer/actions";

export const Todo = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <Box sx={{ marginTop: "40px" }}>
      <Card sx={{ minWidth: "100%" }}>
        <CardContent>
          <CardHead />
          <CardInput />
          <CardComponent />
        </CardContent>
      </Card>
    </Box>
  );
};
