import { ThemeProvider } from '@/presentation/context';
import { Home } from '@/presentation/pages/home';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export const App = () => {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: false,
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  );
};
export default App;
