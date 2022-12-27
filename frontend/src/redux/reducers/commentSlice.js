import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getComments, GetUserComments } from "../../services/commentService"

const initialState = {
  loading: false,
  comments: [],
  error: "",
}
export const fetchCommentsById = createAsyncThunk(
  "comments/fetchCommentsById",
  async (userId) => {
    return GetUserComments(userId).then((response) => response.data)
  }
)
export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsById.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCommentsById.fulfilled, (state, action) => {
      state.loading = false
      state.comments = action.payload
      state.error = ""
    })
    builder.addCase(fetchCommentsById.rejected, (state, action) => {
      state.loading = false
      state.comments = []
      state.error = action.error.message
    })
  },
  reducers: {
    addCommentRedux: (state, action) => {
      state.comments = [...state.comments, action.payload]
    },
    editCommentRedux: (state, action) => {
      console.log(action.payload, "pauoad")
      state.comments = state.comments.map((comment) => {
        if (comment._id == action.payload._id) {
          // todo lo que esta en comment y todo lo que me pasaron por param del nuevo usser(se modifican solo los campos que se mandan nuevosd y el resto queda igual)
          return (comment = { ...comment, ...action.payload })
        } else {
          return comment
        }
      })
    },
    deletecommentRedux: (state, action) => {
      const id = action.payload
      console.log(id)
      state.comments = state.comments.filter((comment) => comment._id != id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCommentRedux, editCommentRedux, deletecommentRedux } =
  commentsSlice.actions

export default commentsSlice.reducer
