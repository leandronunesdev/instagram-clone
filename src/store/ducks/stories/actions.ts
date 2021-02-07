import { action } from "typesafe-actions";
import { Stories, TypesStories } from "./types";

export const getStory = (payload: Stories) => action(TypesStories.GET_STORIES, payload)