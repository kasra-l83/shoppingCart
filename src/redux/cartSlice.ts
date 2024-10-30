import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '../types/todo.type';

export interface TodoListState{
  list: ITodo[]
  id: number
}
export const initialState: TodoListState= {
  list: [],
  id: 1
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) =>{
      state.list.push({ title: action.payload, id: state.id});
      state.id += 1;
    },
    removeTodo: (state, action: PayloadAction<string>) =>{
      state.list= state.list.filter((el) => el.title !== action.payload);
      state.id -= 1;
    }
  }
})
export const todoReducer= cartSlice.reducer;
export const {addTodo, removeTodo}= cartSlice.actions;