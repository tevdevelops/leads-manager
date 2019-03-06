import { CREATE_MESSAGE } from "./types";

// Create Messages
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};
