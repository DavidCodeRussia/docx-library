import { SetStateAction, Dispatch } from "react";

export type TBlockOfForm = {
  name: string;
  surname: string;
};

export type TStateInApp = {
  fields: TBlockOfForm[];
} | null;
