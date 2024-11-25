import SearchPage from "./pages/SearchPage";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <SearchPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
