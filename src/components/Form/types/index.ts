import { SetStateAction, Dispatch } from "react";
import { TStateInApp } from "../../../types";

export type TFormProps = {
  setState: Dispatch<SetStateAction<TStateInApp>>;
};
