import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./api/createApolloClient";
import { useState } from "react";
import { ThemeMode } from "./styles/theme/theme";
import StyleWrapper from "./components/StyleWrapper/StyleWrapper";
import NavigationItems from "./const/navigations";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const apolloClient = createApolloClient();

function App() {
  const [themeMode, _] = useState<ThemeMode>('light');

  return (
    <ApolloProvider client={apolloClient}>
      <StyleWrapper>
        <BrowserRouter>
          <Routes>
            {NavigationItems.map((item) => (
              <Route {...item} />
            ))}
          </Routes>
        </BrowserRouter>
      </StyleWrapper>
    </ApolloProvider>
  )
}

export default App
