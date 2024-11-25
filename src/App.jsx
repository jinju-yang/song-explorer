import SearchPage from "./pages/SearchPage";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LikedPage from "./pages/LikedPage";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/liked" element={<LikedPage />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
