import { SetStateAction, Dispatch } from "react";
import { TBlockOfForm, TStateInApp } from "../../../types";

export type TArrayFormFields = {
  setState: Dispatch<SetStateAction<TStateInApp>>;
};

export type TStateInArray = {
  fields: TBlockOfForm[];
};
