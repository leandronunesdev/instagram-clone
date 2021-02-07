import { action } from "typesafe-actions";
import { TypeUser, User } from "./types";

export const getUser = (payload: User) => action(TypeUser.GET_USER, payload)