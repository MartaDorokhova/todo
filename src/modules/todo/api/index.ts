import { fetchApp } from "../../../core/http";
import { TMethod } from "../models/types";

type TParamsApi<T> = {
  method?: TMethod;
  url?: string;
  body?: T;
};

export const todoApi = <T>(params: TParamsApi<T>) => {
  return fetchApp({
    method: params.method,
    data: params.body,
    url: params.url,
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};
