import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Country from "./pages/Country";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":country" element={<Country />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <div className="font-inter dark:text-gray-100 min-h-screen w-full bg-gray-100 dark:bg-gray-900 "></div>
    </BrowserRouter>
  );
}

export default App;
