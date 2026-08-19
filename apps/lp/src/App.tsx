import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./api/createApolloClient";
import StyleWrapper from "./components/StyleWrapper/StyleWrapper";
import NavigationItems from "./const/navigations";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

export const apolloClient = createApolloClient();

function App() {
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
