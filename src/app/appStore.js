

import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/login/AuthSlice";
import personnelSlice from "../features/personnel_check/personnelSlice";

export const appStore = configureStore({
    reducer:{
        auth: AuthSlice,
        personnel: personnelSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['auth/setCredentials'], // Ignore specific actions
            ignoredPaths: ['auth.someNonSerializableField'], // Ignore specific paths
        },
    }),
    devTools: true
});