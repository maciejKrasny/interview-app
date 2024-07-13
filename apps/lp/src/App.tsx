import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./api/createApolloClient";
import { useState } from "react";
import { ThemeMode } from "./styles/theme/theme";
import StyleWrapper from "./components/StyleWrapper/StyleWrapper";
import NavigationItems from "./const/navigations";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

export const apolloClient = createApolloClient();

function App() {
  const [themeMode, _] = useState<ThemeMode>('light');

  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <StyleWrapper>
          <BrowserRouter>
            <Routes>
              {NavigationItems.map((item) => (
                <Route key={item.path} {...item} />
              ))}
            </Routes>
          </BrowserRouter>
        </StyleWrapper>
      </Provider>
    </ApolloProvider>
  )
}

export default App
