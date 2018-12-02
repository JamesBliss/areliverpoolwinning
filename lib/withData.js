import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';


function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? "http://localhost:4000/graphql" : "https://footballQL.com/graphql"
  });
}

export default withApollo(createClient);
