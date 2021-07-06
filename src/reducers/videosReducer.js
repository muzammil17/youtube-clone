import { createSlice } from "@reduxjs/toolkit";

export const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
  },
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { setVideos } = videosSlice.actions;
export const allVideos = (state) => state.videos.videos;

export default videosSlice.reducer;
