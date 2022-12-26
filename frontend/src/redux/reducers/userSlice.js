import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../services/userService';
const initialState = {
  loading: false,
  users: [],
  error: "",
};
export const fetchUsers = createAsyncThunk("user/fetchUsers", () =>
{
  return getUsers().then(response => response.data);
});
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) =>
  {
    builder.addCase(fetchUsers.pending, (state) =>
    {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) =>
    {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) =>
    {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
  reducers: {

    addUser: (state, action) =>
    {
      state.users = [...state, action.payload];
    },
    editUser: (state, action) =>
    {
      state.value += action.payload;
    },
    deleteUser: (state, action) =>
    {
      const newList = state.filter(user => user.id != action.payload.id);
      state.users = newList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, editUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;