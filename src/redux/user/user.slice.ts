import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


interface IUser {
  id: number;
  name: string;
  email: string;
}

export const fetchListUsers = createAsyncThunk('user/fetchListUsers', async (userId, thunkAPI) => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  return data
})

const initialState: { listUsers: IUser[] } = {
  listUsers: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(fetchListUsers.fulfilled, (state, action) => {
      state.listUsers = action.payload
    })

  }
})

// Action creators are generated for each case reducer function
export const { } = userSlice.actions

export default userSlice.reducer