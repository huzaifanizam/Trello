import { createSlice } from "@reduxjs/toolkit";
const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    list: [],
  },
  reducers: {
    addlist: (state, action) => {
      state.list.push(action.payload);
      console.log("action called", action);
    },
    addCard: (state, action) => {
      console.log("action", action, state.list);
      state.list.forEach((item) => {
        if (item.id === action.payload.parentId) {
          if (Object.hasOwn(item, "children")) {
            item.children.push(action.payload);
          } else {
            item.children = [];
            item.children.push(action.payload);
          }
        }
      });
    },
  },
});

export const { addlist, addCard } = listSlice.actions;
export default listSlice.reducer;
