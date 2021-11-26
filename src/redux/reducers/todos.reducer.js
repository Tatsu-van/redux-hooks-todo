import { v4 as uuidv4 } from "uuid";
import { DONE_TO_DO, NEW_TO_DO, REMOVE_TO_DO } from "../action/actions";

const initState = {
  toDoList: [
    { id: uuidv4(), content: "Buy Bread", isDone: false },
    { id: uuidv4(), content: "Buy Milk", isDone: true },
  ],
};

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case NEW_TO_DO:
      action.payload.id = uuidv4()
      action.payload.isDone = false

      return {
        ...state, // where assign to
        toDoList: [...state.toDoList, action.payload] // being assigned, new value
      };

      case DONE_TO_DO:
        // action.payload.isDone = true
        // console.log(action.payload === state.toDoList[0]);

        const tempList = state.toDoList.map(item => {
          item.id === action.payload && (item.isDone = !item.isDone)
          return item
        })
        return {
          ...state, 
          toDoList: tempList
        };

        case REMOVE_TO_DO:
          return {
            ...state,
            toDoList: state.toDoList.filter((item) => {
                return item.id !== action.payload
            })
          }
    default:
      return state;
  }
};

export default todosReducer;
