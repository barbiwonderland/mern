import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../services/userService";
const initialState = {
  loading: false,
  users: [],
  error: "",
};
export const fetchUsers = createAsyncThunk("user/fetchUsers", () =>
{
  return getUsers().then((response) => response.data);
});
export const usersSlice = createSlice({
  name: "users",
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
    addUserRedux: (state, action) =>
    {
      state.users = [...state.users, action.payload];
    },
    editUserRedux: (state, action) =>
    {
      state.users = state.users.map((user) =>
      {
        console.log(user);
        if (user._id === action.payload.id)
        {
          // todo lo que esta en user y todo lo que me pasaron por param del nuevo usser(se modifican solo los campos que se mandan nuevosd y el resto queda igual)
          return (user = { ...user, ...action.payload.user });
        } else
        {
          return user;
        }
      });
    },
    deleteUserRedux: (state, action) =>
    {
      const id = action.payload;
      console.log(id);
      state.users = state.users.filter((user) => user._id != id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserRedux, editUserRedux, deleteUserRedux } =
  usersSlice.actions;

export default usersSlice.reducer;
