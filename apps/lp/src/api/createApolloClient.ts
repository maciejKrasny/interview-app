import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import getEnvironmentVariables from "../config/environment";
import { FragmentRegistryAPI, createFragmentRegistry } from "@apollo/client/cache";
import Fragments from "./fragments";

const { API_URL } = getEnvironmentVariables();

function setupFragments(): FragmentRegistryAPI {
    return createFragmentRegistry(gql`
        ${Fragments.QuestionsFragment}
        ${Fragments.CategoriesFragment}
    `)
}

export default function createApolloClient() {
    return new ApolloClient({
        uri: `${API_URL}/graphql`,
        cache: new InMemoryCache({
            fragments: setupFragments(),
        }),
    })
}