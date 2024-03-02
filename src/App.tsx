import { Container, Router } from "@components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Dialog } from "./components/dialog/Dialog";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount) => {
        return failureCount < 1;
      },
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container className="bg-black h-full items-center justify-center">
        <Router />
        <Dialog />
      </Container>
    </QueryClientProvider>
  );
};

export default App;
