import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
  },
  reducers: {

    addComment: (state, action) =>
    {
      state = [...state, action.payload];
    },
    editComment: (state, action) =>
    {

      state.map(comment => comment.id == action.payload.id ? state.comments == action.payload : null);
    },
    deleteComment: (state, action) =>
    {
      const newList = state.filter(comment => comment.id != action.payload.id);
      state.comments = newList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addComment, editComment, deleteComment } = commentSlice.actions;

export default commentSlice.reducer;