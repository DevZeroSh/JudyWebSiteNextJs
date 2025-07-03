import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { ServiceApi } from "./Api/Service/ServiceApi";
import { CompanyApi } from "./Api/Companies/CompaniesApi";
import { TeamApi } from "./Api/employees/EmployeesApi";
import { BlogApi } from "./Api/Blog/BlogApi";
const store = configureStore({
  reducer: {
    [ServiceApi.reducerPath]: ServiceApi.reducer,
    [CompanyApi.reducerPath]: CompanyApi.reducer,
    [TeamApi.reducerPath]: TeamApi.reducer,
    [BlogApi.reducerPath]: BlogApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ServiceApi.middleware)
      .concat(CompanyApi.middleware)
      .concat(TeamApi.middleware)
      .concat(BlogApi.middleware),
});

setupListeners(store.dispatch);

export default store;
