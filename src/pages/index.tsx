import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mui/material/styles";
import "@mui/material/Button";
import App from "./App.tsx";
import "../index.css";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "../app/store/store.ts";
import { GRAPHQL_URL } from "../app/api/api.ts";

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </StrictMode>
);
