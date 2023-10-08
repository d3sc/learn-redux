import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: UsersData },
  reducers: {
    // parameter state digunakan untuk mengatur state yang ada pada initial state. action ketika fungsi addUser dipanggil, maka akan mendapatkan data yang dikirim.
    addUser: (state, action) => {
      // write code for adding a user
      // karena menambahkan data array menggunakan fungsi push
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      // jika user id yang ada di dalam state tidak sama dengan payload id maka akan masuk kedalam state, kecuali yang id nya sama. maka dia akan dibuang.
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});

// jika memasang ini kita dapat mendapatkan valu dari action
export const { addUser, deleteUser, updateUsername } = userSlice.actions;

export default userSlice.reducer;
