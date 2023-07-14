import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
    console.log("🚀 ~ file: logger.ts:2 ~ logger ~ store: Current State", store.getState());
    console.log("🚀 ~ file: logger.ts:4 ~ action:", action)
  next(action)
  console.log("🚀 ~ file: logger.ts:2 ~ logger ~ store: Updated State", store.getState());
  
};

export default logger;
