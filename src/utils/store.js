import { configureStore } from "@reduxjs/toolkit";
import appSlices from "./appSlices";
import cacheSlices from "./cacheSlices";
import searchSlices from "./searchSlices";
import livechatSlice from './livechatSlice'

const store = configureStore({
  reducer: {
    app: appSlices,
    cache: cacheSlices,
    search:searchSlices,
    livechat:livechatSlice,
  },
});

export default store;
