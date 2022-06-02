import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

export const client = new ApolloClient({
    link: new WebSocketLink({
        uri: 'wss://pure-whippet-82.hasura.app/v1/graphql',
        options:{
            reconnect: true,
            connectionParams: {
                headers : { 'x-hasura-admin-secret' : 'Vor4yQjHhreNAEA7mVgk9MInjX3YnsIZRXj2MJmj6kn9HEAGGfU1JmSRVkNEewj3' },
            }
        }
    }),
    cache: new InMemoryCache()
});