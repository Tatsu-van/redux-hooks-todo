export const NEW_TO_DO = "NEW_TO_DO";
export const DONE_TO_DO = "DONE_TO_DO";
export const REMOVE_TO_DO = "REMOVE_TO_DO";

export const newToDoAction = (content) => {
  return { type: NEW_TO_DO, payload: content };
};

export const doneToDoAction = (id) => {
  return {type: DONE_TO_DO, payload: id} // {id, content, isDone}
}

export const removeToDoAction = (id) => {
  return {type: REMOVE_TO_DO, payload: id}
}