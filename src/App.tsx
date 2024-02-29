import { Container, Router } from "@components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount) => {
        return failureCount < 5;
      },
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container className="bg-amber-100 h-full items-center justify-center">
        <Router />
      </Container>
    </QueryClientProvider>
  );
};

export default App;
