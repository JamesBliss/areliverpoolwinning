import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';


function createClient({ headers }) {
  return new ApolloClient({
    uri: "https://footballql-7htssf3wb.now.sh/graphql"
  });
}

export default withApollo(createClient);
