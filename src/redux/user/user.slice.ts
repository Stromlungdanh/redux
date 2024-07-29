import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


interface IUser {
  id: number;
  name: string;
  email: string;
}
interface IUserPayload{
  email: string;
  name: string;
}

export const fetchListUsers = createAsyncThunk('user/fetchListUsers', async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  return data
})

export const createNewUser = createAsyncThunk('user/createNewUser', async (payload : IUserPayload, thunkAPI) => {
  const res = await fetch("http://localhost:8000/users", {
    method: "POST",
    body: JSON.stringify({
      email: payload.email,
      name: payload.name
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  if(data && data.id){
    thunkAPI.dispatch(fetchListUsers());
  }
  console.log("check payload", data)
  return data
})

export const updateUser = createAsyncThunk('user/updateUser', async (payload : any, thunkAPI) => {
  const res = await fetch(`http://localhost:8000/users/${payload.id}`, {
    method: "PUT",
    body: JSON.stringify({
      email: payload.email,
      name: payload.name
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  if(data && data.id){
    thunkAPI.dispatch(fetchListUsers());
  }
  console.log("check payload", data)
  return data
})
export const deleteUser = createAsyncThunk('user/deleteUser', async (payload : any, thunkAPI) => {
  const res = await fetch(`http://localhost:8000/users/${payload.id}`, {
    method: "DELETE",
    headers: {
    "Content-Type": " application/json"
    }
    });
  const data = await res.json();
  thunkAPI.dispatch(fetchListUsers());
  console.log("check payload", data)
  return data
})

const initialState: { 
  listUsers: IUser[], 
  isCreateSuccess: boolean,
  isUpdateSuccess:boolean,
  isDeleteSuccess:boolean,
} = {
  listUsers: [],
  isCreateSuccess: false,
  isUpdateSuccess: false,
  isDeleteSuccess: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetCreate(state){
      state.isCreateSuccess = false
    },
    resetUpdate(state) {
        state.isUpdateSuccess = false;
    },
    resetDelete(state) {
        state.isDeleteSuccess = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchListUsers.fulfilled, (state, action) => {
      state.listUsers = action.payload
    })
    .addCase(createNewUser.fulfilled, (state, action) => {
      state.isCreateSuccess = true
    })
    .addCase(updateUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.isUpdateSuccess = true;
    })
    .addCase(deleteUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.isDeleteSuccess = true;
    })
  }
})

// Action creators are generated for each case reducer function
export const { resetCreate,resetUpdate,resetDelete } = userSlice.actions

export default userSlice.reducer